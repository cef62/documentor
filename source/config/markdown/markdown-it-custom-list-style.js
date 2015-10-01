export const PLUS_BULLET = 0x2B;
export const STAR_BULLET = 0x2A;
export const MINUS_BULLET = 0x2D;

const isValidType = (type) => type === PLUS_BULLET || type === STAR_BULLET || type === MINUS_BULLET;


const defaultRender = (...rest) => rest[rest.length-1].renderToken(...rest);

const applyCustomClasses = (token, classes = []) => {
  if (classes.length) {
    const aIndex = token.attrIndex('class');
    if (aIndex < 0) {
      token.attrPush(['class', classes.join(' ')]);
    } else {
      let updatedClasses = uniq(token.attrs[aIndex][1].split(' ').concat(classes));
      token.attrs[aIndex][1] = updatedClasses;
    }
  }
  return token;
};

const styleMapToString = (styles) => Object.keys(styles).map( (key) => `${key}:${styles[key]};`).join('');

const applyCustomStyles = (token, styles = {}) => {
  let stylesStr;
  const keys = Object.keys(styles);

  if (keys.length) {
    const aIndex = token.attrIndex('style');
    if (aIndex < 0) {
      stylesStr = styleMapToString(styles);
      token.attrPush(['style', stylesStr]);
    } else {
      const currStyles = token.attrs[aIndex][1].split(';')
      .map( (rule) => {
        const [ key, value ] = rule.trim().split(':').map( s => s.trim() );
        return { [key]: value };
      });
      const mergedStyles = Object.assign(currStyles, styles);
      styleStr = styleMapToString(mergedStyles);
      token.attrs[aIndex][1] = styleStr;
    }
  }
  return token;
};

export default function customListStyle(md, rules = {}) {
  const {
    classes: {
      ul: listClasses = [],
      li: itemClasses = [],
    } = {},
    styles: {
      ul: listStyles = {},
      li: itemStyles = {},
    } = {},
    type,
  } = rules;

  if (!isValidType(type)) {
    console.error(`markdown-it-custom-list-style received an invalid 'type': ${type}`);
    return;
  }

  const defaultBulletListOpenRender = md.renderer.rules.bullet_list_open || defaultRender;
  const defaultListItemOpenRender = md.renderer.rules.list_item_open || defaultRender;

  // tokens, idx, options, env, self
  md.renderer.rules.bullet_list_open = (tokens, idx, ...rest) => {
    if (tokens[idx].markup.charCodeAt(0) === type) {
      tokens[idx] = applyCustomClasses(tokens[idx], listClasses);
      tokens[idx] = applyCustomStyles(tokens[idx], listStyles);
    }
    return defaultBulletListOpenRender(tokens, idx, ...rest);
  };

  md.renderer.rules.list_item_open = (tokens, idx, ...rest) => {
    if (tokens[idx].markup.charCodeAt(0) === type) {
      tokens[idx] = applyCustomClasses(tokens[idx], itemClasses);
      tokens[idx] = applyCustomStyles(tokens[idx],itemStyles);
    }
    return defaultListItemOpenRender(tokens, idx, ...rest);
  };

}
