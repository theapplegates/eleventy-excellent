---
title: 'Some Image Testing'
description: 'Some Cloudinary magic. Images optimized with just a url . '
date: 2024-08-03
---
Below is some test images.

## Setting

Humanity has colonized the solar system—Mars, the Moon, the Asteroid Belt and beyond—but the stars are still out of our reach.

Jim Holden is XO of an ice miner making runs from the rings of Saturn to the mining stations of the Belt. When he and his crew stumble upon a derelict ship, the Scopuli, they find themselves in possession of a secret they never wanted. A secret that someone is willing to kill for—and kill on a scale unfathomable to Jim and his crew. War is brewing in the system unless he can find out who left the ship and why.

Detective Miller is looking for a girl. One girl in a system of billions, but her parents have money and money talks. When the trail leads him to the Scopuli and rebel sympathizer Holden, he realizes that this girl may be the key to everything.

Holden and Miller must thread the needle between the Earth government, the Outer Planet revolutionaries, and secretive corporations—and the odds are against them. But out in the Belt, the rules are different, and one small ship can change the fate of the universe.[^1]

<img data-src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_auto/dpr_auto,f_auto,q_auto/kateryna-hliznitsovaStreet_okzmrl.jpg" class="cld-responsive">

<img data-src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_auto/dpr_auto,f_auto,q_auto/hillshire-farm-2_fx2mno.jpg" class="cld-responsive">

Below are the same images, but not using 3 step [method](https://cloudinary.com/documentation/responsive_client_side_js#step_1_include_the_cloudinary_javascript_library)
Instead cloudinary sets default breakpoints, like so, ``` w_auto:breakpoints_200_1920_30_15 ```
So by only using a url, a responsive image is generated. 
```js
<img src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit/dpr_auto/f_auto,q_auto/w_auto:breakpoints_200_1920_30_15/hillshire-farm-2_fx2mno.jpg" alt="A yummy sammy">
```
<img src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit/dpr_auto/f_auto,q_auto/w_auto:breakpoints_200_1920_30_15/hillshire-farm-2_fx2mno.jpg" alt="A yummy sammy">

<img src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit/dpr_auto/f_auto,q_auto/w_auto:breakpoints_200_1920_30_15/kateryna-hliznitsovaStreet_okzmrl.jpg" alt="An quaint street">