'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = lunrMetadataStore;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _minimatch = require('minimatch');

var _minimatch2 = _interopRequireDefault(_minimatch);

var defaultOutput = 'lunr-metadata-store.json';
exports.defaultOutput = defaultOutput;
var defaultFields = {
  enable: 'lunr',
  ref: null,
  metadata: {
    title: 'title'
  }
};

exports.defaultFields = defaultFields;

function lunrMetadataStore() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$output = _ref.output;
  var output = _ref$output === undefined ? defaultOutput : _ref$output;
  var _ref$fields = _ref.fields;
  var fields = _ref$fields === undefined ? defaultFields : _ref$fields;
  var _fields$enable = fields.enable;
  var enable = _fields$enable === undefined ? true : _fields$enable;
  var ref = fields.ref;
  var _fields$metadata = fields.metadata;
  var metadata = _fields$metadata === undefined ? {} : _fields$metadata;

  var metadataKeys = Object.keys(metadata);

  if (!metadataKeys.length) {
    console.error('metalsmith-lunr-metadata.store expected a valid \'metadata\' option.');
    return false;
  }

  return function (files /* , metalsmith*/) {
    var store = Object.keys(files).reduce(function (acc, filepath) {
      if ((0, _minimatch2['default'])(filepath, '**/*.html')) {
        (function () {
          var file = files[filepath];
          if (enable === true || file[enable]) {
            var uid = ref ? file[ref] : filepath;
            acc[uid] = metadataKeys.reduce(function (map, key) {
              map[metadata[key]] = file[key];
              return map;
            }, {});
            acc[uid].filepath = filepath;
            acc[uid].ref = uid;
          }
        })();
      }
      return acc;
    }, {});

    var contents = new Buffer(JSON.stringify(store));
    files[output] = { contents: contents };
  };
}