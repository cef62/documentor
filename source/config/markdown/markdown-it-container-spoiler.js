const spoiler = {
  validate(params) {
    return params.trim().match(/^spoiler\s+(.*)$/);
  },

  render(tokens, idx) {
    const content = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
    let output;

    if (tokens[idx].nesting === 1) {
      // opening tag
      output = '<details><summary>' + content[1] + '</summary>\n';
    } else {
      // closing tag
      output = '</details>\n';
    }
    return output;
  },
};

export default spoiler;
