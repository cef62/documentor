import mLunr from 'metalsmith-lunr';
import lunr from 'lunr';
import lunrStemmerSupport from 'lunr-languages/lunr.stemmer.support';
import lunrNo from 'lunr-languages/lunr.it';

lunrStemmerSupport(lunr);
lunrNo(lunr);

export default function configureLunr(options = {}) {
  const { id: ref } = options;
  return mLunr({
    // important: use default (filePath) to match with lunr-metadata-store
    ref,
    indexPath: 'index.json',
    fields: {
      title: 1,
      contents: 2,
      urlPath: 3,
      tags: 10,
    },
    pipelineFunctions: [
      lunr.trimmer,
      // lunr.no.stopWordFilter,
      // lunr.no.stemmer
    ],
    preprocess(content) {
      // if(this.nav_path && this.nav_path.indexOf('flat_progress_bar') > -1) {
      //   console.log(this);
      // }
      // Replace all occurrences of __title__ with the current file's title metadata.
      return content.replace(/__title__/g, this.title);
    },
  });
}
