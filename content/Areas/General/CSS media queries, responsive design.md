---  
date: 2024-06-19  
tags:  
  - atomic  
topics:  
  - "[CSS](CSS.md)"  
themes:   
references:  
  - "[Colt Steele - Udemy - Webdev complete 2024](Colt%20Steele%20-%20Udemy%20-%20Webdev%20complete%202024.md)"  
---  
# What is a responsive design  
Responsive design is a website where the elements respond to the device it is on. For example, on a smaller mobile device screen, the nav bar turns into a hamburger menu.  
  
# Media queries  
Allow us to modify our style depending on particular parameter like screen width or device type. Here's a common application:  
```CSS  
@media (width: 600px) {  
	body {  
		color: red;  
	}  
}  
```  
  
This will change the color of everything in the body to red once the device viewport reaches 600px in width.  
  
To make it do it for anything after a certain amount, use `max-width` or `min-width`.  
