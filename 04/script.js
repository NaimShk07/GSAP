var tl = gsap.timeline();

tl.from('#nav', {
   opacity: 0,
   delay: .3,
});
tl.from('#nav h1,#nav li,#nav-right', {
   y: -50,
   opacity: 0,
   duration: .3,
   stagger: .2,
});
tl.from('#main h1', {
   x: -200,
   opacity: 0,
   duration: .5,
   stagger: .3,
});
tl.from('#main-right img', {
   scale: 1.5,
   opacity: 0,
});

gsap.from('#page2 #p2-box', {
   // scale: .5,
   y: 200,
   opacity: 0,
   duration: 1,
   stagger: .2,
   scrollTrigger: {
      trigger: "#page2 #p2-box",
      scroller: 'body',
      start: 'top 60%'
   }
})


