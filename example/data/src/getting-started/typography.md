---
title: Typography
lunr: true
template: page.html
nav_sort: 300
nav_groups:
  - primary
---


# `<H>`: Heading

![](../assets/images/dl-components/ui/typography/Heading.jpg)

```html
<H s="1">Heading 1</H>
<H s="2">Heading 2</H>
<H s="3">Heading 3</H>
<H s="4">Heading 4</H>
<H s="5">Heading 5</H>
<H s="6">Heading 6</H>
```


---  

# `<Text>`: simple text

![](../assets/images/dl-components/ui/typography/Type.jpg)


```html
<Text s="4" type="primary">primary | </Text>
<Text s="4" type="success">success | </Text>
<Text s="4" type="info">info | </Text>
<Text s="4" type="warning">success | </Text>
<Text s="4" type="danger">danger | </Text>

<!-- Also available: -->
<Text s="4" >default text | </Text>
<Text s="4" type="white">white | </Text>
```


---  

# Size

![](../assets/images/dl-components/ui/typography/Size.jpg)


```html
<Text>text default</Text>
<Text s="1">Text 1</Text>
<Text s="2">Text 2</Text>
<Text s="3">Text 3</Text>
<Text s="4">Text 4</Text>
<Text s="5">Text 5</Text>
<Text s="6">Text 6</Text>
```

---


# `<TextLink>`

> Still not completed

![](../assets/images/dl-components/ui/typography/TextLink.jpg)

```html
<TextLink s="6" type="primary" url="http://www.google.com">MY AWESOME LINK</TextLink> |
<TextLink s="6" type="success" url="http://www.google.com">MY AWESOME LINK</TextLink> |
<TextLink s="6" type="info" url="http://www.google.com">MY AWESOME LINK</TextLink>
```

---

# `deco`: decorate `<Text />`

![](../assets/images/dl-components/ui/typography/Deco.jpg)


```html
<Text deco="bold">bold | </Text>
<Text deco="underline">bold | </Text>
<Text deco="line-through">bold | </Text>
<Text deco="italic">italic | </Text>

<Text s="4" deco="bold">bold </Text>
<Text s="4" deco="underline">underline </Text>
<Text s="4" deco="line-through">line-through </Text>
<Text s="4" deco="italic">italic </Text>
```

# `deco`: decorate `<TextLink />`

![](../assets/images/dl-components/ui/typography/TextLink_DecoBold.jpg)

```html
<TextLink s="5" deco="bold"  type="primary">my awesome link</TextLink> |
<TextLink s="5" deco="bold" type="success">my awesome link</TextLink> |
<TextLink s="5" deco="bold" type="info">my awesome link</TextLink>
```

---

```javascript
import {H} from 'dl-components' ;
import {Text} from 'dl-components' ;
import {TextLink} from 'dl-components' ;
```
