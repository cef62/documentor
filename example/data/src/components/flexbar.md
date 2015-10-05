---
title: <FlexBar />
lunr: true
template: page.html
nav_sort: 5
nav_groups:
  - primary
---

# `<FlexBar>`

![](../assets/images/dl-components/ui/flexbar/flexbar.gif)



#### Pseudo-Code
```html
<FlexBar>
  <element />
  <element />
  <element />
</FlexBar>
```

#### Simple Usage
```html
<FlexBar>
  <FlexBarLabelButton align="center">label 1</FlexBarLabelButton>
  <Spacer width="1" color="#ccc" />
  <FlexBarIconButton icon="fa fa-file"/>
  <Spacer width="1" color="#ccc" icon="fa fa-cubes"/>
  <Group size="sm" align="center" interactive="true">
    <i className="fa fa-heartbeat"></i>
  </Group>
</FlexBar>
```

#### Real Usage

![](../assets/images/dl-components/ui/flexbar/flexbar_overview.jpg )


```html
<FlexBar>

  <FlexBarLabelButton align="center">label 1</FlexBarLabelButton>
  <Spacer width="1" color="#ccc" />
  <FlexBarLabelButton icon="fa fa-cubes">label 2</FlexBarLabelButton>
  <Spacer width="1" color="#ccc" icon="fa fa-cubes"/>
  <div className={classNames(css.cssSelectForFlexBar.select_style ) }>
    <select>
      <option value="">Select</option>
      <option value="">1</option>
      <option value="">2</option>
    </select>
  </div>
  <Spacer width="1" color="#ccc" />
  <FlexBarIconButton icon="fa fa-file"/>
  <Spacer width="1" color="#ccc" />
  <Group align="center">MY TOOLBAR</Group>
  <Spacer width="20"/>

  <FlexBarIconButton icon="fa fa-external-link-square" />

  <Group size="sm" align="center" interactive="true">
    <i className="fa fa-heartbeat"></i>
  </Group>

  <FlexBarIconButton
    icon="fa fa-external-link-square"
    type="primary"
    size="md"
    align="center" />

</FlexBar>
```


|Property|Values|Description|
|---|---|---|
|vertical|string,boolean|Must use when flexbar is vertical|
|justify|'center', 'space-around', 'space-between', 'flex-start', 'flex-end'|Items justify|
|type|'default', 'primary', 'success', 'error', 'warning', 'info'| Background Color |
|size|'default', 'xs', 'sm', 'md', 'lg', 'xl'|preset height|
|width|number|Custom FlexBar width|
|height|number|Custom FlexBar height|
|style|object|Custom styles|
|className|string,object|Custom CSS clases|
|children|any| the content to display|


## Alignment and Justify


####Justify: space-around

![](../assets/images/dl-components/ui/flexbar/justfity_space_around.jpg )

```html
<FlexBar justify="space-around">
  <FlexBarLabelButton type="primary">Tab 1 </FlexBarLabelButton>
  <FlexBarLabelButton type="primary">Tab 2</FlexBarLabelButton>
  <FlexBarLabelButton type="primary">Tab 3</FlexBarLabelButton>
</FlexBar>


```


#### Justify: space-between

![](../assets/images/dl-components/ui/flexbar/justfity_space_between.jpg )

```html
<FlexBar justify="space-between">
  <FlexBarLabelButton size="xl" type="primary">Tab 1 </FlexBarLabelButton>
  <FlexBarLabelButton size="xl" type="primary">Tab 2</FlexBarLabelButton>
  <FlexBarLabelButton size="xl" type="primary">Tab 3</FlexBarLabelButton>
</FlexBar>

```


#### Size

![](../assets/images/dl-components/ui/flexbar/button_full_width.jpg )

```html
<FlexBar size="sm" />
<FlexBar size="md" />
<FlexBar size="xl" />
```

## `<FlexBarLabelButton>`

![](../assets/images/dl-components/ui/flexbar/types.jpg )
```html

<FlexBar size="sm">

  <FlexBarLabelButton size="md" type="success"    
                      onClick={this.onClick}>Success</FlexBarLabelButton>
  <FlexBarLabelButton size="md" type="warning"
                      align="center">Warning</FlexBarLabelButton>
  <FlexBarLabelButton size="md" type="danger"
                      icon="fa fa-exclamation-triangle">Danger</FlexBarLabelButton>
  <FlexBarLabelButton size="md"
                      type="info">Info</FlexBarLabelButton>
  <FlexBarLabelButton size="md"
                      type="active">Actived</FlexBarLabelButton>
  <FlexBarLabelButton size="md" type="success"
                      disabled="true">Disabled</FlexBarLabelButton>

</FlexBar>
```

|Property|Values|Description|
|---|---|---|
|type|'default', 'primary', 'success', 'warning', 'danger', 'info', 'active', 'cancel'| ... |
|align|'left', 'right', 'center'|...|
|size|'default', 'sm', 'md', 'lg', 'xl', 'full', 'sm_vertical'|...|
|icon|icon css class|i.e. 'fa fa-file'[TO FIX]|
|disabled|string,boolean||
|vertical|string,boolean|Must use when flexbar is vertical|
|style|object|override style|
|className|string,object|override css class|
|children|any| the content to display|
|onClick|callback|...|



### Full Width Buttons

![](../assets/images/dl-components/ui/flexbar/button_full_width.jpg )

