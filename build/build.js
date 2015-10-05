'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = buildDocumentor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _configDefaults = require('./config/defaults');

var _documentor = require('./documentor');

var _documentor2 = _interopRequireDefault(_documentor);

function buildDocumentor() {
  var _options = (0, _configDefaults.getDefaultOptions)();

  return Object.defineProperties({
    addStaticAsset: function addStaticAsset(info) {
      _options.assets.push(info);
      return this;
    },

    configureNavigation: function configureNavigation() {
      var navOptions = arguments.length <= 0 || arguments[0] === undefined ? _configDefaults.NAVIGATION_OPTIONS : arguments[0];

      _options.navigation = Object.assign({}, navOptions);
      return this;
    },

    configureMeta: function configureMeta() {
      var meta = arguments.length <= 0 || arguments[0] === undefined ? _configDefaults.META_OPTIONS : arguments[0];

      _options.meta = Object.assign({}, meta);
      return this;
    },

    configureReplacePatterns: function configureReplacePatterns() {
      var patterns = arguments.length <= 0 || arguments[0] === undefined ? _configDefaults.REPLACE_PATTERNS_OPTIONS : arguments[0];

      _options.replace = Object.assign({}, patterns);
      return this;
    },

    configureMarkdown: function configureMarkdown() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? _configDefaults.MARKDOWN_OPTIONS : arguments[0];

      var _ref$macros = _ref.macros;
      var macros = _ref$macros === undefined ? {} : _ref$macros;
      var _ref$customList = _ref.customList;
      var customList = _ref$customList === undefined ? [] : _ref$customList;

      _options.markdown = Object.assign({}, { macros: macros, customList: customList });
      return this;
    },

    configureBabel: function configureBabel() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? _configDefaults.BABEL_OPTIONS : arguments[0];

      _options.babel = Object.assign({}, options);
      return this;
    },

    configureLunr: function configureLunr() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? _configDefaults.LUNR_OPTIONS : arguments[0];

      _options.lunr = Object.assign({}, options);
      return this;
    },

    setSourceFolder: function setSourceFolder() {
      var target = arguments.length <= 0 || arguments[0] === undefined ? _configDefaults.SOURCE_FOLDER : arguments[0];

      _options.folder.source = target;
      return this;
    },

    setBuildFolder: function setBuildFolder() {
      var target = arguments.length <= 0 || arguments[0] === undefined ? _configDefaults.BUILD_FOLDER : arguments[0];

      _options.folder.build = target;
      return this;
    },

    run: function run(source, build) {
      var opt = Object.assign({}, _options);
      opt.folders.source = source ? source : opt.folders.source;
      opt.folders.build = build ? build : opt.folders.build;
      (0, _documentor2['default'])(opt);
    }
  }, {
    options: {
      set: function set(value) {
        _options = value;
      },
      get: function get() {
        return _options;
      },
      configurable: true,
      enumerable: true
    }
  });
}

module.exports = exports['default'];