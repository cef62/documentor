import prism from 'prismjs';

const prismExtensions = {
  js: 'javascript',
  scss: 'css',
  sass: 'css',
  html: 'markup',
  svg: 'markup',
  xml: 'markup',
  py: 'python',
  rb: 'ruby',
  ps1: 'powershell',
  psm1: 'powershell'
};

const renderCode = (utils) => (tokens, idx, options, env, self) => {
  const { unescapeAll, escapeHtml } = utils;
  let token = tokens[idx];
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
  }
};

export function highlightMarkdown(code, lang) {
  if (!prism.languages.hasOwnProperty(lang)) {
    // Default to markup if it's not in our extensions.
    lang = prismExtensions[lang] || 'markup';
  }
  return prism.highlight(code, prism.languages[lang]);
};

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
