---  
date: 2024-09-09  
tags:  
  - atomic  
topics:  
  - "[Sveltekit](Sveltekit.md)"  
  - "[Sveltekit, loading data](Sveltekit,%20loading%20data.md)"  
  - "[Sveltekit, layout data](Sveltekit,%20layout%20data.md)"  
themes:   
references:   
---  
# Don't authorise in layout  
Layout load functions do not run on every request, they run once during SSR and once per request on the client. This means it won't rerun until SSR is triggered again or there's a hard reload from the client. This means authorisation checking should not be done within layout pages.  
  
## Can do it with ContextAPI  
You could deal with stores for authentication data in the layout.server.js if you use [Sveltekit, context API](./Sveltekit,%20context%20API.md). Context API lets you create a store in a layout that is autosubscribed to and then updated in the context file tree for access by child components.  
  
```javascript  
import { setContext } from 'svelte';  
import { writable } from 'svelte/store';  
  
export let data;  
const user = writable();  
$: user.set(data.user);  
  
// add it to context  
setContext('user', user);  
```  
  
Now it can be accessed in child +page.svelte files like so:  
  
```javascript  
import { getContext} from 'svelte';  
  
const user = getContext('user');  
  
<p>Welcome {$user.name})</p>  
```  
  
  
This is only required when there is server side rendering on the svelekit app because the server state is shared across other clients as there is no way to make a state on the server unique to each client. The client's have state saved in their browser.   
  
# Why can $page.data be used?  
Sveltekit pre-defined stores are automatically using the context API.  
  
The 