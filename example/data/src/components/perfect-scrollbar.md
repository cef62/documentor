---
title: <PerfectScrollbar/>
lunr: true
template: page.html
nav_sort: 5
nav_groups:
  - primary
---


# `<PerfectScrollbar>`

```html
<PerfectScrollbar height={100} >
  <LoremText words="300" />
</PerfectScrollbar>
```

#### Custom styles

```html
<PerfectScrollbar style={{height: 300, width: 300, backgroundColor: 'white',padding: 10}}>
  <LoremText words={this.state.words} />
</PerfectScrollbar>
```

![](../assets/images/dl-components/ui/perfect-scrollbar/perfect-scrollbar.jpg)






#### Use anywhere (i.e. a custom modal)

![](../assets/images/dl-components/ui/perfect-scrollbar/perfect-scrollbar_modal.jpg)




#### `scrollToTopAfterUpdate`

Automatically scroll to top after every content update

```html

<PerfectScrollbar ref="scroller1" scrollToTopAfterUpdate="true">
  ...
</PerfectScrollbar>
```



#### `scrollTop()` method

Programmatically scrollToTop()

```javascript
this.refs.scroller1.scrollTop();
```

```html
<PerfectScrollbar ref="scroller1">
  ...
</PerfectScrollbar>
```




|Property|Values|Description|
|---|---|---|
|children|any|the content of the panel|
|height|string, number|the height of the content|
|scrollToTopAfterUpdate|boolean|scroll to top when content is updated|
|style|object|override inline style|
|className|object|override css class|



---  
## Dependencies

```javascript
import {PerfectScrollbar} from 'dl-components
```
