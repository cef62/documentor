import navigation from 'metalsmith-navigation';

const config = {
  primary: {
    sortBy: 'nav_sort',
    filterProperty: 'nav_groups',
  },
  footer: {
    sortBy: 'nav_sort',
    filterProperty: 'nav_groups',
  },
};

const options = {
  navListProperty: 'navs',
};

const configureNavigation = (c = config, o = options) => navigation(c, o);
export default configureNavigation;
