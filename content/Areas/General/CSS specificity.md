---
date: 2024-05-29
tags:
  - atomic
topics:
  - "[[CSS|CSS]]"
themes:
  - "[[./CSS cascade|CSS cascade]]"
references:
  - "[[Colt Steele - Udemy - Webdev complete 2024|Colt Steele - Udemy - Webdev complete 2024]]"
---
Specificity is how the browser decides which rules to apply when multiple rules could apply to the same element. It is a measure of how specific a given selector is. The more "specific" wins.
For example:
```css
.element button:hover {
	color: red;
}
button:hover {
	color: red;
}
```
The .element class adds a bit more specificity so it would win with any button that has that class.

General formula for specificity in this order is:
1. ID beats
2. Class which beats
3. Element

and the effects are cumulative as can be seen with the above example. The more element selectors that there are in a rule, the more specific it is.

When specificity is equal, it comes down to the [[./CSS cascade|CSS cascade]].

# Devtools
If you inspect an element's style in the browser and it's crossed out, it means its losing in its specificity against another style selector.