import replace from 'metalsmith-text-replace';

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
const defaultPatterns = { '**/**': replacePatterns };

const configureReplace = (patterns) => replace( Object.assign(defaultPatterns, patterns) );

export default configureReplace;
