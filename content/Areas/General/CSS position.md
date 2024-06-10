---  
date: 2024-06-03  
tags:  
  - atomic  
topics:  
  - "[CSS](CSS.md)"  
themes:   
references:  
  - "[Colt Steele - Udemy - Webdev complete 2024](Colt%20Steele%20-%20Udemy%20-%20Webdev%20complete%202024.md)"  
---  
The position property controls how an element is positioned on the document.   
  
The relative position property keeps the same position as the element would've been but allows it to be offset from that position using the top, left, right and bottom property:  
```css  
.element {  
	position: relative;  
	top: 20px;  
}  
```  
  
The absolute positioning property removes the element from the normal document flow and no space is created for the element in the page layout. It is positioned relative to its closest positioned anscestor, if any otherwise it is placed relative to the initial containing block.