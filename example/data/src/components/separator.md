---
title: <Separator />
lunr: true
template: page.html
nav_sort: 300
nav_groups:
  - primary
---


# `<Separator>`

![](../assets/images/dl-components/ui/utils/separator.jpg)

#### Simple usage
```html
<Separator color="red" padding="5"/>
```

---


#### Real world example

```html
<LoremText words="15" />
<Separator color="red" padding="5"/>
<LoremText words="15" />
<Separator type="primary" padding="10"/>
<Separator type="success" padding="10"/>
<Separator type="info" padding="10"/>
```


> LEGENDA: h: horizontal, v: vertical, r: right, l: left


### Attributes

|Property|Values|Description|
|---|---|---|
|color|string|hexa color|
|type|'primary', 'success', ...|preset colors|
|padding|number|separator padding|
|className|string, object|custom css class|



---  
### Dependencies

```javascript
import {Separator} from 'dl-components' ;
```
