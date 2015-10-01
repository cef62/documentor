import path from 'path';
import Handlebars from 'handlebars';

import metalsmith from 'metalsmith';
import templates from 'metalsmith-templates';
import assets from 'metalsmith-assets';
import replace from 'metalsmith-text-replace';
import navigation from 'metalsmith-navigation';

import markdown from './config/markdown';
import markdownInlineMacros from './config/markdown/inline-macros';


// ************************************************************
// Configure Navigation
// ************************************************************

const navConfigs = {
  primary: {
    sortBy: 'nav_sort',
    filterProperty: 'nav_groups',
  },
  footer: {
    sortBy: 'nav_sort',
    filterProperty: 'nav_groups',
  },
};

const navSettings = {
  navListProperty: 'navs',
};

const navTask = navigation(navConfigs, navSettings);

// ************************************************************
// Configure assets path mapping
// ************************************************************

const assetsTask = assets({
  source: './assets',
  destination: './assets',
});


// ************************************************************
// Set handlebar as template engine
// ************************************************************

const templatesTask = templates({
  engine: 'handlebars',
});

// ************************************************************
// Configure metadata
// ************************************************************

const meta = {
  title: 'Digital Lighting Docs',
  description: 'Documentation for Digital Lighting projects',
  // used by metalsmith-templates
  partials: {
    breadcrumbs: '_breadcrumbs',
    nav_global: '_nav_global',
    nav_mobile: '_nav_mobile',
    nav_relative: '_nav_relative',
    nav_footer: '_nav_footer',
    nav__children: '_nav__children',
  },
};

// ************************************************************
// HANDLEBARS Assets Path normalization
// ************************************************************

const relativePathHelper = (current, target) => {
  // normalize and remove starting slash from path
  if (!current || !target) {
    return '';
  }
  let currentNormalized = path.normalize(current).slice(0);
  const targetNormalized = path.normalize(target).slice(0);
  currentNormalized = path.dirname(currentNormalized);
  return path.relative(currentNormalized, targetNormalized);
};

Handlebars.registerHelper('relative_path', relativePathHelper);

// ************************************************************
// manual patterns substitution
// ************************************************************

const replacePatterns = [
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
];


// ************************************************************
// Configure Markdow parser
// ************************************************************

const customListStyle = {
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
  type: 0x2B,
}

const md = markdown(markdownInlineMacros, [ customListStyle ]);

// ************************************************************
// Configure metalsmith
// ************************************************************

const sourceFolder = path.join(__dirname, 'data');
const buildFolder = path.join(__dirname, 'build');

metalsmith( sourceFolder )
.destination( buildFolder )
.clean( true )
.metadata( meta )
.use( replace({ '**/**': replacePatterns } ) )
.use( md )
.use( navTask )
.use( templatesTask )
.use( assetsTask )
.build((err) => {
  if (err) {
    throw err;
  }
});

