import prism from 'prismjs';

const prismExtensions = {
  js: 'javascript',
  scss: 'css',
  less: 'css',
  sass: 'css',
  html: 'markup',
  svg: 'markup',
  xml: 'markup',
  py: 'python',
  rb: 'ruby',
  ps1: 'powershell',
  psm1: 'powershell',
};

const renderCode = (utils) => (tokens, idx, options, env, self) => {
  const { unescapeAll, escapeHtml } = utils;
  const token = tokens[idx];
  const info = token.info ? unescapeAll(token.info).trim() : '';
  let langName = 'markup';
  let highlighted;

  if (info) {
    langName = info.split(/\s+/g)[0];
  }
  token.attrPush([ 'class', options.langPrefix + langName ]);

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  return {
    highlighted,
    attrs: self.renderAttrs(token),
  };
};

export function highlightMarkdown(code, lang) {
  let usedLang = 'markup';
  if (!prism.languages.hasOwnProperty(lang)) {
    usedLang = prismExtensions[lang];
  }
  if (!usedLang) {
    usedLang = 'markup';
  }
  return prism.highlight(code, prism.languages[usedLang]);
}

export function configurePrism(markdownIt) {
  const { utils } = markdownIt;

  markdownIt.renderer.rules.code_block = (...rest) => {
    const { highlighted, attrs } = renderCode(utils)(...rest);
    return `<pre ${attrs}><code ${attrs}>${highlighted}</code></pre>\n`;
  };


  markdownIt.renderer.rules.fence = (...rest) => {
    const { highlighted, attrs } = renderCode(utils)(...rest);
    return `<pre ${attrs}><code ${attrs}>${highlighted}</code></pre>\n`;
  };

  markdownIt.renderer.rules.code_inline = (...rest) => {
    const { highlighted, attrs } = renderCode(utils)(...rest);
    return `<code ${attrs}>${highlighted}</code>`;
  };
}
