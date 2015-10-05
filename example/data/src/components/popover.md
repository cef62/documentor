---
title: <Popover />
lunr: true
template: page.html
nav_sort: 5
nav_groups:
  - primary
---

# `<Popover>`

The popover component can act as tooltip or as popover and can be triggered on mouse over or when user clicks the trigger element (i.e. a button).


## Use as Tooltip

![](../assets/images/dl-components/ui/tooltip_popover/tooltip.gif)

#### Simple usage
```html
<Popover content="My Tooltip Content Here" align="right" >
  <HoverTriggerPopover>
    <button>MyButton</button>
  </HoverTriggerPopover>
</Popover>
```

#### Apply a tooltip to any components (DL-Components too)
```html
<Popover content="My Tooltip Content Here" align="top" >
  <HoverTriggerPopover>
    <FlatLabeledButton type="success">MyButton</FlatLabeledButton>
  </HoverTriggerPopover>
</Popover>
```

## Content

The content can be static or dynamic:

#### String
```html
<Popover placement="top" content="my tooltip content">
  ...
```

#### Inline JSX
```html
<Popover placement="top" content={<div>ciao<div>}>
  ...
```

#### A property with a valid JSX

```html
<Popover placement="top" content={myTooltip}>
  ...
```

```javascript
const myTooltip = "my Content"
```

#### A function

```html
<Popover placement="top" content={this.getTooltipTemplate()}>
```

The template can contains conditionals and include other DL-Components in order to create any type of content. See the popover images to understand what you mean

```html
export function popover1Static() {
  return (
<div>
  content here..
  <FlexBar>
    <FlexBarLabelButton>Tab 1</FlexBarLabelButton>
    <Spacer width="1" color="#666" />
    <FlexBarLabelButton>Tab 1</FlexBarLabelButton>
    ...
  </FlexBar>
</div>
); }
```





---
## Usa as Popover

![](../assets/images/dl-components/ui/tooltip_popover/popover_normal.gif)

```html
<Popover placement="bottom" content={Content.tooltip1Static}>
  <HoverTriggerPopover>
    <FlatLabeledButton type="success" margin="5" >Bottom</FlatLabeledButton>
  </HoverTriggerPopover>
</Popover>
```

```html
export function popover1Static(closeFunc) {
  return (
<div>
  <Padding value="10">
    <h3>POPOVER</h3>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur harum, neque excepturi quo repudiandae est autem esse error at dignissimos odio numquam eum iste vel similique ad quia veritatis cum!
  </Padding>
  <FlexBar>
    <FlexBarLabelButton size="full" type="primary">Tab 1</FlexBarLabelButton>
    <Spacer width="1" color="#666" />
    <FlexBarLabelButton size="full" type="primary">Tab 2</FlexBarLabelButton>
    <Spacer width="1" color="#666" />
    <FlexBarLabelButton size="full" type="primary" onClick={closeFunc}>Close</FlexBarLabelButton>
  </FlexBar>
</div>
); }
```





---
## Popover with scrollable content

This example use the `PerfectScrollbar component` and it also demonstrates how to close a popover from a button included in the content

![](../assets/images/dl-components/ui/tooltip_popover/popover_scrollbar.gif)

```html
<Popover ref="popover" placement="left" size="md"
         content={this.myPopoverTpl(this.closePopover)}>
  <HoverTriggerPopover autoClose={false}>
    <FlatLabeledButton type="warning" margin="5" >OVER ME</FlatLabeledButton>
  </HoverTriggerPopover>
</Popover>
```

```html
function myPopoverTpl() {
  return (
    <div>
      <Padding value="20">
        <PerfectScrollbar height={130} >
          <LoremText words="200" />
        </PerfectScrollbar>

      </Padding>
      <FlexBar>
        <FlexBarLabelButton size="full">Tab 1</FlexBarLabelButton>
        <FlexBarLabelButton size="full">Tab 2</FlexBarLabelButton>
        <FlexBarLabelButton size="full" onClick={closeFunc}>Close</FlexBarLabelButton>
      </FlexBar>
    </div>
  );
}
```

```javascript
closePopover = () => {
  this.refs.popover.close();
}
```




---
## Toggable Popover (and `onOpen` event)

An example Open and close the popover every time you click the trigger element (for example a button).

In order to enable this behavior you must:

1) use the `ClickTriggerPopover` component to open the popover when user clicks the trigger element.

2) set `autoClose` to `false`, so the popover is not closed when user rollout the trigger element

