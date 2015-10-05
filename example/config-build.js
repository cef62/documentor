import path from 'path';
import slash from 'slash';
import markdownInlineMacros from './inline-macros';
import { getDefaultOptions } from '../source/config/defaults';

const compose = (...steps) => slash(path.join(__dirname, ...steps));
const options = getDefaultOptions();

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
    type: 0x2B,
  }],
  extra: [],
};


options.folders = {
  source: compose( 'data'),
  build: compose( 'build'),
};
options.assets.push({
  source: './assets',
  destination: './assets',
});
options.markdown = markdown;

export default options;
