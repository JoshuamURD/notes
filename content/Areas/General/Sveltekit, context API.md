---  
date: 2024-09-09  
tags:  
  - atomic  
topics:  
  - "[Sveltekit](Sveltekit.md)"  
  - "[Sveltekit, loading data](Sveltekit,%20loading%20data.md)"  
themes:   
references:   
---  
The context API is by default used for all pre-defined stores in sveltekit such as the $page.data.  
  
It provides a mechanism for components to 'talk' to each other without passing around data and functions as props or dispatching events.  
<br/>  
A store can be attached to the component tree with setContext and when you subscribe you receive it with getContext.