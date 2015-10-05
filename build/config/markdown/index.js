'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = configureMarkdown;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _metalsmithMarkdownit = require('metalsmith-markdownit');

var _metalsmithMarkdownit2 = _interopRequireDefault(_metalsmithMarkdownit);

var _markdownItEmoji = require('markdown-it-emoji');

var _markdownItEmoji2 = _interopRequireDefault(_markdownItEmoji);

var _markdownItContainer = require('markdown-it-container');

var _markdownItContainer2 = _interopRequireDefault(_markdownItContainer);

var _markdownItFootnote = require('markdown-it-footnote');

var _markdownItFootnote2 = _interopRequireDefault(_markdownItFootnote);

var _markdownItCheckbox = require('markdown-it-checkbox');

var _markdownItCheckbox2 = _interopRequireDefault(_markdownItCheckbox);

var _markdownItInlineMacros = require('./markdown-it-inline-macros');

var _markdownItInlineMacros2 = _interopRequireDefault(_markdownItInlineMacros);

var _prism = require('./prism');

var _markdownItCustomListStyle = require('./markdown-it-custom-list-style');

var _markdownItCustomListStyle2 = _interopRequireDefault(_markdownItCustomListStyle);

var _markdownItContainerCx = require('./markdown-it-container-cx');

var _markdownItContainerCx2 = _interopRequireDefault(_markdownItContainerCx);

var _markdownItContainerSpoiler = require('./markdown-it-container-spoiler');

var _markdownItContainerSpoiler2 = _interopRequireDefault(_markdownItContainerSpoiler);

function configureMarkdown() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$macros = _ref.macros;
  var macros = _ref$macros === undefined ? {} : _ref$macros;
  var _ref$customList = _ref.customList;
  var customList = _ref$customList === undefined ? [] : _ref$customList;
  var _ref$extra = _ref.extra;
  var extra = _ref$extra === undefined ? [] : _ref$extra;

  var md = (0, _metalsmithMarkdownit2['default'])({
    html: true,
    highlight: _prism.highlightMarkdown
  });

  // console.log(Object.keys(md.parser.helpers));
  // console.log(Object.keys(md.parser.utils));

  // console.log(Object.keys(md.parser.renderer.rules));

  // console.log(md.parser.renderer.rules.code_block.toString());
  // console.log(md.parser.renderer.rules.code_inline.toString());
  //  console.log(md.parser.renderer.rules.list.toString());

  // console.log(md.parser.block.ruler.__rules__.map( ({ name }) => name ));
  // console.log( md.parser.block.ruler.__rules__.forEach( ({ name, fn }) => {
  //   if (name === 'list') {
  //     console.log(fn.toString());
  //   }
  // }));

  md.parser.use(_markdownItEmoji2['default']).use(_markdownItFootnote2['default']).use(_markdownItContainer2['default'], 'cx', _markdownItContainerCx2['default']).use(_markdownItContainer2['default'], 'spoiler', _markdownItContainerSpoiler2['default']).use(_markdownItCheckbox2['default']) // vedi opzioni per aggiungere custom classes
  .use(_markdownItInlineMacros2['default'], macros);

  // customList must be an array of objects
  customList.forEach(function (style) {
    return md.parser.use(_markdownItCustomListStyle2['default'], style);
  });

  // extra must be an array of array
  extra.forEach(function (plugin) {
    var _md$parser;

    return (_md$parser = md.parser).use.apply(_md$parser, _toConsumableArray(plugin));
  });

  (0, _prism.configurePrism)(md.parser);

  return md;
}

module.exports = exports['default'];