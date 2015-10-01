import path from 'path';
import Handlebars from 'handlebars';
import templates from 'metalsmith-templates';

// ************************************************************
// HANDLEBARS Assets Path normalization
// ************************************************************

const relativePathHelper = (current, target) => {
  // normalize and remove starting slash from path
  if (!current || !target) {
    return '';
  }
  let currentNormalized = path.normalize(current).slice(0);
  const targetNormalized = path.normalize(target).slice(0);
  currentNormalized = path.dirname(currentNormalized);
  return path.relative(currentNormalized, targetNormalized);
};

Handlebars.registerHelper('relative_path', relativePathHelper);

// ************************************************************

const templatesTask = templates({
  engine: 'handlebars',
});

export default () => templatesTask;

