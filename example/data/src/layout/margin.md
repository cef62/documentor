---
title: <Margin />
lunr: true
template: page.html
nav_sort: 300
nav_groups:
  - primary
---

# `<Margin>`

![](../assets/images/dl-components/ui/utils/margins.jpg)


#### Simple usage
```html
<Margin value={10}>
  Box with 10 pixel external margin
</Padding>
```

---


#### Support custom styles

```html
<Margin value={2} style={myStyle}>
  ...
</Margin>
```

```javascript
const myStyle = {
  color: 'white',
  backgroundColor: 'green',
};

```

---

#### Support for custom margin direction

```html
<Margin hl={20} hr={100} vt={10} vb={20} style={myStyle}>
  Box
</Margin>
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



---  
### Dependencies

```javascript
import {Margin} from 'dl-components' ;
```
