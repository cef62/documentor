import mLunr from 'metalsmith-lunr';
import lunr from 'lunr';
import lunrStemmerSupport from 'lunr-languages/lunr.stemmer.support';
import lunrNo from 'lunr-languages/lunr.no';

lunrStemmerSupport(lunr);
lunrNo(lunr);

export default function configureLunr() {
  return mLunr({
    ref: 'title',
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
    preprocess: function(content) {
      // Replace all occurrences of __title__ with the current file's title metadata.
      return content.replace(/__title__/g, this.title);
    }
  });
}
