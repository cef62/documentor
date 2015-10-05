'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = configureLunr;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _metalsmithLunr = require('metalsmith-lunr');

var _metalsmithLunr2 = _interopRequireDefault(_metalsmithLunr);

var _lunr = require('lunr');

var _lunr2 = _interopRequireDefault(_lunr);

var _lunrLanguagesLunrStemmerSupport = require('lunr-languages/lunr.stemmer.support');

var _lunrLanguagesLunrStemmerSupport2 = _interopRequireDefault(_lunrLanguagesLunrStemmerSupport);

var _lunrLanguagesLunrIt = require('lunr-languages/lunr.it');

var _lunrLanguagesLunrIt2 = _interopRequireDefault(_lunrLanguagesLunrIt);

(0, _lunrLanguagesLunrStemmerSupport2['default'])(_lunr2['default']);
(0, _lunrLanguagesLunrIt2['default'])(_lunr2['default']);

function configureLunr() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var ref = options.id;

  return (0, _metalsmithLunr2['default'])({
    // important: use default (filePath) to match with lunr-metadata-store
    ref: ref,
    indexPath: 'index.json',
    fields: {
      title: 1,
      contents: 2,
      urlPath: 3,
      tags: 10
    },
    pipelineFunctions: [_lunr2['default'].trimmer],

    // lunr.no.stopWordFilter,
    // lunr.no.stemmer
    preprocess: function preprocess(content) {
      // if(this.nav_path && this.nav_path.indexOf('flat_progress_bar') > -1) {
      //   console.log(this);
      // }
      // Replace all occurrences of __title__ with the current file's title metadata.
      return content.replace(/__title__/g, this.title);
    }
  });
}

module.exports = exports['default'];