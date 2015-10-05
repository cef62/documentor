import path from 'path';
import slash from 'slash';

export const SOURCE_FOLDER = slash(path.join(process.cwd(), 'data'));

export const BUILD_FOLDER = slash(path.join(process.cwd(), 'build'));

export const BABEL_OPTIONS = { stage: 0, sourceMaps: true };

export const MARKDOWN_OPTIONS = { macros: {}, customList: [], extra: [] };

export const META_OPTIONS = {
  title: 'Docs',
  description: 'Project\'s Documentation',
  partials: {
    breadcrumbs: '_breadcrumbs',
    nav_global: '_nav_global',
    nav_mobile: '_nav_mobile',
    nav_relative: '_nav_relative',
    nav_footer: '_nav_footer',
    nav__children: '_nav__children',
  },
};

export const REPLACE_PATTERNS_OPTIONS = {};

export const NAVIGATION_OPTIONS = {
  config: {
    primary: {
      sortBy: 'nav_sort',
      filterProperty: 'nav_groups',
    },
    footer: {
      sortBy: 'nav_sort',
      filterProperty: 'nav_groups',
    },
  },
  options: {
    navListProperty: 'navs',
  },
};

export const LUNR_OPTIONS = {
  fields: {
    enable: 'lunr',
    id: null, // null to use file path
    metadata: {
      title: 'title',
      search_url: 'url',
    },
  },
};

export const getDefaultOptions = () => {
  return {
    folders: {
      source: SOURCE_FOLDER,
      build: BUILD_FOLDER,
    },
    assets: [],
    navigation: NAVIGATION_OPTIONS,
    meta: META_OPTIONS,
    replace: REPLACE_PATTERNS_OPTIONS,
    markdown: MARKDOWN_OPTIONS,
    babel: BABEL_OPTIONS,
    lunr: LUNR_OPTIONS,
  };
};
