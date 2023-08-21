function loco() {
   gsap.registerPlugin(ScrollTrigger);


   const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
   });
   locoScroll.on("scroll", ScrollTrigger.update);

   ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
   });




   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

   ScrollTrigger.refresh();


}
loco();

gsap.from('#page1 #box', {
   rotate: 360,
   duration: 1,
   delay: .5,
});
gsap.from('#page2 #box', {
   rotate: 360,
   duration: 1,
   scrollTrigger: {
      trigger: '#page2 #box',
      scroller: "#main",
      markers: true,
      start:'top 60%',
      end:'top 30%',
      scrub:2,
   }
});
gsap.from('#page3 #box', {
   rotate: 360,
   duration: 1,
   scrollTrigger: {
      trigger: '#page3 #box',
      scroller: "#main",
      markers: true,
      start:'top 60%',
      end:'top 30%',
      scrub:2,
   }
});