3) set `toggable` to enable toggling

![](../assets/images/dl-components/ui/tooltip_popover/popover_toggle.gif)

```html
<Popover ref="popover" placement="bottom" size="xl"
      onOpen={this.closeAllPopover}
      content={this.myPopoverTpl(this.closePopover)}>
  <ClickTriggerPopover autoClose={false} toggable={true}>
    <FlatLabeledButton type="warning" margin="5" >Click Me more times</FlatLabeledButton>
  </ClickTriggerPopover>
</Popover>
  ```          

> `onOpen` is invoked every time the popover is opened

```javascript
  closeAllPopover = () => {
    this.closePopover1();
    this.closePopover2();
    // ...
  }
```





---
## Use Popover in Flex Bar (or any other component)

![](../assets/images/dl-components/ui/tooltip_popover/tooltip_flexbar.gif)

```html
<FlexBar type="primary">

  <Popover placement="bottom" content={Content.tooltip1Static}>
    <HoverTriggerPopover>
      <FlexBarLabelButton type="primary" size="md">Tooltip</FlexBarLabelButton>
    </HoverTriggerPopover>
  </Popover>

  <FlexBarLabelButton type="primary">No Tooltip</FlexBarLabelButton>

  <Popover ref="popover3" placement="top"
     onOpen={this.closeAllPopover}
     content={Content.popover1Static(this.closePopover3)}>
    <ClickTriggerPopover autoClose={false}>
      <FlexBarLabelButton type="success">click me popover</FlexBarLabelButton>
    </ClickTriggerPopover>
  </Popover>

  <Spacer />

  <Group type="primary">MY TOOLBAR</Group>

  <Popover placement="bottom"  content={Content.tooltip1Static}>
    <HoverTriggerPopover>
        <Group size="sm" align="center" interactive="true">
          <i className="fa fa-heartbeat"></i>
        </Group>
    </HoverTriggerPopover>
  </Popover>

  <Group size="sm" align="center" interactive="true">
    <i className="fa fa-subway"></i>
  </Group>

  <FlexBarIconButton type="primary">label icon</FlexBarIconButton>

</FlexBar>
```

```html
<FlexBar>
  <Group>
    <Popover placement="right" content={Content.tooltip1Static}>
      <HoverTriggerPopover>
        <FlexBarLabelButton size="full">tooltip right</FlexBarLabelButton>
      </HoverTriggerPopover>
    </Popover>
  </Group>

 <Group>
  <Popover placement="bottom" content={Content.tooltip1Static}>
    <HoverTriggerPopover autoClose={false}>
      <FlexBarLabelButton size="full">Tooltip bottom</FlexBarLabelButton>
    </HoverTriggerPopover>
  </Popover>
 </Group>

  <Group>
    <Popover placement="top" content={Content.tooltip1Static}>
      <HoverTriggerPopover>
        <FlexBarLabelButton size="full">Tooltip top</FlexBarLabelButton>
      </HoverTriggerPopover>
    </Popover>
   </Group>
</FlexBar>
```


|Property|Values|Description|
|---|---|---|
|content|the content of the popover||
|children|any|the trigger element|
|placement|top,bottom,left,right|popover position|
|padding|number|the content popover padding|
|align|'left', 'right', 'center'|popover content alignment|
|size|'default', 'sm', 'md', 'lg', 'xl', 'xxl']|popover size|
|color|string|custom background color|
|flex|boolean|if true set flex=1 to popover wrapper|
|onOpen|func|invoked each time the popover is opened|
|onClose|func|invoked when popover is closed|
|style|object|override style|
|className|string,object|override css class|


---
## `ClickTriggerPopover`

The `HoverTriggerPopover` components show the tooltip/popover when the user moves the mouse over the trigger element and is hidden when rollouts.

Using the `ClickTriggerPopover` the the popover is opened when the user clicks the trigger element, that can be toggable too.

```
<Popover content="hello tooltip">
 <ClickTriggerPopover autoClose={false}  toggable={true}>
   <FlatLabeledButton>MyButton</FlatLabeledButton>
 </ClickTriggerPopover>
</Popover>
```

|Property|Values|Description|
|---|---|---|
|autoClose|boolean|if `true` close when rollout|
|toggable|boolean|enable toggl|
|children|boolean|the trigger element|



---  
## Dependencies

```javascript
import {Popover} from 'dl-components' ;
import {HoverTriggerPopover, ClickTriggerPopover} from 'dl-components' ;
```
