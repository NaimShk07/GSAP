1. Scroll trigger is a plugin of gsap and a small part of gsap library, we use when we want to do animation on scroll
2. CDN - put this cdn below gsap cdn

````
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>```
````

3. scrollTrigger
   - trigger // to which element you want to trigger
   - scroller // where scroll is happening body or #main
   - markers // to get idea of where animation is starting or ending
   - start // from where it starting
   - end // from where it ending
   - scrub // your animation will work on the basis of scroll
