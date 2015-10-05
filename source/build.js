import {
  getDefaultOptions,
  SOURCE_FOLDER, BUILD_FOLDER,
  BABEL_OPTIONS, MARKDOWN_OPTIONS, META_OPTIONS,
  REPLACE_PATTERNS_OPTIONS, NAVIGATION_OPTIONS, LUNR_OPTIONS,
} from './config/defaults';

import documentor from './documentor';

export default function buildDocumentor() {
  let _options = getDefaultOptions();

  return {
    addStaticAsset(info) {
      _options.assets.push(info);
      return this;
    },

    configureNavigation(navOptions = NAVIGATION_OPTIONS) {
      _options.navigation = Object.assign({}, navOptions);
      return this;
    },

    configureMeta(meta = META_OPTIONS) {
      _options.meta = Object.assign({}, meta);
      return this;
    },

    configureReplacePatterns(patterns = REPLACE_PATTERNS_OPTIONS) {
      _options.replace = Object.assign({}, patterns);
      return this;
    },

    configureMarkdown({ macros = {}, customList = [] } = MARKDOWN_OPTIONS) {
      _options.markdown = Object.assign( {}, { macros, customList });
      return this;
    },

    configureBabel(options = BABEL_OPTIONS) {
      _options.babel = Object.assign({}, options);
      return this;
    },

    configureLunr(options = LUNR_OPTIONS) {
      _options.lunr = Object.assign( {}, options);
      return this;
    },

    setSourceFolder(target = SOURCE_FOLDER) {
      _options.folder.source = target;
      return this;
    },

    setBuildFolder(target = BUILD_FOLDER) {
      _options.folder.build = target;
      return this;
    },

    set options(value) {
      _options = value;
    },
    get options() {
      return _options;
    },

    run(source, build) {
      const opt = Object.assign({}, _options);
      opt.folders.source = source ? source : opt.folders.source;
      opt.folders.build = build ? build : opt.folders.build;
      documentor(opt);
    },
  };
}
