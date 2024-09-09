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
The load function has parameters that it can take in which are automatically populated by sveltekit:  
- **url** - an instance of URL which contains properties like orign, hostname, pathname, searchParams  
- **route** - contains the name of the current route directory relative to src/routes  
- **params** - derived from url.pathname and route.id 