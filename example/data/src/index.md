---
lunr: true
title: Doc Plugins
template: page.html
nav_sort: 10000
nav_groups:
  - primary
  - footer
---

# Available syntax, styles and components for this Documentation
#####  <i class="material-icons">live_help</i> This is a guide!

This repo contains demo code from a presentation I gave on Metalsmith. It demonstrates from start to finish how to build a full featured blog site from scratch using Metalsmith.

## BlockQuote


> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

```
> my text
```

## Accordion

[collapsible]
  [collapsible-header]Accordion Group 1[/collapsible-header]
  [collapsible-body]
  Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.
  [/collapsible-body]

  [collapsible-header]Accordion Group 2[/collapsible-header]
  [collapsible-body]
  Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.
  Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.
  Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.
  [/collapsible-body]
[/collapsible]

```
[ collapsible]
  [ collapsible-header ] ...[ /collapsible-header ]
  [ collapsible-body ] ... [ /collapsible-body ]
[ /collapsible ]
```


## Collection

[ul]
[li]miao[/li]
[li]bao[/li]
[/ul]

[ul]
[li]miao[/li]
[li]bao[/li]
[/ul]

## Tabs

<div class="row">
   <div class="col s12">
     <ul class="tabs">
       <li class="tab col s3"><a href="#test1">Test 1</a></li>
       <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
       <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
       <li class="tab col s3"><a href="#test4">Test 4</a></li>
     </ul>
   </div>
   <div id="test1" class="col s12">
   1) The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible. You can add the class .disabled to make a tab inaccessible.
   </div>

   <div id="test2" class="col s12">
   2) The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible. You can add the class .disabled to make a tab inaccessible.
   </div>
   <div id="test3" class="col s12">
   3) The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible. You can add the class .disabled to make a tab inaccessible.
   </div>
   <div id="test4" class="col s12">
   4) The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible. You can add the class .disabled to make a tab inaccessible.
   </div>
 </div>


## Syntax


```javascript
function pippo() {
  console.log('ciao');
}
```


```javascript
tplCreateSinglePanel(data, title) {
    if (data === null) { return null; }

    const tpl = [];
    if (data) {
      const newPanel = data.map(function mapMe(item) {
        return (
          <CollapsablePanel title={title} titleType="transparent" bodyType="transparent">
            <PanelKeyValue data={ item } decimal={2} />
          </CollapsablePanel>
        );
      });
      tpl.push(newPanel);
    }
    return tpl;
  }

```

Start with branch step1 and move through the numbers to step5 to see the progression of the code.This repo contains demo code from a presentation I gave on Metalsmith. It demonstrates from start to finish how to build a full featured blog site from scratch using Metalsmith.

Start with branch step1 and move through the numbers to step5 to see the progression of the code.This repo contains demo code from a presentation I gave on Metalsmith. It demonstrates from start to finish how to build a full featured blog site from scratch using Metalsmith.

***



<div class="card">
  <div class="card-image">
    <img src="http://materializecss.com/images/sample-1.jpg">
    <span class="card-title">Card Title</span>
  </div>
  <div class="card-content">
    <p>I am a very simple card. I am good at containing small bits of information.
    I am convenient because I require little markup to use effectively.</p>
  </div>
  <div class="card-action">
    <a href="#">This is a link</a>
  </div>
</div>



Start with branch step1 and move through the numbers to step5 to see the progression of the code.This repo contains demo code from a presentation I gave on Metalsmith. It demonstrates from start to finish how to build a full featured blog site from scratch using Metalsmith.

Start with branch step1 and move through the numbers to step5 to see the progression of the code.This repo contains demo code from a presentation I gave on Metalsmith. It demonstrates from start to finish how to build a full featured blog site from scratch using Metalsmith.

Start with branch step1 and move through the numbers to step5 to see the progression of the code.This repo contains demo code from a presentation I gave on Metalsmith. It demonstrates from start to finish how to build a full featured blog site from scratch using Metalsmith.

Start with branch step1 and move through the numbers to step5 to see the progression of the code.
