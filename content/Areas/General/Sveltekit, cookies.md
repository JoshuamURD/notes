---  
date: 2024-09-09  
tags:  
  - atomic  
topics:  
  - "[Sveltekit](Sveltekit.md)"  
  - "[Sveltekit, loading data](Sveltekit,%20loading%20data.md)"  
themes:   
references:  
  - https://kit.svelte.dev/docs/load  
---  
Server load functions can get and set cookies.  
  
```javascript  
export async function load({cookies}) {  
	const sessionid = cookies.get("sessionid");  
	return {  
	  user: await db.getUser(sessionid)	  
	}  
}  
```  
  
