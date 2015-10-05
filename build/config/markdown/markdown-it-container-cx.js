'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var cx = {
  validate: function validate(params) {
    return params.trim().match(/^cx\s+(.*)$/);
  },

  render: function render(tokens, idx) {
    var _tokens$idx = tokens[idx];
    var type = _tokens$idx.type;
    var info = _tokens$idx.info;
    var nesting = _tokens$idx.nesting;

    var tag = 'div';
    var inline = '';
    var style = undefined;

    // opening tag
    var params = info.trim().match(/^cx\s+(.*)$/)[1].split(' ').map(function (param) {
      return param.trim();
    }).filter(function (param) {
      return param.trim().length;
    });

    // accepted params:
    // --inline
    // --tag div|span|etc
    // --style 'color:red;display:none;' --> wrap in single quotes and use always semi-colon

    var inlinePos = params.indexOf('--inline');
    if (inlinePos > -1) {
      inline = '\n';
      params.splice(inlinePos, 1);
    }

    var tagPos = params.indexOf('--tag');
    if (tagPos > -1) {
      tag = params.splice(tagPos, 2)[1];
    }

    var stylePos = params.indexOf('--style');
    if (stylePos > -1) {
      style = params.splice(stylePos, 2)[1].slice(1, -1);
    }

    var rendered = undefined;
    if (nesting === 1) {
      (function () {
        // FIXME: workaraound waiting main repo accept pull request to add info
        // to closing tag
        var searchPattern = type.slice(0, -4);
        // look for closing tag
        var closingToken = tokens.slice(idx + 1).find(function (token) {
          return token.type.indexOf(searchPattern) === 0;
        });
        closingToken.info = info;

        var classes = params.join(' ');
        var styleAttr = style ? 'style="' + style + '"' : '';
        rendered = '<' + tag + ' class="' + classes + '" ' + styleAttr + '>';
      })();
    } else {
      // closing tag
      rendered = '</' + tag + '>' + inline;
    }
    return rendered;
  }
};

exports['default'] = cx;
module.exports = exports['default'];