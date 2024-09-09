---  
date: 2024-09-09T09:23:00  
tags:  
  - atomic  
topics:  
  - "[Sveltekit](Sveltekit.md)"  
  - "[Sveltekit, loading data](Sveltekit,%20loading%20data.md)"  
themes:   
references:  
  - https://kit.svelte.dev/docs/load  
---  
## Page vs page.server  
Page and page.server in sveltekit are javascript functions that either run on both the server and the client or just the server. Depending on whether it is a +page.server.js or not.   
  
## The load function  
The page and page.server have the ability to export a reserved name function in sveltekit called the load function. The load function is typed, even if you're not in typescript you have to tell sveltekit which load function type you're trying to do with:  
```javascript  
/** @type {import('./$types').PageLoad} */  
```  
  
Whatever the load function returns will be available as information in a prop in the +page.svelte file in the route.   
  
### When to use server.js?  
If your load function is dealing with private details like environment variables or sensitive user information, it should always be a server.js file because otherwise that information is also based to the browser of the client. When you're doing a load function on page.server.js, you have to change the type to PageServerLoad:  
```javascript  
/** @type {import('./$types').PageServerLoad} */  
```  
  
So, server.js should be used when accessing data directly from a database or filesystem or its dealing with sensitive information  
  
  
### When to use universal (page.js)  
  
Page.js server load functions are good when accessing an external API that doesn't need private credentials - this will allow bypassing the sveltekit server and will allow accessing the API directly from the client.   
  
### So, what's the difference in load functions?  
Page.js and layout.js export universal load functions. Meaning that they are used on both the client and the server. Page.server.js is exported only on the server.  
  
## Accessing as prop in +page.svelte  
To access the information in the +page.svelte, you need to export a global variable called "data". Prop information is passed to this global variable. It's best to tell sveltekit that's what you're doing here too if you're in javascript:  
```javascript  
/** @type {import('./$types').PageData} */  
```  
  
## $page.data  
The page.svelte and its [Sveltekit, layout data](./Sveltekit,%20layout%20data.md) given above it, has access to its own data **plus all the data from its parents**. It's also used for accessing page information from a child prop in a layout parent.