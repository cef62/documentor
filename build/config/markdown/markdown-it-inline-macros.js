// Process inline-level custom macros

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports['default'] = macrosPlugin;

function macrosPlugin(md, macros) {
  var defaultValidate = function defaultValidate() {
    return true;
  };

  // tokens, idx, _options, env, self
  var renderDefault = function renderDefault() {
    var _rest;

    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    return (_rest = rest[rest.length - 1]).renderToken.apply(_rest, rest);
  };

  function createMacroRule(ruleName, validate) {
    return function (state, silent) {
      if (state.src.charCodeAt(state.pos) !== 0x21 /* ! */) {
          return false;
        }
      if (state.src.charCodeAt(state.pos + 1) !== 0x5B /* [ */) {
          return false;
        }
      if (state.src.charCodeAt(state.pos + 2) !== 0x3A /* : */) {
          return false;
        }

      var max = state.posMax;
      var labelStart = state.pos + 2;
      var labelEnd = md.helpers.parseLinkLabel(state, state.pos + 1, false);

      // parser failed to find ']', so it's not a valid link
      if (labelEnd < 0) {
        return false;
      }

      var rule = /!\[:([^\] ]+)([^\]]*)\](?:\(([^\)]*)\))?/igm;
      var split = rule.exec(state.src.slice(state.pos));
      if (!split) {
        return false;
      }

      var _split = _slicedToArray(split, 4);

      var matchedString = _split[0];
      var _name = _split[1];
      var _split$2 = _split[2];

      var _params = _split$2 === undefined ? '' : _split$2;

      var _context = _split[3];

      if (!_name || !_name.trim().length || _name !== ruleName) {
        // FIXME: should throw an error?
        return false;
      }

      var nextStepPos = state.pos + matchedString.length;

      var name = _name.trim();
      var params = _params.split(',').map(function () {
        var param = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        return param.trim();
      });
      var context = _context ? _context.trim() : undefined;
      // console.log(`name: ${name}`);
      // console.log(`params: ${params}`);
      // console.log(`context: ${context}`);

      if (!validate(name, params, context)) {
        // FIXME: make the validation function pass an error message
        console.log('Macro: ' + name + ' received invalid parameters: ' + (params || '[no params]') + ' for context: ' + (context || '[no context]'));
        return false;
      }

      // console.log('Processing macro: ' + ruleName);

      if (!silent) {
        state.pos = labelStart;
        state.posMax = labelEnd;

        var token = state.push(name + '_open', 'div', 1);
        token.meta = { name: name, params: params, context: context };
        state.md.inline.tokenize(state);

        token = state.push(name + '_close', 'div', -1);
        token.meta = { name: name, params: params, context: context };
      }

      state.pos = nextStepPos;
      state.posMax = max;

      // console.log( `New starting token: ${state.src.slice(nextStepPos)}` );
      // console.log(state);
      return true;
    };
  }

  Object.keys(macros).forEach(function (key) {
    var _macros$key = macros[key];
    var _macros$key$validate = _macros$key.validate;
    var validate = _macros$key$validate === undefined ? defaultValidate : _macros$key$validate;
    var _macros$key$render = _macros$key.render;
    var render = _macros$key$render === undefined ? renderDefault : _macros$key$render;

    var macro = createMacroRule(key, validate);
    md.inline.ruler.before('link', 'macro-' + key, macro);
    md.renderer.rules[key + '_open'] = render;
    md.renderer.rules[key + '_close'] = render;
  });
}

module.exports = exports['default'];