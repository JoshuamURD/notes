---  
date: 2024-06-01  
tags:  
  - atomic  
topics:  
  - "[CSS](CSS.md)"  
themes:  
  - "[CSS specificity](CSS%20specificity.md)"  
references:  
  - "[Colt Steele - Udemy - Webdev complete 2024](Colt%20Steele%20-%20Udemy%20-%20Webdev%20complete%202024.md)"  
---  
Child elements will inherit their parent elements if there is not a style declaration for the child elements specifically. Certain properties don't inherit by default. Inheritance can be used like so:  
```css  
button {  
	color: inherit  
}  
```  
  
This can be used with any property.