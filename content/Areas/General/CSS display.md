---  
date: 2024-06-03  
tags:  
  - atomic  
topics:  
  - "[CSS](CSS.md)"  
themes:  
  - "[HTML inline vs block elements](HTML%20inline%20vs%20block%20elements.md)"  
  - "[CSS box model](CSS%20box%20model.md)"  
references:  
  - "[Colt Steele - Udemy - Webdev complete 2024](Colt%20Steele%20-%20Udemy%20-%20Webdev%20complete%202024.md)"  
---  
Display property can be changed in CSS. It allows you to set whether an element is displayed as an inline or block property. Display property can be set between three basic types:  
1. **Inline** - Width and height property are ignored. Margin & padding push elements away horizontally but not vertically.  
2. **Block** - Block elements break the flow of a document. Width, height, margin & padding are respected.   
3. **Inline-block** - Behaved like an inline element except width, height, margin & padding are respected.  
  
There a many more display types such as flex and grid.   
  
## A quick way to hide an element  
To hide an element, you can set their display to none.  It's still in the document, it's just not taking up any space or visible.  
```css  
.element {  
	display: none;  
}  
```