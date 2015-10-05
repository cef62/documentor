'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _metalsmithTemplates = require('metalsmith-templates');

var _metalsmithTemplates2 = _interopRequireDefault(_metalsmithTemplates);

// ************************************************************
// HANDLEBARS Assets Path normalization
// ************************************************************

var relativePathHelper = function relativePathHelper(current, target) {
  // normalize and remove starting slash from path
  if (!current || !target) {
    return '';
  }
  var currentNormalized = _path2['default'].normalize(current).slice(0);
  var targetNormalized = _path2['default'].normalize(target).slice(0);
  currentNormalized = _path2['default'].dirname(currentNormalized);
  return _path2['default'].relative(currentNormalized, targetNormalized);
};

_handlebars2['default'].registerHelper('relative_path', relativePathHelper);

// ************************************************************

var templatesTask = (0, _metalsmithTemplates2['default'])({
  engine: 'handlebars'
});

exports['default'] = function () {
  return templatesTask;
};

module.exports = exports['default'];