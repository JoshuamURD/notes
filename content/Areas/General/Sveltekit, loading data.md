---  
tags:  
  - topic  
themes:  
  - "[Sveltekit](Sveltekit.md)"  
aliases:   
---  
  
# Related topics  
  
# Linking notes  
- [Sveltekit, page data](./Sveltekit,%20page%20data.md): #atomic made on 9:23 AM - September 09, 2024  
- [Sveltekit, layout data](./Sveltekit,%20layout%20data.md): #atomic made on September 09, 2024  
- [Sveltekit, fetch requests](./Sveltekit,%20fetch%20requests.md): #atomic made on September 09, 2024  
- [Sveltekit, cookies](./Sveltekit,%20cookies.md): #atomic made on September 09, 2024  
- [Sveltekit, context API](./Sveltekit,%20context%20API.md): #atomic made on September 09, 2024  
- [Sveltekit, URL data](./Sveltekit,%20URL%20data.md): #atomic made on September 09, 2024  
- [Sveletekit, authorisation](./Sveletekit,%20authorisation.md): #atomic made on September 09, 2024  
  
  
# When does a load function run?  
Server load functions always run on the server first. Universal load functions (A.K.A server.js files) will run on the server first during SSR and then subsequent navigation will be run on the client - however, the client will reuse fetch responses.  
  
# What can be returned in a load function?  
A load function can return an object containing any values.  
  
  
It can also return custom classes and component constructors.  
  
