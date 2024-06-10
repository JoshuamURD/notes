---  
date: 2024-06-03  
tags:  
  - atomic  
topics:   
themes:   
references:   
---  
There are two types of units in CSS. Absolute and relative units. Pixels are the commonly most used absolute unit.  
  
Relative units are all mostly commonly used:  
  
## Percentages  
Percentages are always relative to some other value. Sometimes its a value from the parent and other times its a value from the element itself:  
- width will be a percentage of the parent;  
- line-height will be a percentage of the font size of the element itself.  
  
## Ems  
Ems are a relative unit with font-size. 1em equals the font size of the parent. 2 ems is twice the font size of the parent and so on.   
  
With other properties, em is equal to the computed font-size of the element itself.  
  
## Rems  
Relative to the root HTML element's font size. Often easier to work with over Ems. If the root font size is 20px, 1 rem is always 20 pxs.