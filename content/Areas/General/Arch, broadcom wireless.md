---  
date: 2024-04-22  
tags:  
  - general-note  
themes:   
topics:  
  - "[arch linux](arch%20linux.md)"  
---  
I have a broadcom wireless card in my PC. Arch linux during installation can't detect it. In order to make it detect it, I need to remove some of the wireless modules and reload the wl module like so:  
``rmmod bcma b43 wl``  
Then reload the module:  
`modprobe wl`  
The wifi card should now show up using `ip a`  
  
