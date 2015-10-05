'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _slash = require('slash');

var _slash2 = _interopRequireDefault(_slash);

var SOURCE_FOLDER = (0, _slash2['default'])(_path2['default'].join(process.cwd(), 'data'));

exports.SOURCE_FOLDER = SOURCE_FOLDER;
var BUILD_FOLDER = (0, _slash2['default'])(_path2['default'].join(process.cwd(), 'build'));

exports.BUILD_FOLDER = BUILD_FOLDER;
var BABEL_OPTIONS = { stage: 0, sourceMaps: true };

exports.BABEL_OPTIONS = BABEL_OPTIONS;
var MARKDOWN_OPTIONS = { macros: {}, customList: [], extra: [] };

exports.MARKDOWN_OPTIONS = MARKDOWN_OPTIONS;
var META_OPTIONS = {
  title: 'Docs',
  description: 'Project\'s Documentation',
  partials: {
    breadcrumbs: '_breadcrumbs',
    nav_global: '_nav_global',
    nav_mobile: '_nav_mobile',
    nav_relative: '_nav_relative',
    nav_footer: '_nav_footer',
    nav__children: '_nav__children'
  }
};

exports.META_OPTIONS = META_OPTIONS;
var REPLACE_PATTERNS_OPTIONS = {};

exports.REPLACE_PATTERNS_OPTIONS = REPLACE_PATTERNS_OPTIONS;
var NAVIGATION_OPTIONS = {
  config: {
    primary: {
      sortBy: 'nav_sort',
      filterProperty: 'nav_groups'
    },
    footer: {
      sortBy: 'nav_sort',
      filterProperty: 'nav_groups'
    }
  },
  options: {
    navListProperty: 'navs'
  }
};

exports.NAVIGATION_OPTIONS = NAVIGATION_OPTIONS;
var LUNR_OPTIONS = {
  fields: {
    enable: 'lunr',
    id: null, // null to use file path
    metadata: {
      title: 'title',
      search_url: 'url'
    }
  }
};

exports.LUNR_OPTIONS = LUNR_OPTIONS;
var getDefaultOptions = function getDefaultOptions() {
  return {
    folders: {
      source: SOURCE_FOLDER,
      build: BUILD_FOLDER
    },
    assets: [],
    navigation: NAVIGATION_OPTIONS,
    meta: META_OPTIONS,
    replace: REPLACE_PATTERNS_OPTIONS,
    markdown: MARKDOWN_OPTIONS,
    babel: BABEL_OPTIONS,
    lunr: LUNR_OPTIONS
  };
};
exports.getDefaultOptions = getDefaultOptions;