function happyMacro(tokens, idx/* , _options, env, self*/) {
  const { context } = tokens[idx].meta;
  let output;
  if (tokens[idx].nesting === 1) {
    // set main node content
    tokens[idx + 1].content = context;
    output = `<div style="display: inline-block;" class="green">`;
  } else {
    // closing tag
    output = `</div>\n`;
  }
  return output;
  //   tokens[idx].attrPush([ 'class', 'XXX' ]);
  // return self.renderToken(tokens, idx, _options, env, self);
}

function renderMacro(tokens, idx/* , _options, env, self*/) {
  const { /* name, */params = [], context } = tokens[idx].meta;
  let output;
  if (tokens[idx].nesting === 1) {
    // set main node content
    tokens[idx + 1].content = context;
    // opening tag
    const classes = params.join(' ');
    output = `<div style="display: inline-block;" class="${classes}">`;
  } else {
    // closing tag
    output = `</div>\n`;
  }
  return output;
}

const macros = {
  classes: {
    render: renderMacro,
    validate: (name, params/* , context*/) => params.length > 2,
  },
  happy: {
    render: happyMacro,
  },
};

export default macros;
