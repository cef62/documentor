function happyMacro(tokens, idx, _options, env, self) {

  const { context } = tokens[idx].meta;

  if (tokens[idx].nesting === 1) {
    // set main node content
    tokens[idx + 1].content = context;
    return `<div style="display: inline-block;" class="green">`;
  } else {
    // closing tag
    return `</div>\n`;
  }
  //   tokens[idx].attrPush([ 'class', 'stikazzi' ]);
  // return self.renderToken(tokens, idx, _options, env, self);
}

function renderMacro(tokens, idx, _options, env, self) {

  const { name, params = [], context } = tokens[idx].meta;

  if (tokens[idx].nesting === 1) {
    // set main node content
    tokens[idx + 1].content = context;
    // opening tag
    const classes = params.join(' ');
    return `<div style="display: inline-block;" class="${classes}">`;
  } else {
    // closing tag
    return `</div>\n`;
  }
  //   tokens[idx].attrPush([ 'class', 'stikazzi' ]);
  // return self.renderToken(tokens, idx, _options, env, self);
}

const macros = {
  classes: {
    render: renderMacro,
    validate: (name, params, context) => params.length > 2,
  },
  happy: {
    render: happyMacro,
  },
};

export default macros;
