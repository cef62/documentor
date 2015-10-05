---
title: <Grid />
lunr: true
template: page.html
nav_sort: 200
nav_groups:
  - primary
---

# `<Grid>`

Completely build in FlexBox, this Grid allows to horizontally and vertically align its items (`<Cell>`)

![](../assets/images/dl-components/ui/grid/grid.jpg)



#### Basic Usage

The concept is very simple: use the`<Grid>` component and wrap its children as `<Cell>` component

```html
<Grid>
  <Cell>...</Cell>
  <Cell>...</Cell>
  <Cell>...</Cell>
</Grid>
```

# `<Cell>`: alignment

You can **horizontally** and **vertically** align children:

![](../assets/images/dl-components/ui/grid/grid_simple_cell_align.jpg)



```html
<Grid>
  <Cell valign="flex-start">...</Cell>
  <Cell valign="flex-start" halign="center">...</Cell>
  <Cell valign="center">...</Cell>
  <Cell valign="flex-end">...</Cell>
</Grid>
```

> `flex-start` and `flex-end` are commonly used terms to define CSS FlexBox alignments. More info: https://css-tricks.com/snippets/css/a-guide-to-flexbox/


# `<Cell>`: padding, background and styling

Grid and cell have no padding or background by default. So how can you obtain the result of the previous screenshots?
Just use inline styling:


```html
const stylesCell = {
  backgroundColor: 'white',
  padding: 10,
  margin: 10,
};
...
<Grid className={css.box_grey}>
  <Cell style={stylesCell}>Cell</Cell>
  <Cell style={stylesCell}>Cell</Cell>
  <Cell style={stylesCell}>Cell</Cell>
</Grid>
```


# Responsive Grid

It means that when the viewport size is < of a specific value the layout mutates from a "row" distribution:

![](../assets/images/dl-components/ui/grid/grid_responsive_inline.jpg)

to a "column" distribution:

![](../assets/images/dl-components/ui/grid/grid_responsive_column.jpg)

You can define when the media query is invoked just setting the `size` property:
```html
<Grid size="md">
...
</Grid>
```

|size|Show as column when viewport size is:|
|---|---|
|sm|< 768px|
|md|< 1024px|
|lg|< 1280px|


---  

# Fixed Cell width

Should one cell always have the same width?
In the followint example the yellow box never changes its width even if you resize the browser.

![](../assets/images/dl-components/ui/grid/fixedcell.jpg)


1) First create the custom styles for the fixed cell and the other cells:

```javascript
const stylesCell = {
  backgroundColor: 'white',
  padding: 10,
  margin: 10,
};
// Style for the fixed cell
const stylesFixedCell = Object.assign({}, stylesCell, {minWidth: 200, backgroundColor: 'orange'});
```

2) Set the cell inline style and use the `fixed` attribute as following:

```html
<Grid>
  <Cell style={stylesFixedCell} fixed={true}>Fixed Cell</Cell>
  <Cell style={stylesCell}><LoremText/></Cell>
  <Cell style={stylesCell}><LoremText/></Cell>
</Grid>
```



---  

# Nested Grids

![](../assets/images/dl-components/ui/grid/nested_grid.jpg)

```html
<Grid size="md">
  <Cell style={stylesCell}>1</Cell>
  <Cell style={stylesCell}>2</Cell>
  <Cell style={stylesCell}>
    <Grid size="md">
      <Cell style={stylesCell}><div style={{backgroundColor: 'red'}}>A</div></Cell>
      <Cell style={stylesCell}><div style={{backgroundColor: 'orange'}}>B</div></Cell>
      <Cell style={stylesCell}><div style={{backgroundColor: 'yellow'}}>C</div></Cell>
    </Grid>
  </Cell>
</Grid>
```

---  

## Dependencies

```javascript
import {Grid} from 'dl-components' ;
import {Cell} from 'dl-components' ;
```
