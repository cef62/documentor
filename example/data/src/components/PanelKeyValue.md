---
title: <PanelKeyValue />
lunr: true
template: page.html
nav_sort: 5
nav_groups:
  - primary
---

# `<PanelKeyValue>`

Create a table of element getting data from an object of key/value elements:

```javascript
this.datalist = {
  TEMPERATURE: '38°',
  SENSOR: '123Khz',
  HUMIDITY: '45',
  CO2: '18.23857923750327',
};
```

#### Simple usage
```html
<PanelKeyValue data={ this.datalist }/>
```

#### Output

![](../assets/images/dl-components/ui/panels/panel_keyvalue_basic.jpg)

---

### Set Decimal

You can also set the number of decimals in order to truncate numbers

```html
<PanelKeyValue data={ this.datalist }
               decimal={2}/>
```

> `decimal` is only applied to numbers

---

# Use cases

### Use into `<CollapsablePanel />`

![](../assets/images/dl-components/ui/panels/panel_keyvalue_in_collapsable.jpeg)

```html
<CollapsablePanel title="COLLAPSABLE"
                  titleType="primary" bodyType="default">
  <PanelKeyValue data={ this.datalist } />
</CollapsablePanel>
```

---

### Use into `<CollapsablePanel /> with `<PerfectScrollbar />`

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

---

## Attributes

|Property|Values|Description|
|---|---|---|
|data|object|an object with key/values properties|
|decimal|integer|# of decimals of numbers|



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
