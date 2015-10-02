import path from 'path';

import metalsmith from 'metalsmith';
import assets from 'metalsmith-assets';
import draft from 'metalsmith-drafts';
import babel from 'metalsmith-babel';

import replace from './config/text-replace';

import templates from './config/templates';
import navigation from './config/navigation';

import markdown from './config/markdown';
import markdownInlineMacros from './config/markdown/inline-macros';

import composeMeta from './config/meta';
import configureLunr from './config/lunr';
import lunrMetadataStore from './config/metalsmith-lunr-metadata-store';

// ************************************************************
// Configure Navigation
// ************************************************************

// TODO: pass values from outside, if any
const navTask = navigation();

// ************************************************************
// Configure assets path mapping
// ************************************************************

// TODO: configure from outside, if required
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

// TODO: pass values from outside, if any
const meta = composeMeta();

// ************************************************************
// manual patterns substitution
// ************************************************************

// TODO: pass values from outside, if any
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
};

// TODO: pass values from outside, if any
// TODO: remove test style
const md = markdown(markdownInlineMacros, [ customListStyle ]);


// ************************************************************
// Configure Lunr
// ************************************************************

const lunr = configureLunr();
const lunrStore = lunrMetadataStore({
  fields: {
    enable: 'lunr',
    id: null, // null to use file path
    metadata: {
      title: 'title',
      search_url: 'url',
    },
  },
});

// ************************************************************
// Configure babel transpiler
// ************************************************************

const babelTastk = babel({
  sourceMaps: true,
  stage: 0,
});

// ************************************************************
// Configure metalsmith
// ************************************************************

// TODO: pass values from outside, REQUIRED
const sourceFolder = path.join(__dirname, 'data');
const buildFolder = path.join(__dirname, 'build');

metalsmith( sourceFolder )
.destination( buildFolder )
.clean( true )
.metadata( meta )
.use( draft() )
.use( replaceTask )
.use( md )
.use( navTask )
.use( templatesTask )
.use( assetsTask )
.use( lunr )
.use( lunrStore )
.use( babelTastk )
.build((err) => {
  if (err) {
    throw err;
  }
});

