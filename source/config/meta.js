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

export default function composeMeta(extra = {}) {
  return Object.assign({}, meta, extra);
}
