const cx = {
  validate(params) {
    return params.trim().match(/^cx\s+(.*)$/);
  },

  render(tokens, idx) {
    const { type, info, nesting } = tokens[idx];
    let tag = 'div';
    let inline = '';
    let style;

    // opening tag
    const params = info
    .trim()
    .match(/^cx\s+(.*)$/)[1]
    .split(' ')
    .map( param => param.trim() )
    .filter( param => param.trim().length );

    // accepted params:
    // --inline
    // --tag div|span|etc
    // --style 'color:red;display:none;' --> wrap in single quotes and use always semi-colon

    const inlinePos = params.indexOf('--inline');
    if (inlinePos > -1 ) {
      inline = '\n';
      params.splice(inlinePos, 1);
    }

    const tagPos = params.indexOf('--tag');
    if (tagPos > -1 ) {
      tag = params.splice(tagPos, 2)[1];
    }

    const stylePos = params.indexOf('--style');
    if (stylePos > -1 ) {
      style = params.splice(stylePos, 2)[1].slice(1, -1);
    }

    let rendered;
    if (nesting === 1) {
      // FIXME: workaraound waiting main repo accept pull request to add info
      // to closing tag
      const searchPattern = type.slice(0, -4);
      // look for closing tag
      const closingToken = tokens.slice(idx + 1).find( token => {
        return token.type.indexOf(searchPattern) === 0;
      });
      closingToken.info = info;

      const classes = params.join(' ');
      const styleAttr = style ? `style="${style}"` : '';
      rendered = `<${tag} class="${classes}" ${styleAttr}>`;
    } else {
      // closing tag
      rendered = `</${tag}>${inline}`;
    }
    return rendered;
  },
};

export default cx;
