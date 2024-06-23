---  
date: 2024-06-04  
tags:  
  - atomic  
topics:  
  - "[CSS](CSS.md)"  
themes:   
references:  
  - "[Colt Steele - Udemy - Webdev complete 2024](Colt%20Steele%20-%20Udemy%20-%20Webdev%20complete%202024.md)"  
---  
Flexbox is a one-dimensional layout method for laying out items in rows or columns. Allows to distribute space dynamically across elements of an unknown size, hence the term "flex". This is probably the best for having adjustable content for different sized screens. It's commonly used to have responsive navigation bars, for example.  
  
## Axis  
In the flex model, the main axis runs horizontally and the cross axis vertically. This changes when you change the flex-direction property. You can set flex to columns or rows (see [Align-content](CSS%20flexbox.md#Align-content) to control column/row spacing).  
  
## Justify content  
Allows you to move where the content aligns itself. If you use flex start, it will align along the start of the axis.  
  
## Align items  
Align items along the cross axis. So can be considered how to align items vertically.  
  
## Align-content  
Controls the space between columns or rows depending on whether flex is set to columns or rows.  
  
## Align-self  
Used for single elements within the flex container. It aligns the single item differently to the way the flex container is aligning items.  
  
## Flex grow and shrink  
