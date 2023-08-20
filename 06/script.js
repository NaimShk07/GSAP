var tl = gsap.timeline();

function timer() {
   var num = 0;
   var time_int = setInterval(() => {
      num = num + parseInt(Math.random() * 10);
      document.querySelector("#loader h1").innerHTML = num + '%';

      if (num > 100) {
         num = 100;
         document.querySelector("#loader h1").innerHTML = num + '%';
         clearTimeout(time_int);

      }
   }, 150);

}
// timer();

tl.to("#loader h1", {
   duration:2,
   delay:1,
   onStart:timer()

});
tl.to("#loader", {
   // top:10,
   top: "-100vh",
   delay:1,
   duration: 1.5,

});

// gsap.to("#page1 h1",{
//    transform:'translateX(-55%)',
//    fontWeight:100,
//    scrollTrigger:{
//       trigger:"#page1",
//       scroller:"body",
//       markers:true,
//       start:'top 0%',
//       end:'top -200%',
//       scrub:3,
//       pin:true,
//    }
// })