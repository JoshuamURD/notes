---
date: 2024-05-23
tags:
  - atomic
topics:
  - "[[html|html]]"
themes: 
references:
  - "[[Colt Steele - Udemy - Webdev complete 2024|Colt Steele - Udemy - Webdev complete 2024]]"
---
# Form tag
Forms are used whenever there is some kind of input from the user (generally). 
The `<form>` tag groups the form elements together and it specifies the method that is used in sending the data once it is submitted. This is put in the "action" property of the tag.
# Inputs
The `<input>` tag is used to create a variety of different form controls. There are 20+ different possible inputs. The type attribute dynamically alters the input's behaviour and appearance. Doesn't have a closing tag. Can use a placeholder attribute to put in some text which shows what is put in the input. You can give the input an id attribute so that a label can be attached to it.
## Name Attribute
When you send data, the name attribute is used by the server to identify where an input has come from.  It will send a request something like login?username=user. Username is the name attribute of a HTML form, "user" is the data the user would've submitted.
## Value attribute
provides a default value for the input to be submitted if it is a radio button. 
# Labels
Labels are specified with the `<label>` tag. They are given a "for" attribute which corresponds to an input id. This specifies which input the label is being used for in the form.
# You can wrap forms in paragraphs
If you wrap a label and input tag around a paragraph tag it will make that group take the whole block. This can be used to create line breaks for labels and inputs of different types so that it's not displayed in the usual inline block.
# Button
Can be used to do certain actions - default action is submit. Writing between the opening and closing tag labels the button. You can use the type attribute to change its action.
# Select 
The select element provides a drop down menu by using the `<select>` tag. The different options for the dropdown menu are put between the select element tags using the `<option>` tag. 
