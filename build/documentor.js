'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = documentor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _metalsmith = require('metalsmith');

var _metalsmith2 = _interopRequireDefault(_metalsmith);

var _metalsmithAssets = require('metalsmith-assets');

var _metalsmithAssets2 = _interopRequireDefault(_metalsmithAssets);

var _metalsmithDrafts = require('metalsmith-drafts');

var _metalsmithDrafts2 = _interopRequireDefault(_metalsmithDrafts);

var _metalsmithBabel = require('metalsmith-babel');

var _metalsmithBabel2 = _interopRequireDefault(_metalsmithBabel);

var _metalsmithNavigation = require('metalsmith-navigation');

var _metalsmithNavigation2 = _interopRequireDefault(_metalsmithNavigation);

var _metalsmithTextReplace = require('metalsmith-text-replace');

var _metalsmithTextReplace2 = _interopRequireDefault(_metalsmithTextReplace);

var _configTemplates = require('./config/templates');

var _configTemplates2 = _interopRequireDefault(_configTemplates);

var _configMarkdown = require('./config/markdown');

var _configMarkdown2 = _interopRequireDefault(_configMarkdown);

var _configLunr = require('./config/lunr');

var _configLunr2 = _interopRequireDefault(_configLunr);

var _configMetalsmithLunrMetadataStore = require('./config/metalsmith-lunr-metadata-store');

var _configMetalsmithLunrMetadataStore2 = _interopRequireDefault(_configMetalsmithLunrMetadataStore);

function documentor(opt) {
  var meta = opt.meta;
  var babel = opt.babel;
  var replace = opt.replace;
  var markdown = opt.markdown;
  var lunr = opt.lunr;
  var _opt$folders = opt.folders;
  var source = _opt$folders.source;
  var build = _opt$folders.build;
  var _opt$assets = opt.assets;
  var assets = _opt$assets === undefined ? [] : _opt$assets;
  var _opt$navigation = opt.navigation;
  _opt$navigation = _opt$navigation === undefined ? {} : _opt$navigation;
  var config = _opt$navigation.config;
  var options = _opt$navigation.options;

  var metal = (0, _metalsmith2['default'])(source).destination(build).clean(true).metadata(meta).use((0, _metalsmithDrafts2['default'])()).use((0, _configMarkdown2['default'])(markdown)).use((0, _metalsmithTextReplace2['default'])(replace)).use((0, _metalsmithNavigation2['default'])(config, options)).use((0, _configTemplates2['default'])());

  assets.forEach(function (asset) {
    return metal.use((0, _metalsmithAssets2['default'])(asset));
  });

  metal.use((0, _metalsmithBabel2['default'])(babel)).use((0, _configLunr2['default'])(lunr)).use((0, _configMetalsmithLunrMetadataStore2['default'])(lunr));

  metal.build(function (err) {
    if (err) {
      throw err;
    }
  });
}

module.exports = exports['default'];