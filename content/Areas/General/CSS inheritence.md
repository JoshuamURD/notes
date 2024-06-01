---
date: 2024-06-01
tags:
  - atomic
topics:
  - "[[CSS|CSS]]"
themes:
  - "[[CSS specificity|CSS specificity]]"
references:
  - "[[Colt Steele - Udemy - Webdev complete 2024|Colt Steele - Udemy - Webdev complete 2024]]"
---
Child elements will inherit their parent elements if there is not a style declaration for the child elements specifically. Certain properties don't inherit by default. Inheritance can be used like so:
```css
button {
	color: inherit
}
```

This can be used with any property.