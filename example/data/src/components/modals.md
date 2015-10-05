---
title: <ModalCustom />
lunr: true
template: page.html
nav_sort: 5
nav_groups:
  - primary
---



# `<ModalCustom />`

![](../assets/images/dl-components/ui/overlays/modal_scrollable.jpg)


#### Basic usage: JSX

```html
<ModalCustom open={this.state.isOpened} onBackDropClick={this.closeModal}>
  <ModalCustomTpl onClose={this.closeModal}/>
</ModalCustom>

<FlatLabeledButton onClick={this.openModal}>
  Open Modal
</FlatLabeledButton>
```

#### Basic usage: Javascript

```javascript
constructor(props) {
  super(props);
  this.state = { isOpened: false };
}
openModal = () => {
  this.setState({isOpened: true});
}
closeModal = () => {
  this.setState({isOpened: false});
}
```



#### ModalCustom.js: short version

```html
import css from 'dl-components/style-utils' ;
import React, { Component, PropTypes } from 'react';
import {FlexBar, ...} from 'dl-components';

export default class ModalCustomTpl extends Component {

  onClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }


  render() {
    return (
      <div>
        <FlexBar>
          ...
          <FlexBarIconButton
            onClick={this.onClose} />
          ...
        </FlexBar>

        <PerfectScrollbar className={css.cssModal.modal__body}
              style={{padding: 20}}>
              <LoremText words="250" />
        </PerfectScrollbar>

        <div className="{css.cssModal.modal__footer}">
          <FlexBar>
              ...
          </FlexBar>
        </div>

      </div>

    );
  }
}

```



#### ModalCustom.js: completed version

```html
import React, { Component, PropTypes } from 'react';

import {FlexBarIconButton} from 'dl-components';
import {FlexBar} from 'dl-components';
import {Group} from 'dl-components';
import {Spacer} from 'dl-components';
import {PerfectScrollbar} from 'dl-components';
import {LoremText} from 'dl-components';
import css from 'dl-components/style-utils' ;

import {Tooltip} from 'dl-components' ;
import {Contents} from 'dl-components' ;
import {HoverTrigger} from 'dl-components' ;

export default class ModalCustomTpl extends Component {

  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onBackDropClick: PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  onClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }


  render() {
    return (
      <div>
        <div className={css.cssModal.modal__header}>
          <FlexBar type="primary" size="sm">
            <Spacer />
            <Group align="left" type="primary">HEADER BAR</Group>

            <Tooltip placement="bottom">
              <HoverTrigger>
                <FlexBarIconButton
                  icon="fa fa-check"
                  type="success"
                  size="sm"
                  align="center"
                  onClick={this.onClose} />
              </HoverTrigger>
              <Contents>
                  <span>Confirm</span>
              </Contents>
            </Tooltip>

            <Tooltip placement="bottom">
              <HoverTrigger>
                <FlexBarIconButton
                  icon="fa fa-trash"
                  type="danger"
                  size="sm"
                  align="center"
                  onClick={this.onClose} />
              </HoverTrigger>
              <Contents>
                  <span>Delete Item</span>
              </Contents>
            </Tooltip>

            <Tooltip placement="bottom">
              <HoverTrigger>
                <FlexBarIconButton
                  icon="fa fa-times"
                  type="primary"
                  size="sm"
                  align="center"
                  onClick={this.onClose} />
              </HoverTrigger>
              <Contents>
                  <span>Close</span>
              </Contents>
            </Tooltip>

          </FlexBar>
        </div>

        <PerfectScrollbar className={css.cssModal.modal__body}
              style={{padding: 20}}>
              <LoremText words="350" />
        </PerfectScrollbar>

        <div className="{css.cssModal.modal__footer}">
          <FlexBar type="primary" size="sm">
              <Spacer />
              <Group align="left" type="primary">FOOTER BAR</Group>
              <Tooltip placement="top">
                <HoverTrigger>
                  <FlexBarIconButton
                    icon="fa fa-times"
                    type="primary"
                    size="sm"
                    align="center"
                    onClick={this.onClose} />
                </HoverTrigger>
                <Contents>
                    <span>Close</span>
                </Contents>
              </Tooltip>

          </FlexBar>
        </div>

      </div>

    );
  }
}

```


|Property|Values|Description|
|---|---|---|
|children|any|the modal template|
|open|boolean|toggle modal visibility|
|onBackDropClick|func|background click callback|

---

## Dependencies

```javascript
import ModalCustom from './CustomModal'
import ModalCustomTpl from './modals/ModalCustomTpl';
```
