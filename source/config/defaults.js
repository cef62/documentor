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

export const REPLACE_PATTERNS_OPTIONS = {
  '**/**': [
    { find: /\[\/wave]/g, replace: '</ul>' }, // [ul]...[/ul] => <ul class='collection'>.. </li>
    { find: /\[ul]/g, replace: '<ul class="collection">' },
    { find: /\[\/ul]/g, replace: '</ul>' },
    { find: /\[li]/g, replace: '<li class="collection-item">' }, // [li]miao[/li] => <li class='collection-item'>miao </li>
    { find: /\[\/li]/g, replace: '</li>' },

    { find: /\[collapsible]/g, replace: '<ul class="collapsible" data-collapsible="accordion">' }, // collapsible
    { find: /\[\/collapsible]/g, replace: '</ul>' },
    { find: /\[collapsible-header]/g, replace: '<li><div class="collapsible-header">' }, // collapsible - header
    { find: /\[\/collapsible-header]/g, replace: '</div>' },
    { find: /\[collapsible-body]/g, replace: '<div class="collapsible-body"><p>' }, // collapsible - body
    { find: /\[\/collapsible-body]/g, replace: '</p></div></li>' },
  ],
};

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
