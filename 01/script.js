// gsap.to('#box',{
//    y:400,
//    x:500,
//    duration:1,
//    delay:1,
//    backgroundColor:"blue",
//    scale:.5,
//    rotate:360,
// })
// gsap.from('#box',{
//    y:400,
//    x:500,
//    duration:1,
//    delay:1,
//    backgroundColor:"blue",
//    scale:.5,
//    rotate:360,
// })

//############ multiple ############
// gsap.to(".box1",{
//    x:200,
//    duration:1,
//    backgroundColor:"blue",
//    delay:1,
// })
// gsap.to(".box2",{
//    x:200,
//    duration:1,
//    backgroundColor:"orange",
//    delay:2,
// })
// gsap.to(".box3",{
//    x:200,
//    duration:1,
//    backgroundColor:"salmon",
//    delay:3,
// })

//############ multiple but one by one ############
// Stagger
// Repeat
// yoyo

// gsap.to('#box',{
//    x:500,
//    duration:1,
//    delay:1,
//    stagger:.5,
//    repeat:1 ,//this will repeat one more time
//    // repeat: -1 // this will repeat infinite
//    yoyo:true, // initial to finall,final to initial

// })

//############ Timeline ############
// to decrease the complication of code, and run code one by one, synchronously 

// var tl = gsap.timeline();
// // tl=gsap
// tl.to('.box1', {
//    x: 300,
//    duration: 1,
// });
// tl.to('.box2', {
//    x: 400,
//    duration: 1,
// });
// tl.to('.box3', {
//    x: 500,
//    duration: 1,
// })


