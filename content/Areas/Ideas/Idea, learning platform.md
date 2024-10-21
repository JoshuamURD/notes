---  
date: 2024-10-21  
tags:  
  - idea  
complete: false  
topics:  
  - "[Web development](Web%20development.md)"  
  - "[Astro js](Astro%20js.md)"  
  - "[CMS](CMS.md)"  
themes:   
---  
I want to build a learning platform that revolves around a CMS by having Astro fetch from a CMS and then use that information to populate course information. It should be easy. We could in the future have AI query it and be able to add content from analysing the site. In fact this could actually be used for sam's idea about life domains and research with that way. If a platform could have articles added to it by way of GET requests then it would be super easy to have a script attached to a folder pointed from someone's favourite markdown note taking app and have that script upload articles or interest points from that folder.   
  
Workflow would go like this:  
- someone selects a folder in their markdown that they want to be researched. They write articles or little mini entries that they want to know more about.  
- a python script on CRUD then sends a POST request to the Strapi API which uploads the new content to the Strapi app.  
- perodically, an AI is selecting a random note and then linking to it and doing research and finding articles and videos to dive deeper and expand on the topic. This has the potential to expand beyond learning and to assisting people in their life domains. What are they most interested in? Where is their time going? The AI could assist in even creating data visualisations with ChartJS to show topics accumulated etc. with the topics identified by AI (just to make it even more frictionless).   
- There will be another crud python script on a Digital Ocean sveltekit app that statically generates and serves the website. This would keep running costs down. Or could also hosted on go or astro. Whatever frontend we want as all it needs to do is be able to consume API calls. This would give potential to expand into mobile apps too.  
- The user would get notified of a site redeploy and of new content on the system. They would be able to view research and content created by other authors. We could also integrate a comment system too pretty easily with the CMS. Submission on the form could just do a post request to the API.  
- The Strapi server apparently can be easily deployed, and for free within limits, on the Railway App. a service like vercel but with much better costing at scale - so I've heard.  
