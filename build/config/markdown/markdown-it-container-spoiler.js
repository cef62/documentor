'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var spoiler = {
  validate: function validate(params) {
    return params.trim().match(/^spoiler\s+(.*)$/);
  },

  render: function render(tokens, idx) {
    var content = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
    var output = undefined;

    if (tokens[idx].nesting === 1) {
      // opening tag
      output = '<details><summary>' + content[1] + '</summary>\n';
    } else {
      // closing tag
      output = '</details>\n';
    }
    return output;
  }
};

exports['default'] = spoiler;
module.exports = exports['default'];