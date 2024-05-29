---
date: 2024-05-25
tags:
  - atomic
topics:
  - "[[CSS|CSS]]"
themes: 
references:
  - "[[Colt Steele - Udemy - Webdev complete 2024|Colt Steele - Udemy - Webdev complete 2024]]"
---
/
Selectors are the part of the CSS which selects the element:
```css
selector {
	property: x;
}
```

# Universal selector
The `*` is the universal selector. However it's not considered good practice to use this as there's other semantic ways to select everything.

# Selecting multiple elements
To select multiple elements, you put a comma in between each element in the selector section of the css such as:
```css
h1, h2 {
	font-family: Times New Roman;
}
```

# ID
You can add an ID attribute to any html tag and use that as the selector for the CSS to select that specific element. To select an ID you need to use a hashtag:
```css
#id-1 {
	color: red;
}
```
This will color the element with an id attribute of id-1. It's generally good practice not to use too many IDs as it can quickly become hard to manage. It's better to use classes
# Class
Creates a selector group, so many different elements can be styled within this one group or class. Elements can be of a different type but have the same class and will be styled the same. You select a class with a dot:
```css
.selector {
	color: red;
}
```
# Descendent selector
You can select all children element of a certain selector by having a space between the two listed elements. This will select only the elements that are a child of the other:
```css
li a {
	color: red;
}
```
This will select only the anchor tags that are within a list element.
# Adjacent selector
Adjacent selector only selects the element that is directly preceded by the prior selector.
```css
h1 + p {
	color: red;
}
```
Will only select the paragraph elements which are immediately after a h1 element
# Direct descendant selector
Selects only the direct children. This differs from the descendant selector because it only selects one level down. The descendant selector selects all children no matter how many sub levels there are.
```css
div > p {
	color: red;
}
```
# Attribute selector
selects all of the element type where a certain attribute is set:
```css
input[type="text"] {
	color: red;
}
```
Selects all inputs where its type is set to text