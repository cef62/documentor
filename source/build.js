import path from 'path';
import Handlebars from 'handlebars';

import metalsmith from 'metalsmith';
import templates from 'metalsmith-templates';
import assets from 'metalsmith-assets';
import replace from 'metalsmith-text-replace';
import navigation from 'metalsmith-navigation';

import markdown from 'metalsmith-markdownit';
import mdEmoji from 'markdown-it-emoji';
// import mdContainer from 'markdown-it-container';
import mdFootnote from 'markdown-it-footnote';
import mdCheckbox from 'markdown-it-checkbox';
import mdMacros from './macros';
import prism from 'prismjs';


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

const prismExtensions = {
  js: 'javascript',
  scss: 'css',
  sass: 'css',
  html: 'markup',
  svg: 'markup',
  xml: 'markup',
  py: 'python',
  rb: 'ruby',
  ps1: 'powershell',
  psm1: 'powershell'
};

const highlightMarkdown = (code, lang) => {
  if (!prism.languages.hasOwnProperty(lang)) {
    // Default to markup if it's not in our extensions.
    lang = prismExtensions[lang] || 'markup';
  }
  return prism.highlight(code, prism.languages[lang]);
};

const md = markdown({
  html: true,
  highlight: highlightMarkdown,
});
md.parser
.use( mdEmoji )
.use( mdFootnote )
// .use( mdContainer ) // da configurare su necessità reali
.use( mdCheckbox ) // vedi opzioni per aggiungere custom classes
.use( mdMacros, {
  classes: {
    render: renderMacro,
    validate: (name, params, context) => params.length > 2,
  },
  happy: {
    render: happyMacro,
  },
});

// console.log(Object.keys(md.parser.helpers));
// console.log(Object.keys(md.parser.utils));

// console.log(Object.keys(md.parser.renderer.rules));

// console.log(md.parser.renderer.rules.code_block.toString());
// console.log(md.parser.renderer.rules.code_inline.toString());
//  console.log(md.parser.renderer.rules.list.toString());

// console.log(md.parser.block.ruler.__rules__.map( ({ name }) => name ));
// console.log( md.parser.block.ruler.__rules__.forEach( ({ name, fn }) => {
//   if (name === 'list') {
//     console.log(fn.toString());
//   }
// }));

function happyMacro(tokens, idx, _options, env, self) {

  const { context } = tokens[idx].meta;

  if (tokens[idx].nesting === 1) {
    // set main node content
    tokens[idx + 1].content = context;
    return `<div style="display: inline-block;" class="green">`;
  } else {
    // closing tag
    return `</div>\n`;
  }
  //   tokens[idx].attrPush([ 'class', 'stikazzi' ]);
  // return self.renderToken(tokens, idx, _options, env, self);
}

function renderMacro(tokens, idx, _options, env, self) {

  const { name, params = [], context } = tokens[idx].meta;

  if (tokens[idx].nesting === 1) {
    // set main node content
    tokens[idx + 1].content = context;
    // opening tag
    const classes = params.join(' ');
    return `<div style="display: inline-block;" class="${classes}">`;
  } else {
    // closing tag
    return `</div>\n`;
  }
  //   tokens[idx].attrPush([ 'class', 'stikazzi' ]);
  // return self.renderToken(tokens, idx, _options, env, self);
}

// md.parser.renderer.rules['macrociccio_open'] = renderMacro;
// md.parser.renderer.rules['macrociccio_close'] = renderMacro;

// md.parser.inline.ruler.before('link', 'macroz', (state, silent) => {
//   if (state.src.charCodeAt(state.pos) !== 0x21 #<{(| ! |)}># ) {
//     return false;
//   }
//   if (state.src.charCodeAt(state.pos + 1) !== 0x5B #<{(| [ |)}># ) {
//     return false;
//   }
//   if (state.src.charCodeAt(state.pos + 2) !== 0x3A #<{(| : |)}># ) {
//     return false;
//   }
//
//   const max = state.posMax;
//   const labelStart = state.pos + 2;
//   const labelEnd = md.parser.helpers.parseLinkLabel(state, state.pos + 1, false);
//
//   // parser failed to find ']', so it's not a valid link
//   if (labelEnd < 0) {
//     return false;
//   }
//
//   const rule = /!\[:([^\] ]+)([^\]]*)\](?:\(([^\)]*)\))?/igm;
//   const split = rule.exec(state.src.slice(state.pos));
//   if (!split) {
//     return false;
//   };
//
//
//   const [ matchedString, _name, _params = '', _context ] = split;
//
//   if (!_name || !_name.trim().length) {
//     // FIXME: should throw an error?
//     return false;
//   }
//
//   const nextStepPos = state.pos + matchedString.length;
//
//   const name = _name.trim();
//   const params = _params.split(',').map( (p = '') => p.trim());
//   const context = _context ? _context.trim() : undefined;
//
//   // console.log(`name: ${name}`);
//   // console.log(`params: ${params}`);
//   // console.log(`context: ${context}`);
//
//   if (!silent) {
//     state.pos = labelStart;
//     state.posMax = labelEnd;
//
//     let token = state.push(`${name}_open`, 'div', 1);
//     token.meta = { name, params, context };
//     state.md.inline.tokenize(state);
//
//     token = state.push(`${name}_close`, 'div', -1);
//     token.meta = { name, params, context };
//   }
//
//   state.pos = nextStepPos;
//   state.posMax = max;
//
//   // console.log( `New starting token: ${state.src.slice(nextStepPos)}` );
//   // console.log(state);
//   return true;
// });

const renderCode = (tokens, idx, options, env, self) => {
  var token = tokens[idx],
      info = token.info ? md.parser.utils.unescapeAll(token.info).trim() : '',
      langName = 'markup',
      highlighted;

  if (info) {
    langName = info.split(/\s+/g)[0];
  }
  token.attrPush([ 'class', options.langPrefix + langName ]);

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName) || md.parser.utils.escapeHtml(token.content);
  } else {
    highlighted = md.parser.utils.escapeHtml(token.content);
  }

  return {
    highlighted,
    attrs: self.renderAttrs(token),
  }
};

md.parser.renderer.rules.code_block = (...rest) => {
  const { highlighted, attrs } = renderCode(...rest);
  return `<pre ${attrs}><code ${attrs}>${highlighted}</code></pre>\n`;
};


md.parser.renderer.rules.fence = (...rest) => {
  const { highlighted, attrs } = renderCode(...rest);
  return `<pre ${attrs}><code ${attrs}>${highlighted}</code></pre>\n`;
};

md.parser.renderer.rules.code_inline = (...rest) => {
  const { highlighted, attrs } = renderCode(...rest);
  return `<code ${attrs}>${highlighted}</code>`;
  // return `<code ${self.renderAttrs(token)}>${md.parser.utils.escapeHtml(tokens[idx].content)}</code>`;
};

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

