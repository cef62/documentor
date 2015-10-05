---
title: cssLayoutSpaces
lunr: true
template: page.html
nav_sort: 1000
nav_groups:
  - primary
---


# `css.cssLayoutSpaces`

#### Usage:

```javascript
import css from 'dl-components/style-utils' ;
```

```html
<div className={css.cssLayoutSpaces.[CLASS-NAME]}>myBox</div>
```


---
## `paddingNx`
```html
<div className={css.cssLayoutUtils.padding1x}> Box </div>
```

> Available classes: padding1x, padding2x, padding3x, padding4, where 1x = 10px, 2x = 20px ...


#### Behind the scenes:

```less
.padding1x  {
  padding: @padding1x; // 10 px (defined in variables.less )
}
```




--
## `marginNx`
```html
<div className={css.cssLayoutUtils.margin1x}> Box </div>
```

> Available classes: margin1x, margin2x, margin3x, margin4, where 1x = 10px, 2x = 20px ...


#### Behind the scenes:

```less
.margin1x {
  margin: @margin1x;
}
```


---  
## Dependencies

```javascript
import css from 'dl-components/style-utils' ;
```
