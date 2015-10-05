import metalsmith from 'metalsmith';
import metalAssets from 'metalsmith-assets';
import draft from 'metalsmith-drafts';
import metalBabel from 'metalsmith-babel';
import metalNavigation from 'metalsmith-navigation';
import metalReplace from 'metalsmith-text-replace';

import templates from './config/templates';
import metalMarkdown from './config/markdown';
import configureLunr from './config/lunr';
import lunrMetadataStore from './config/metalsmith-lunr-metadata-store';


export default function documentor(opt) {
  const {
    meta, babel, replace, markdown, lunr,
    folders: { source, build },
    assets = [],
    navigation: { config, options } = {},
  } = opt;
  const metal = metalsmith( source )
  .destination( build )
  .clean( true )
  .metadata( meta )
  .use( draft() )
  .use( metalMarkdown(markdown) )
  .use( metalReplace(replace) )
  .use( metalNavigation(config, options) )
  .use( templates() );

  assets.forEach( asset => metal.use( metalAssets(asset) ) );

  metal
  .use( metalBabel(babel) )
  .use( configureLunr(lunr) )
  .use( lunrMetadataStore(lunr) );

  metal.build((err) => {
    if (err) {
      throw err;
    }
  });
}

