---
title: <FlatLabeledBut..
lunr: true
template: page.html
nav_sort: 10
nav_groups:
  - primary
---


# `<FlatLabeledButton>`

Completely build in FlexBox, this Grid allows to horizontally and vertically align its items (`<Cell>`)


#### Usage

```html
<FlatLabeledButton>Label</FlatLabeledButton>
```


### Button Group

![](../assets/images/dl-components/ui/flat-labeled-button/button_group.jpg)


The concept is very simple: use the`<Grid>` component and wrap its children as `<Cell>` component

```html
<ButtonGroup margin="5">
  <FlatLabeledButton>label also long</FlatLabeledButton>
  <FlatLabeledButton disabled={true}>Disabled</FlatLabeledButton>

  <FlatLabeledButton type="success">Success</FlatLabeledButton>
  <FlatLabeledButton type="warning">warning</FlatLabeledButton>
</ButtonGroup>
```

---

###  Custom Group Margin

```html

<ButtonGroup margin="5">
  ...
</ButtonGroup>
```


---

### Custom Button Margins (Horizontally e Vertically)

![](../assets/images/dl-components/ui/flat-labeled-button/button_margin.jpg)


```html

<ButtonGroup>
  <FlatLabeledButton hr={10}>label also long</FlatLabeledButton>
  <FlatLabeledButton hr={20} disabled={true}>Disabled</FlatLabeledButton>

  <FlatLabeledButton hr={30} type="success">Success</FlatLabeledButton>
  <FlatLabeledButton type="warning">warning</FlatLabeledButton>
</ButtonGroup>
```

> LEGENDA: h: horizontal, v: vertical, r: right, l: left






###  Custom styles

![](../assets/images/dl-components/ui/flat-labeled-button/button_custom_style.jpg)


```html

<ButtonGroup margin="5">
  <FlatLabeledButton style={{marginRight: 40}} >custom right margin</FlatLabeledButton>
  <FlatLabeledButton style={{background: 'purple', color: 'white'}}>Custom color</FlatLabeledButton>

  <FlatLabeledButton style={{border: '4px solid red', color: 'black'}}>Success</FlatLabeledButton>
  <FlatLabeledButton type="success">CUSTOM </FlatLabeledButton>
</ButtonGroup>
```




###  Button Types

![](../assets/images/dl-components/ui/flat-labeled-button/button_type.jpg)


```html
<ButtonGroup margin="5">
  <FlatLabeledButton type="danger">Danger</FlatLabeledButton>
  <FlatLabeledButton type="danger" disabled={true}>Danger</FlatLabeledButton>

  <FlatLabeledButton type="warning">warning</FlatLabeledButton>
  <FlatLabeledButton type="warning" disabled={true}>warning</FlatLabeledButton>

  <FlatLabeledButton type="info">info</FlatLabeledButton>
  <FlatLabeledButton type="info" disabled={true}>info</FlatLabeledButton>
</ButtonGroup>
```







###  Size

![](../assets/images/dl-components/ui/flat-labeled-button/button_size.jpg)

```html
<ButtonGroup margin="5">
  <FlatLabeledButton size="sm" >small</FlatLabeledButton>
  <FlatLabeledButton size="sm" >I am small but very long</FlatLabeledButton>
  <FlatLabeledButton size="md" >medium</FlatLabeledButton>
  <FlatLabeledButton size="lg" >large</FlatLabeledButton>
  <FlatLabeledButton size="xl" >xLarge: can be also very long or a sentence<br/>multiline</FlatLabeledButton>
</ButtonGroup>
```







###  Button full width

![](../assets/images/dl-components/ui/flat-labeled-button/button_full_width.jpg)

```html
<ButtonGroup margin="5">
  <FlatLabeledButton size="full" >Button A</FlatLabeledButton>
  <FlatLabeledButton size="full" >Button B</FlatLabeledButton>
</ButtonGroup>
```



###  Alignment

#### Center
![](../assets/images/dl-components/ui/flat-labeled-button/align_center.jpg)

```html
<ButtonGroup margin="5" justify="center">

  <FlatLabeledButton >label</FlatLabeledButton>
  <FlatLabeledButton disabled={true}>Disabled</FlatLabeledButton>

  <FlatLabeledButton type="success" >Success</FlatLabeledButton>
  <FlatLabeledButton type="success" disabled={true}>Success Disabled</FlatLabeledButton>
</ButtonGroup>
```

#### Flex End
![](../assets/images/dl-components/ui/flat-labeled-button/align_flex_end.jpg)

```html
<ButtonGroup margin="5" justify="flex-end">

  <FlatLabeledButton >label</FlatLabeledButton>
  <FlatLabeledButton disabled={true}>Disabled</FlatLabeledButton>

  <FlatLabeledButton type="success" >Success</FlatLabeledButton>
  <FlatLabeledButton type="success" disabled={true}>Success Disabled</FlatLabeledButton>
</ButtonGroup>
```


#### Space Between
![](../assets/images/dl-components/ui/flat-labeled-button/align_space-between.jpg)

```html
<ButtonGroup margin="5" justify="space-between">
  <FlatLabeledButton >label</FlatLabeledButton>
  <FlatLabeledButton disabled={true}>Disabled</FlatLabeledButton>

  <FlatLabeledButton type="success" >Success</FlatLabeledButton>
  <FlatLabeledButton type="success" disabled={true}>Success Disabled</FlatLabeledButton>
</ButtonGroup>
```


#### Space Around
![](../assets/images/dl-components/ui/flat-labeled-button/align_space-around.jpg)

```html
<ButtonGroup margin="5" justify="space-around">
  <FlatLabeledButton >label</FlatLabeledButton>
  <FlatLabeledButton disabled={true}>Disabled</FlatLabeledButton>

  <FlatLabeledButton type="success" >Success</FlatLabeledButton>
  <FlatLabeledButton type="success" disabled={true}>Success Disabled</FlatLabeledButton>
</ButtonGroup>
```




#### Fill the space of the group
![](../assets/images/dl-components/ui/flat-labeled-button/button_gropus_full_width_2.jpg)

```html
<ButtonGroup margin="5" flex="true">
 <FlatLabeledButton >label</FlatLabeledButton>
 <FlatLabeledButton disabled={true}>Disabled</FlatLabeledButton>

 <FlatLabeledButton type="success" >Success</FlatLabeledButton>
 <FlatLabeledButton type="success" disabled={true}>Success Disabled</FlatLabeledButton>
</ButtonGroup>


<ButtonGroup margin="5" flex="true">
 <FlatLabeledButton type="danger">Danger</FlatLabeledButton>
 <FlatLabeledButton type="danger" disabled={true}>Danger</FlatLabeledButton>

 <FlatLabeledButton type="warning">warning</FlatLabeledButton>

 <FlatLabeledButton type="info">info</FlatLabeledButton>
 <FlatLabeledButton type="info" disabled={true}>info</FlatLabeledButton>
</ButtonGroup>
```

Since buttons have a min-width you can see how it works in the following screenshots:

![](../assets/images/dl-components/ui/flat-labeled-button/button_gropus_full_width.jpg)

<br />

![](../assets/images/dl-components/ui/flat-labeled-button/button_gropus_full_width_1.jpg)

## Dependencies


```javascript
import {ButtonGroup, FlatLabeledButton} from 'dl-components' ;
```
