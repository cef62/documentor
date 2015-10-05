'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports['default'] = customListStyle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _lodashUniq = require('lodash.uniq');

var _lodashUniq2 = _interopRequireDefault(_lodashUniq);

var PLUS_BULLET = 0x2B;
exports.PLUS_BULLET = PLUS_BULLET;
var STAR_BULLET = 0x2A;
exports.STAR_BULLET = STAR_BULLET;
var MINUS_BULLET = 0x2D;

exports.MINUS_BULLET = MINUS_BULLET;
var isValidType = function isValidType(type) {
  var typeToValidate = type;
  if (typeof type === 'string') {
    typeToValidate = type.charCodeAt(0);
  }
  return typeToValidate === PLUS_BULLET || typeToValidate === STAR_BULLET || typeToValidate === MINUS_BULLET;
};

var defaultRender = function defaultRender() {
  var _rest;

  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  return (_rest = rest[rest.length - 1]).renderToken.apply(_rest, rest);
};

var applyCustomClasses = function applyCustomClasses(token) {
  var classes = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  if (classes.length) {
    var aIndex = token.attrIndex('class');
    if (aIndex < 0) {
      token.attrPush(['class', classes.join(' ')]);
    } else {
      var updatedClasses = (0, _lodashUniq2['default'])(token.attrs[aIndex][1].split(' ').concat(classes));
      token.attrs[aIndex][1] = updatedClasses;
    }
  }
  return token;
};

var styleMapToString = function styleMapToString(styles) {
  return Object.keys(styles).map(function (key) {
    return key + ':' + styles[key] + ';';
  }).join('');
};

var applyCustomStyles = function applyCustomStyles(token) {
  var styles = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var stylesStr = undefined;
  var keys = Object.keys(styles);

  if (keys.length) {
    var aIndex = token.attrIndex('style');
    if (aIndex < 0) {
      stylesStr = styleMapToString(styles);
      token.attrPush(['style', stylesStr]);
    } else {
      var currStyles = token.attrs[aIndex][1].split(';').map(function (rule) {
        var _rule$trim$split$map = rule.trim().split(':').map(function (str) {
          return str.trim();
        });

        var _rule$trim$split$map2 = _slicedToArray(_rule$trim$split$map, 2);

        var key = _rule$trim$split$map2[0];
        var value = _rule$trim$split$map2[1];

        return _defineProperty({}, key, value);
      });
      var mergedStyles = Object.assign(currStyles, styles);
      var styleStr = styleMapToString(mergedStyles);
      token.attrs[aIndex][1] = styleStr;
    }
  }
  return token;
};

function customListStyle(md) {
  var rules = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var _rules$classes = rules.classes;
  _rules$classes = _rules$classes === undefined ? {} : _rules$classes;
  var _rules$classes$ul = _rules$classes.ul;
  var listClasses = _rules$classes$ul === undefined ? [] : _rules$classes$ul;
  var _rules$classes$li = _rules$classes.li;
  var itemClasses = _rules$classes$li === undefined ? [] : _rules$classes$li;
  var _rules$styles = rules.styles;
  _rules$styles = _rules$styles === undefined ? {} : _rules$styles;
  var _rules$styles$ul = _rules$styles.ul;
  var listStyles = _rules$styles$ul === undefined ? {} : _rules$styles$ul;
  var _rules$styles$li = _rules$styles.li;
  var itemStyles = _rules$styles$li === undefined ? {} : _rules$styles$li;
  var type = rules.type;

  if (!isValidType(type)) {
    console.error('markdown-it-custom-list-style received an invalid \'type\': ' + type);
    return;
  }

  var defaultBulletListOpenRender = md.renderer.rules.bullet_list_open || defaultRender;
  var defaultListItemOpenRender = md.renderer.rules.list_item_open || defaultRender;

  // tokens, idx, options, env, self
  md.renderer.rules.bullet_list_open = function (tokens, idx) {
    for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      rest[_key2 - 2] = arguments[_key2];
    }

    if (tokens[idx].markup.charCodeAt(0) === type) {
      tokens[idx] = applyCustomClasses(tokens[idx], listClasses);
      tokens[idx] = applyCustomStyles(tokens[idx], listStyles);
    }
    return defaultBulletListOpenRender.apply(undefined, [tokens, idx].concat(rest));
  };

  md.renderer.rules.list_item_open = function (tokens, idx) {
    for (var _len3 = arguments.length, rest = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      rest[_key3 - 2] = arguments[_key3];
    }

    if (tokens[idx].markup.charCodeAt(0) === type) {
      tokens[idx] = applyCustomClasses(tokens[idx], itemClasses);
      tokens[idx] = applyCustomStyles(tokens[idx], itemStyles);
    }
    return defaultListItemOpenRender.apply(undefined, [tokens, idx].concat(rest));
  };
}