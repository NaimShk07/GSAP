gsap.from('#page1 #box', {
   rotate: 360,
   duration: 1,
   delay:1,
   scale: 0,
});

//short method
// gsap.from('#page2 #box',{
//    rotate:360,
//    duration:1,
//    scale:0,
//    scrollTrigger:"#page2 #box",
// })

//main method
gsap.from('#page2 #box', {
   rotate: 360,
   duration: 1,
   scale: 0,
   scrollTrigger:{
      trigger:'#page2 #box',
      scroller:'body',
      markers:true,
      start:'top 100%',
      // end:'top 0%',
      scrub:1, // boolean or 1 to 5
   }
});