```html
<FlexBar>
  <FlexBarLabelButton type="primary" size="full">Tab 1</FlexBarLabelButton>
  <FlexBarLabelButton type="primary" size="full">LONG Tab name 2</FlexBarLabelButton>
  <FlexBarLabelButton type="primary" size="full"><div>ALSO<br />MULTILINE</div></FlexBarLabelButton>
</FlexBar>
```


### Button Rows (with full button width)

![](../assets/images/dl-components/ui/flexbar/flexbar_button_groups.gif )

In the following code you can also see how to set a custom style to the whole `FlexBar` component
```html
<FlexBar style={{width: 400}}>
  <FlexBarLabelButton type="primary" size="full">Tab 1</FlexBarLabelButton>
  <FlexBarLabelButton type="primary" size="full">Tab 2</FlexBarLabelButton>
  <FlexBarLabelButton type="primary" size="full">Tab 3</FlexBarLabelButton>
  <FlexBarLabelButton type="primary" size="full">Tab 4</FlexBarLabelButton>
  <FlexBarLabelButton type="primary" size="full">Tab 5</FlexBarLabelButton>
  <FlexBarLabelButton type="primary" size="full">Tab 6</FlexBarLabelButton>
</FlexBar>

<FlexBar style={{width: 400}}>
  <FlexBarLabelButton type="cancel" size="full">Tab 1</FlexBarLabelButton>
  <FlexBarLabelButton type="cancel" size="full">Tab 2</FlexBarLabelButton>
  <FlexBarLabelButton type="cancel" size="full">Tab 3</FlexBarLabelButton>
</FlexBar>

<FlexBar style={{width: 400}}>
  <FlexBarLabelButton type="danger" size="full">Tab 1</FlexBarLabelButton>
</FlexBar>
```


---

## `<Group>`

An useful container for anything, often used for labels and icons.

![](../assets/images/dl-components/ui/flexbar/group.jpg )
```html

<FlexBar size="sm">

  <Group align="center">CENTERED TITLE</Group>

  <Group size="sm" align="center" interactive="true">
    <i className="fa fa-heartbeat"></i>
  </Group>
  <Group size="sm" align="center" interactive="true">
    <i className="fa fa-subway"></i>
  </Group>

</FlexBar>
```

|Property|Values|Description|
|---|---|---|
|type|'default', 'primary', 'success', 'warning', 'danger', 'info', 'active', 'cancel'|...|
|align|'left', 'right', 'center'|...|
|size|'default', 'xs', 'sm', 'md', 'lg', 'xl', 'full', 'fixed', 'sm_vertical'| ... |
|interactive|boolean,string|enable rollover effect to simulate a button|
|style|object|override style|
|className|string,object|override css class|
|children|any| the content to display|
|onClick|callback|...|




---

## `<FlexBarIconButton>`

![](../assets/images/dl-components/ui/flexbar/group.jpg )
```html

<FlexBar size="sm">

  <Group align="center">CENTERED TITLE</Group>

  <Group size="sm" align="center" interactive="true">
    <i className="fa fa-heartbeat"></i>
  </Group>
  <Group size="sm" align="center" interactive="true">
    <i className="fa fa-subway"></i>
  </Group>

</FlexBar>
```

|Property|Values|Description|
|---|---|---|
|icon|icon css class|i.e. 'fa fa-file'|
|type|'default', 'primary', 'success', 'warning', 'danger', 'info', 'active', 'cancel'|...|
|align|'left', 'right', 'center'|...|
|size|'default', 'xs', 'sm', 'md', 'lg', 'xl', 'full', 'fixed', 'sm_vertical'| ... |
|color|string|...|
|disabled|string,boolean||
|vertical|string,boolean|Must use when flexbar is vertical|
|toggleStatus|string,boolean|enabled or disabled|
|toggable|string,boolean|if the button is toggable|
|onClick|callback|...|






---

## `<Spacer>`

Useful to create a gap between element or draw an horizontal/vertical separator


![](../assets/images/dl-components/ui/flexbar/separator.jpg )
```html

<FlexBar size="sm">

  <Group align="center">CENTERED TITLE</Group>

  <Group size="sm" align="center" interactive="true">
    <i className="fa fa-heartbeat"></i>
  </Group>
  <Group size="sm" align="center" interactive="true">
    <i className="fa fa-subway"></i>
  </Group>

</FlexBar>
```

|Property|Values|Description|
|---|---|---|
|color|string|hexa color|
|align|'left', 'right', 'center'|...|
|size|'sm', 'md', 'lg', 'fixed'|preset width|
|width|string,number|custom width|
|height|string,number|custom height|
|style|object|override style|
|className|string,object|override css class|




---

## `<select>` for FlexBar

Import the DL-Components styles

```html
import css from 'dl-components/style-utils' ;
```

Wrap a `<select>` into a `<div>` and use the

```html
<div className={css.cssSelectForFlexBar.select_style}>
  <select>
    <option value="">Select</option>
    <option value="">1</option>
    <option value="">2</option>
  </select>
</div>
```

You can also invert the color using adding the primary class as following:

![](../assets/images/dl-components/ui/flexbar/flexbar.gif)

```javascript
const classNames = require('classnames');
```

```html
<div className={classNames(css.cssSelectForFlexBar.select_style, css.cssSelectForFlexBar.primary ) }>
  <select>...</select>
</div>
```

---  
## Dependencies

```javascript
// Only for <select>
import css from 'dl-components/style-utils' ;

// Components
import {FlexBarLabelButton} from 'dl-components';
import {FlexBarIconButton} from 'dl-components';
import {FlexBar} from 'dl-components';
import {Group} from 'dl-components';
import {Spacer} from 'dl-components';

```
