---  
date: 2024-06-24  
tags:  
  - atomic  
topics:  
  - "[Javascript](Javascript.md)"  
themes:  
  - "[JS, basic variables](JS,%20basic%20variables.md)"  
references:  
  - "[Colt Steele - Udemy - Webdev complete 2024](Colt%20Steele%20-%20Udemy%20-%20Webdev%20complete%202024.md)"  
---  
Strings are wrapped in quotations. They are words or sentences in javascript.  
  
## Strings are indexed  
Each string has indexed all of the characters. Consider the word "chicken":  
![Pasted image 20240624112508.png](../../Attachments/Pasted%20image%2020240624112508.png)  
  
Javascript indexes it starting at zero. Calling a character outside the string length will return `undefined`.   
  
## String methods  
Built-in methods to strings.  
### Determining length of string  
You can have returned the length of a string by using `string.length` like so:  
```javascript  
let S = "string";  
console.log(S.length);  
```  
### Examples  
There are plenty of examples on MDN. Some methods are:  
- searching within a string  
- replacing part of a string  
- Turn all characters to upper case  
### String methods with arguments  
Arguments are inputs to pass into the method to change how it performs. For example, indexof which you pass where characters are within a string.  
## String template literals  
Can be used to replace variables with their values in a string for example:  
```javascript  
`I counted ${3 + 4} sheep`  
```  
  
You use backticks instead of quotations.