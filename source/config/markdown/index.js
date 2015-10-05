import markdown from 'metalsmith-markdownit';
import mdEmoji from 'markdown-it-emoji';
import mdContainer from 'markdown-it-container';
import mdFootnote from 'markdown-it-footnote';
import mdCheckbox from 'markdown-it-checkbox';
import mdMacros from './markdown-it-inline-macros';

import { highlightMarkdown, configurePrism } from './prism';
import customListStyle from './markdown-it-custom-list-style';
import cx from './markdown-it-container-cx';
import spoiler from './markdown-it-container-spoiler';

export default function configureMarkdown({ macros = {}, customList = [], extra = [] } = {}) {
  const md = markdown({
    html: true,
    highlight: highlightMarkdown,
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


  md.parser
  .use( mdEmoji )
  .use( mdFootnote )
  .use( mdContainer, 'cx', cx )
  .use( mdContainer, 'spoiler', spoiler )
  .use( mdCheckbox ) // vedi opzioni per aggiungere custom classes
  .use( mdMacros, macros );

  // customList must be an array of objects
  customList.forEach( style => md.parser.use(customListStyle, style) );

  // extra must be an array of array
  extra.forEach( plugin => md.parser.use(...plugin) );

  configurePrism(md.parser);

  return md;
}
