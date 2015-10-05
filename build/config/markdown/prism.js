'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.highlightMarkdown = highlightMarkdown;
exports.configurePrism = configurePrism;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _prismjs = require('prismjs');

var _prismjs2 = _interopRequireDefault(_prismjs);

var prismExtensions = {
  js: 'javascript',
  scss: 'css',
  less: 'css',
  sass: 'css',
  html: 'markup',
  svg: 'markup',
  xml: 'markup',
  py: 'python',
  rb: 'ruby',
  ps1: 'powershell',
  psm1: 'powershell'
};

var renderCode = function renderCode(utils) {
  return function (tokens, idx, options, env, self) {
    var unescapeAll = utils.unescapeAll;
    var escapeHtml = utils.escapeHtml;

    var token = tokens[idx];
    var info = token.info ? unescapeAll(token.info).trim() : '';
    var langName = 'markup';
    var highlighted = undefined;

    if (info) {
      langName = info.split(/\s+/g)[0];
    }
    token.attrPush(['class', options.langPrefix + langName]);

    if (options.highlight) {
      highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
    } else {
      highlighted = escapeHtml(token.content);
    }

    return {
      highlighted: highlighted,
      attrs: self.renderAttrs(token)
    };
  };
};

function highlightMarkdown(code, lang) {
  var usedLang = 'markup';
  if (!_prismjs2['default'].languages.hasOwnProperty(lang)) {
    usedLang = prismExtensions[lang];
  }
  if (!usedLang) {
    usedLang = 'markup';
  }
  return _prismjs2['default'].highlight(code, _prismjs2['default'].languages[usedLang]);
}

function configurePrism(markdownIt) {
  var utils = markdownIt.utils;

  markdownIt.renderer.rules.code_block = function () {
    var _renderCode = renderCode(utils).apply(undefined, arguments);

    var highlighted = _renderCode.highlighted;
    var attrs = _renderCode.attrs;

    return '<pre ' + attrs + '><code ' + attrs + '>' + highlighted + '</code></pre>\n';
  };

  markdownIt.renderer.rules.fence = function () {
    var _renderCode2 = renderCode(utils).apply(undefined, arguments);

    var highlighted = _renderCode2.highlighted;
    var attrs = _renderCode2.attrs;

    return '<pre ' + attrs + '><code ' + attrs + '>' + highlighted + '</code></pre>\n';
  };

  markdownIt.renderer.rules.code_inline = function () {
    var _renderCode3 = renderCode(utils).apply(undefined, arguments);

    var highlighted = _renderCode3.highlighted;
    var attrs = _renderCode3.attrs;

    return '<code ' + attrs + '>' + highlighted + '</code>';
  };
}