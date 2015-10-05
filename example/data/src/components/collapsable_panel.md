---
title: <CollapsablePane..
lunr: true
template: page.html
nav_sort: 5
nav_groups:
  - primary
---

# `<CollapsablePanel>`
![](../assets/images/dl-components/ui/panels/collapsablepanel.gif)



#### Usage
```html
<CollapsablePanel title="MY COLLAPSABLE PANEL" titleType="primary">
  <LoremText />
</CollapsablePanel>
```

---


### Transparent and custom icon

![](../assets/images/dl-components/ui/panels/collapsablepanel_transparent.gif)

```html
<CollapsablePanel title="MY CUSTOM ICON"
                  titleType="transparent"
                  bodyType="transparent"
                  iconOpen="fa fa-arrow-circle-down"
                  iconClose="fa fa-arrow-circle-right">
  <LoremText />
  <LoremText />
</CollapsablePanel>
```

### Type (color)
![](../assets/images/dl-components/ui/panels/collapsablepanel_customized.jpg)


```html
<CollapsablePanel title="MY COLLAPSABLE PANEL"
                  titleType="success"
                  bodyType="warning">
  <LoremText />
</CollapsablePanel>
```


---

### With scrollable content
![](../assets/images/dl-components/ui/panels/collapsablepanel_with_scrollable_panel_key_value.gif)

```html
<CollapsablePanel title="SCROLLABLE"
                  titleType="success"
                  bodyType="default">
  <PerfectScrollbar height={60} >
    <PanelKeyValue data={ this.datalist } />
  </PerfectScrollbar>
</CollapsablePanel>
```

> This example uses another two components of the dl-components: `PerfectScrollbar` (to enable an internal scroller) and `PanelKeyValue` to create a panel that automatically display data from an array



|Property|Values|Description|
|---|---|---|
|title|string|the header text|
|children|any|the body (string or jsx)|
|titleType|'transparent', 'default', 'primary', 'success', 'warning', 'danger', 'info'|color presets for title|
|bodyType|'transparent', 'default', 'primary', 'success', 'warning', 'danger', 'info'|color presets for body|
|iconOpen|string|icon class|
|iconClose|string|icon class|



---  
## Dependencies

```javascript
import {CollapsablePanel} from 'dl-components
```

Other dependencies in the previous examples:

```javascript
import {PanelKeyValue} from 'dl-components';
import {PerfectScrollbar} from 'dl-components';
import {LoremText} from 'dl-components';
```
