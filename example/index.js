import path from 'path';
import slash from 'slash';
import markdownInlineMacros from './inline-macros';

const compose = (...steps) => slash(path.join(__dirname, ...steps));

const markdown = {
  macros: markdownInlineMacros,
  customList: [{
    classes: {
      ul: ['parent-list', 'pippo'],
      li: ['child-item'],
    },
    styles: {
      ul: {
        ['font-size']: '30px',
      },
      li: {
        color: 'red',
        ['text-decoration']: 'underline',
      },
    },
    type: '+',
  }],
  extra: [],
};

const folders = {
  source: compose( 'data'),
  build: compose( 'build'),
};

const assets = [{
  source: './assets',
  destination: './assets',
}];

const navigation = {
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

const meta = {
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

const replace = {
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

const babel = {
  stage: 0,
  sourceMaps: true,
};

const lunr = {
  fields: {
    enable: 'lunr',
    id: null, // null to use file path
    metadata: {
      title: 'title',
      search_url: 'url',
    },
  },
};

const options = {
  folders, assets, navigation,
  meta, replace, markdown,
  babel, lunr,
};

export default options;
