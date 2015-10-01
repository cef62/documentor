import path from 'path';

import metalsmith from 'metalsmith';
import assets from 'metalsmith-assets';
import replace from './config/text-replace';

import templates from './config/templates';
import navigation from './config/navigation';

import markdown from './config/markdown';
import markdownInlineMacros from './config/markdown/inline-macros';


// ************************************************************
// Configure Navigation
// ************************************************************

// TODO: pass values from outside, if any
const navTask = navigation();

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

const templatesTask = templates();

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
// manual patterns substitution
// ************************************************************

const replaceTask = replace();

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
.use( replaceTask )
.use( md )
.use( navTask )
.use( templatesTask )
.use( assetsTask )
.build((err) => {
  if (err) {
    throw err;
  }
});

