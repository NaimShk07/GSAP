// gsap.from('#nav img,#nav ul,#nav button', {
//    y: -40,
//    duration: 1,
//    delay: .5,
//    opacity: 0,
//    stagger: .2,
// });

var tl = gsap.timeline();
tl.from('#nav img,#nav ul,#nav button', {
   y: -40,
   duration: .5,
   opacity: 0,
   stagger: .3,
   delay: 1,
});

tl.from('#main h1', {
   y: 100,
   opacity: 0,
   stagger: .3,
});
tl.from('#main > img', {
   scale: 0,
   opacity: 0,
   duration:.5,
   stagger: .3,
});

tl.from('#main h5',{
   scale:0,
   opacity:0,
})
tl.to('#main h5',{
   y:20,
   repeat:-1,
   yoyo:true,
   duration:.7,
})
