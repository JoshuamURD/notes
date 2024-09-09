---  
date: 2024-09-09  
tags:  
  - atomic  
topics:  
  - "[Sveltekit](Sveltekit.md)"  
  - "[Sveltekit, loading data](Sveltekit,%20loading%20data.md)"  
themes: []  
references:  
  - https://kit.svelte.dev/docs/load  
---  
Layout.svelte and layout.server.js operate the same way as [Sveltekit, page data](./Sveltekit,%20page%20data.md).  
  
The data returned in the load functions in layout files are available to all children routes - unless they have their own layout file within the route.   
  
Make sure layout isn't used for [Sveletekit, authorisation](./Sveletekit,%20authorisation.md)  
  
## Multiple load functions with same data key  
  
If there are multiple load functions which export the same accessible data key to a page.svelte file, the last one "wins".   
  
## Using parent data  
A load function will occasionally want to access data from a parent load function. This can be done with await parent():  
  
```javascript  
/** @type {import('./$types').LayoutLoad} */  
export function load() {	  
	return { a: 1 };  
}  
```  
  
To access this data being exported in a parent layout.js, we use the await parent:  
  
```javascript  
/** @type {import('./$types').LayoutLoad} */  
export async function load({ parent }) {	  
	const { a } = await parent();  
	return { b: a + 1 };}  
```