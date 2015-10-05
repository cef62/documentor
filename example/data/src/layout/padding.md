---
title: <Padding />
lunr: true
template: page.html
nav_sort: 300
nav_groups:
  - primary
---

# `<Padding>`
![](../assets/images/dl-components/ui/utils/padding.jpg)

#### Simple usage
```html
<Padding value={10}>
  Box with 10 pixel internal padding
</Padding>
```

---


#### Support custom styles

```html
<Padding value={2} style={myStyle}>
  ...
</Padding>
```

```javascript
const myStyle = {
  color: 'white',
  backgroundColor: 'green',
};

```

---

#### Support for custom padding direction

```html
<Padding hl={20} hr={100} vt={10} vb={20} style={myStyle}>
  Box
</Padding>
```

> LEGENDA: h: horizontal, v: vertical, r: right, l: left


### Attributes

|Property|Values|Description|
|---|---|---|
|children|any|JSX content|
|value|number, string|total padding (in pixel)|
|hl|number|horizontal-left padding|
|hr|number|horizontal-right padding|
|vb|number|vertical-bottom padding|
|vt|number|vertical-top padding|
|style|object|custom style|


### Dependencies

```javascript
import {Padding} from 'dl-components' ;
```
