---
title: <Panel />
lunr: true
template: page.html
nav_sort: 5
nav_groups:
  - primary
---


# `<Panel>`
![](../assets/images/dl-components/ui/panels/panel.jpg)



#### Usage
```html
<Panel vMargin="10" hMargin="20" type="primary">Primary Panel</Panel>
<Panel vMargin="10" hMargin="30" type="success">Success panel</Panel>
<Panel vMargin="10" hMargin="40" type="warning">Warning panel</Panel>
<Panel vMargin="10" hMargin="50" type="danger">Danger panel</Panel>

<Panel vMargin="10" hMargin="60" type="info">
  Info Panel <br />
  <LoremText words="50" />
</Panel>

<Panel vMargin="10" hMargin="70" type="transparent">
  I have a transparent background panels and margins
</Panel>

```



|Property|Values|Description|
|---|---|---|
|children|any|the content of the panel|
|type|'transparent', 'default', 'primary', 'success', 'warning', 'danger', 'info'|background preset color|
|hMargin|string, number|horizontal margin|
|vMargin|string, number|vertical margin|
|style|object|override inline style|
|className|object|override css class|



---  
## Dependencies

```javascript
import {Panel} from 'dl-components
```
