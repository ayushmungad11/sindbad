
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.timeline().to('#p1', {

  strokeDashoffset: '0px',
  
  scrollTrigger: {
    trigger: '.services',
    start: 'top-=200px',
    end: 'top+=200px',
    scrub: 1,

  },

}).to('#p2' , {
  strokeDashoffset: '0px',
  scrollTrigger: {
    trigger: '#p1',
    start: 'bottom-=50%',
    end: 'bottom+=30px',
    scrub: 1,

  },
}).to('#p3' , {
  strokeDashoffset: '0px',
  scrollTrigger: {
    trigger: '#p2',
    start: 'bottom-=100px',
    end: 'bottom+=50px',
    scrub: 1,
  
  },
})
.to('#p4' , {
  strokeDashoffset: '0px',
  scrollTrigger: {
    trigger: '#p3',
    start: 'bottom-=300px',
    end: 'bottom+=250px',
    scrub: 1,
  },
}).to('#p5', {
  strokeDashoffset: '0px',
  scrollTrigger: {
    trigger: '#p4',
    start: 'bottom-=50%',
    end: 'bottom+=20%',
    scrub: 1,

  },
}).to('#p6', {
  strokeDashoffset: '0px',
  scrollTrigger: {
    trigger: '#p5',
    start: 'bottom-=50%',
    end: 'bottom+=20%',
    scrub: 1,

  },
}).to('#p7', {
  strokeDashoffset: '0px',
  scrollTrigger: {
    trigger: '#p6',
    start: 'bottom-=50%',
    end: 'bottom+=20%',
    scrub: 1,

  },
})

// services page

ScrollTrigger.create({
  trigger: '.pin-wrapper',
  pin: '.left-process-content',
  start: 'top top',
  end:'bottom bottom',
  // markers: true
})
