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
Fetch requests work as they do in native javascript, except svelete provides a few additional features:  
- fetch requests now inherit a cookie and authorization headesr for the page request. This allows for credentialed fetch requests to the server or API provider.  
- Internal requests go directly to the server.js handler function rather than making an actual HTTP call. This is to help reduce overhead.  
  