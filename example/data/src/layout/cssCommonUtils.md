---
title: cssCommonUtils
lunr: true
template: page.html
nav_sort: 1000
nav_groups:
  - primary
---


# `css.cssCommonUtils`

#### Usage:

```javascript
import css from 'dl-components/style-utils' ;
```

```html
<div className={css.cssCommonUtils.[CLASS-NAME]}>myBox</div>
```

---


## `disable_pointer_events`
```html
<div className={css.cssCommonUtils.disable_pointer_events}> box </div>
```

#### Behind the scenes:

```css
.disable_pointer_events {
  pointer-events: none;
}
```


---
## `noselection`
```html
<div className={css.cssCommonUtils.noselection}> box</div>
```

> Available classes: padding1x, padding2x, padding3x, padding4, where 1x = 10px, 2x = 20px ...


#### Behind the scenes:

```css
.noselection {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```




--
## `marginNx`
```html
<div className={css.cssLayoutUtils.margin1x}> opacityOff</div>
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
