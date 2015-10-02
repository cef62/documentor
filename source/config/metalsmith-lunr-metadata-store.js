import minimatch from 'minimatch';

export const defaultOutput = 'lunr-metadata-store.json';
export const defaultFields = {
  enable: 'lunr',
  ref: null,
  metadata: {
    title: 'title',
  },
};

export default function lunrMetadataStore({
  output = defaultOutput,
  fields = defaultFields,
} = {}) {
  const { enable = true, ref, metadata = {} } = fields;
  const metadataKeys = Object.keys(metadata);

  if (!metadataKeys.length) {
    console.error(`metalsmith-lunr-metadata.store expected a valid 'metadata' option.`);
    return false;
  }

  return (files/* , metalsmith*/) => {
    const store = Object.keys(files).reduce( (acc, filepath) => {
      if (minimatch(filepath, '**/*.html')) {
        const file = files[filepath];
        if (enable === true || file[enable]) {
          const uid = ref ? file[ref] : filepath;
          acc[uid] = metadataKeys.reduce( (map, k) => {
            map[metadata[k]] = file[k];
            return map;
          }, {});
          acc[uid].filepath = filepath;
          acc[uid].ref = uid;
        }
      }
      return acc;
    }, {});

    const contents = new Buffer(JSON.stringify(store));
    files[output] = {contents: contents};
  };
}
