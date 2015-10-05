# documentor 
[![Travis-CI](https://travis-ci.org/cef62/documentor.svg)](https://travis-ci.org/cef62/documentor)

Documentor is an automated docs builder based on **[metalsmith](www.metalsmith.io)**. 

> The tools is in active development and the current API it's likely to change often. Any feedback is welcome.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Plugins](#plugins)
  - [metalsmith](#metalsmith)
  - [ markdown-it](#markdown-it)
  - [templates](#templates)
- [Getting Started](#getting-started)
  - [CLI invocation](#cli-invocation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Plugins

### metalsmith

**documentor** depends on the following _metalsmith_ plugins:

* metalsmith-assets
* metalsmith-babel
* metalsmith-drafts
* metalsmith-lunr
* metalsmith-markdownit
* metalsmith-navigation
* metalsmith-templates
* metalsmith-text-replace

Internally documentor use more plugins, soon this plugins will be moved on separated repositories.

### markdown-it

**documentor** depends on the following _markdown-it_ plugins:

* markdown-it-checkbox
* markdown-it-container
* markdown-it-emoji
* markdown-it-footnote

Internally documentor use more plugins and custom renderers, soon this plugins will be moved on separated repositories.

### templates

Templates are defined using **handlebars** syntax.

## Getting Started

**documentor** can be used as CLI command or via Javascript.

### CLI invocation

Invoked from CLI **documentor** accept and require a single arguments: `--config`. **config** should be the path to a javascript module exporting a configuration object:

```javascript
// ./docs/index.js
var path = require('path');

// compose full path to sources and build folders
function compose() {
  var params = [].splice.call(arguments,0);
  params.unshift(__dirname);
  return slash(path.join.apply(null, params));
}

modeule.exports = {
	folders: {
  		source: compose('data'),
  		build: compose('build'),
	}
};
```

At least `source` and `destination` folder must be defined.

In you package.json add a script:

```json
"script": {
	"build:doc": "documentor --config ./docs/index.js"
},
```