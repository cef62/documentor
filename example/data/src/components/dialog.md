---
title: <DialogConfirm />
lunr: true
template: page.html
nav_sort: 5
nav_groups:
  - primary
---


# `<Dialog>`

![](../assets/images/dl-components/ui/overlays/dialog.jpg)


```html
<DialogConfirm open={this.state.dialogOpen}
               config={this.state.dialogConfig}
               onConfirm={this.confirmDialog}
               onClose={this.closeDialog}
               onBackDropClick={this.closeDialog} />

<FlatLabeledButton onClick={this.openDialog}>Open Dialog</FlatLabeledButton>
```


```html
openDialog = () => {
  const config = {
    title: 'My super title',
    align: 'left',
    content: <div><LoremText words="300"/><LoremText words="300"/></div>,
  };
  this.setState({dialogOpen: true, dialogConfig: config});
}

confirmDialog = () => {
  this.setState({dialogOpen: false, dialogConfig: null});
}

closeDialog = () => {
  this.setState({dialogOpen: false, dialogConfig: null});
}
```


## Dependencies

```javascript
import {DialogConfirm} from 'dl-components' ;
```
