---
date: 2024-05-29
tags:
  - atomic
topics:
  - "[[CSS|CSS]]"
themes: 
references:
  - "[[Colt Steele - Udemy - Webdev complete 2024|Colt Steele - Udemy - Webdev complete 2024]]"
---
The order that styles are declared in matters. The bottom of the style sheet and which stylesheet is linked to first will go in order of which style "wins". For example:
```css
h1 {
	color: red;
}
h1 {
	color: purple;
}
```

h1 will be coloured purple because purple was declared lower