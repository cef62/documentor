// Process inline-level custom macros

export default function macrosPlugin(md, macros) {
  const defaultValidate = () => true;

  // tokens, idx, _options, env, self
  const renderDefault = (...rest) => rest[rest.length - 1].renderToken(...rest);

  function createMacroRule(ruleName, validate) {
    return (state, silent) => {
      if (state.src.charCodeAt(state.pos) !== 0x21 /* ! */ ) {
        return false;
      }
      if (state.src.charCodeAt(state.pos + 1) !== 0x5B /* [ */ ) {
        return false;
      }
      if (state.src.charCodeAt(state.pos + 2) !== 0x3A /* : */ ) {
        return false;
      }

      const max = state.posMax;
      const labelStart = state.pos + 2;
      const labelEnd = md.helpers.parseLinkLabel(state, state.pos + 1, false);

      // parser failed to find ']', so it's not a valid link
      if (labelEnd < 0) {
        return false;
      }

      const rule = /!\[:([^\] ]+)([^\]]*)\](?:\(([^\)]*)\))?/igm;
      const split = rule.exec(state.src.slice(state.pos));
      if (!split) {
        return false;
      }

      const [ matchedString, _name, _params = '', _context ] = split;

      if (!_name || !_name.trim().length || _name !== ruleName) {
        // FIXME: should throw an error?
        return false;
      }

      const nextStepPos = state.pos + matchedString.length;

      const name = _name.trim();
      const params = _params.split(',').map( (param = '') => param.trim());
      const context = _context ? _context.trim() : undefined;
      // console.log(`name: ${name}`);
      // console.log(`params: ${params}`);
      // console.log(`context: ${context}`);

      if (!validate(name, params, context)) {
        // FIXME: make the validation function pass an error message
        console.log(`Macro: ${name} received invalid parameters: ${params || '[no params]'} for context: ${context || '[no context]'}`);
        return false;
      }

      // console.log('Processing macro: ' + ruleName);

      if (!silent) {
        state.pos = labelStart;
        state.posMax = labelEnd;

        let token = state.push(`${name}_open`, 'div', 1);
        token.meta = { name, params, context };
        state.md.inline.tokenize(state);

        token = state.push(`${name}_close`, 'div', -1);
        token.meta = { name, params, context };
      }

      state.pos = nextStepPos;
      state.posMax = max;

      // console.log( `New starting token: ${state.src.slice(nextStepPos)}` );
      // console.log(state);
      return true;
    };
  }

  Object.keys(macros).forEach( (key) => {
    const {
      validate = defaultValidate,
      render = renderDefault,
    } = macros[key];

    const macro = createMacroRule(key, validate);
    md.inline.ruler.before('link', `macro-${key}`, macro);
    md.renderer.rules[`${key}_open`] = render;
    md.renderer.rules[`${key}_close`] = render;
  });
}
