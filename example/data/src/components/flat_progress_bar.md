---
title: <FlatProgressBar />
lunr: true
template: page.html
nav_sort: 5
nav_groups:
  - primary
---

# `<FlatProgressBar>`
![](../assets/images/dl-components/ui/flat_progress_bar/flat_progress_bar.gif)



#### Simple usage
```html
<FlatProgressBar value={value}
                 leftLabel="10 mar 2015"
                 rightLabel="22 aprile 2015"
                 progressLabel="15 aprile 2015"
                 onChange={this.onClickProgressBar}/>
```

#### Real Usage

```html

const leftProgressLabelTpl = <div>13:22:22<br/>14 MAY 2015</div>;
const rightProgressLabelTpl = <div>14:55:43<br/>14 MAY 2015</div>;
...
<FlatProgressBar value={this.state.perc}
                 leftLabel={leftProgressLabelTpl}
                 rightLabel={rightProgressLabelTpl}
                 progressLabel={this.state.perc + '%'}
                 onChange={this.onClickProgressBar}/>
```

```javascript
onClickProgressBar = (params) => {
  this.setState({perc: parseInt(params.percentage, 10)});
}
```

## Customize

![](../assets/images/dl-components/ui/flat_progress_bar/flat_progress_bar_skinned.jpg)


```html
<FlatProgressBar value={this.state.perc}
                leftLabel={leftProgressLabelTpl}
                rightLabel={rightProgressLabelTpl}
                progressLabel={this.state.perc + '%'}
                onChange={this.onClickProgressBar}
                backgroundColor="white"
                barColor="lightgreen"
                labelColor="#222"/>

```

|Property|Values|Description|
|---|---|---|
|value|number(required)|the value (percentage 0-100)|
|leftLabel|any|the left label: string or JSX|
|rightLabel|any|the right label: string or JSX|
|progressLabel|any|the progress label: string or JSX|
|backgroundColor|string|the background color|
|barColor|string|the progress bar color|
|labelColor|string|the text color|
|onChange|function|invoked when user clicks bar (return `percentage`)|



---  
## Dependencies

```javascript
import {FlatProgressBar} from 'dl-components';
```
