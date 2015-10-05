---
title: Form Controls
lunr: true
template: page.html
nav_sort: 400
nav_groups:
  - primary
---


# Form Controls

![](../assets/images/dl-components/ui/form/form.jpg)

#### Dependencies:

```javascript
import css from 'dl-components/style-utils' ;
```


---

## Input Field (underlined)

![](../assets/images/dl-components/ui/form/input_underline.jpg)


```html
<input type="text" className={css.cssInputText.underline}
                  placeholder="name"/>
```

> More input styles will be provided soon



## Text Area

![](../assets/images/dl-components/ui/form/text_area.jpg)


```html
<textarea col="20"  className={css.cssInputText.underline}
                  placeholder="Your text here"/>
```


## Slider

![](../assets/images/dl-components/ui/form/slider.jpg)


```html
<input type="range" className={css.cssInputRange.default} />

<input type="range" min="1" max="100" defaultValue="50"
       className={css.cssInputRange.default}
       style={{width: 200}}/>

```




# `<CheckBox>`


```html
<CheckBox value={false} onChange={this.onChangeChk}>Subscribe</CheckBox>
```

#### Styling and icons

![](../assets/images/dl-components/ui/form/checkbox.jpg)
```html
<CheckBox value={true} onChange={this.onChangeChk}>default</CheckBox>
<CheckBox value={false} onChange={this.onChangeChk}>default</CheckBox>
<br/>
<CheckBox value={true} type="circle-light" onChange={this.onChangeChk}>circle-light</CheckBox>
<CheckBox value={false} type="circle-light" onChange={this.onChangeChk}>circle-light</CheckBox>
<br/>
<CheckBox value={true} labelStyle={{color: 'red'}} onChange={this.onChangeChk}>Custom label color</CheckBox>
<br/>
<CheckBox value={true} type="square" onChange={this.onChangeChk}>square</CheckBox>
<CheckBox value={false} type="square" onChange={this.onChangeChk}>square</CheckBox>
<br/>
<CheckBox value={true} type="ratio" onChange={this.onChangeChk}>ratio</CheckBox>
<CheckBox value={false} type="ratio" onChange={this.onChangeChk}>ratio</CheckBox>
<br/>
<CheckBox value={true} type="ratio-flag1-light" onChange={this.onChangeChk}>ratio-flag1-light</CheckBox>
<CheckBox value={false} type="ratio-flag1-light" onChange={this.onChangeChk}>ratio-flag1-light</CheckBox>
```


# select

![](../assets/images/dl-components/ui/form/select.jpg)

```html
<div className={css.cssFormSelect.select_style}>
  <select onChange={this.onSelect} >
     <option value="">Select</option>
     <option value="">1</option>
  </select>
</div>
```


### Example 1: Form with `<Grid />` component

![](../assets/images/dl-components/ui/form/form_grid_example1.jpg)

```html
render() {
  const formLabelStyles = {
    padding: 10,
    margin: 10,
    minWidth: 200,
  };

  return (
    <div>

      <Grid align="center">
        <Cell style={formLabelStyles} fixed={true}>Message</Cell>
        <Cell>
          <textarea col="20"  className={css.cssInputText.underline} />
        </Cell>
      </Grid>

      <Grid align="center">
        <Cell style={formLabelStyles} fixed={true}>Your Age</Cell>
        <Cell valign="center">
          <input type="range" min="1" max="100" defaultValue="50"
                        className={css.cssInputRange.default}
                        style={{width: 200}}/>
        </Cell>
      </Grid>
    </div>
  );
}
```




### Example 2: horizontal form with `<Grid />` component

![](../assets/images/dl-components/ui/form/form_grid_horizontal.jpg)

```html
<Grid className={css.cssLayoutSpaces.margin4x} align="center">
   <Cell>
     <div className={css.cssFormSelect.select_style}>
       <select onChange={this.onSelect} >
         <option value="">Select</option>
         <option value="">1</option>
       </select>
     </div>
   </Cell>
   <Cell>
      <input type="range" min="0" max="1000" defaultValue="400"
            className={css.cssInputRange.default}
            style={{width: 200}}/>
      <br /> <br />
      <input type="range" min="0" max="1000" defaultValue="100"
             className={css.cssInputRange.default}
             style={{width: 200}}/>
      <br /> <br />
      <input type="range" min="0" max="1000" defaultValue="800"
                    className={css.cssInputRange.default}
                    style={{width: 200}}/>
   </Cell>
   <Cell>
     <input type="text" className={css.cssInputText.underline}/>
   </Cell>
</Grid>
```


## Dependencies

```javascript
import css from 'dl-components/style-utils' ;
import {Checkbox} from 'dl-components' ;

// May be useful to layout your form:
import {Grid} from 'dl-components';
import {Cell} from 'dl-components';
```
