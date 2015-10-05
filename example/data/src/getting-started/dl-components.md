---
lunr: true
title: DL-Components
template: page.html
nav_sort: 100
nav_groups:
  - primary
  - footer
---

# DL-Components

#### DL Components is a set of UI components built to quickly develop our internal tools.


### Technologies
The framework is built with the following tecnologies:

[ul]
[li]React[/li]
[li]ES6[/li]
[li]FlexBox[/li]
[li]WebPack[/li]
[/ul]



### Installation

DL-Components is available on npm as **private** module. Ask admin for info.
> This library is under development and it's still not public!



### Ready for Flux

Most of the components are stateless and works with any architecture (we use [Redux](https://github.com/rackt/react-redux), one of the best Flux implementation)

---

### Components can be mixed

[li]A `FlatButton` of a `<FlexBar>` can display a `<Popover/>` that contains a `<Scroller>` content[/li]
[li]But we can also have a `<tooltip>` that contains a `<FlexBar>`[/li]
[li]or we can have a `<scroller>` with inside a `<FlexBar/>`
[li]A `<Modal>` component can contains `<Scroller>`, `<FlexBar>` and `<Popover>`[/li]
[li]Aand so on.[/li]

### Examples

#### `<Popover/>` + `<PerfectScrollbar />` + `<FlexBar />`
![](../assets/images/dl-components/ui/tooltip_popover/popover_scrollbar.gif)

#### `<CollapsablePanel/>` + `<KeyValuePanel/>` + `<PerfectScrollbar />`
![](../assets/images/dl-components/ui/panels/collapsablepanel_with_scrollable_panel_key_value.gif)

#### `<Modal/>` + `<Popover/>` + `<FlexBar />`
![](../assets/images/dl-components/ui/overlays/dialog.jpg)


# Real World examples:

![](../assets/images/dl-diagnostic/screenshots/dl_diagnostic_visual_2.jpg)
