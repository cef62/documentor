---
title: cssLayoutUtils
lunr: true
template: page.html
nav_sort: 1000
nav_groups:
  - primary
---


# `css.cssLayoutUtils`

#### Usage:

```javascript
import css from 'dl-components/style-utils' ;
```

```html
<div className={css.cssLayoutUtils.[CLASS-NAME]}>myBox</div>
```

---

## disableElements
```html
<div className={css.cssLayoutUtils.disableElements}>myBox</div>
```

#### Behind the scenes:

```css
.disableElements {
  opacity: 0.6;
  pointer-events: none;
}
```

---

## `opacity50`

```html
<div className={css.cssLayoutUtils.opacity50}> myBox</div>
```

#### Behind the scenes:

```css
.opacity50 {
  opacity: 0.5 !important;
}
```


---

## `displayNone`

```html
<div className={css.cssLayoutUtils.displayNone}> myBox</div>
```

#### Behind the scenes:

```css
.displayNone {
  display: none !important;
}
```



## `visibilityHidden`
```html
<div className={css.cssLayoutUtils.displayNone}> myBox</div>
```


#### Behind the scenes:

```css
.visibilityHidden {
  visibility: hidden !important;
}
```



## `no_user_select`
```html
<div className={css.cssLayoutUtils.no_user_select}> myBox</div>

```

#### Behind the scenes:

```css
.no_user_select {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
}
```




## `opacityOff`
```html
<div className={css.cssLayoutUtils.opacityOff}> opacityOff</div>
```


#### Behind the scenes:

```css
.visibilityHidden {
  visibility: hidden !important;
}
```

---  
## Dependencies

```javascript
import css from 'dl-components/style-utils' ;
```
