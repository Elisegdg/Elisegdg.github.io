/* Javascript */

/* GSAP Greensock */
gsap.registerPlugin(ScrollTrigger);
// gsap.from('#personnage', {opacity: 0, duration: 1, scale: 0.7});

/* Header */

gsap.to('.header-text', {
  scrollTrigger: {
    trigger: '#about',
    scrub: true,
    toggleActions: 'play complete none reverse',
    start: '-20% top',
    end: '+=150 top',
  },
  color: '#F0EFEB',
  duration: 1
})

let menu = document.querySelector('.menu-wrap');
menu.addEventListener('click', function() {
  document.querySelector('.menu-open').classList.toggle('menu-active');
})

gsap.to('.bar', {
  scrollTrigger: {
    trigger: '#about',
    scrub: true,
    toggleActions: 'play complete none reverse',
    start: '-20% top',
    end: '+=150 top',
  },
  backgroundColor: '#F0EFEB',
  duration: 1
})

/* Home section */

gsap.from('#home-text', {opacity: 0, top: 20, duration: 1.5, stagger: 0.5});
gsap.from(
    '#home-img',
    {opacity: 0, scale: 0.7, duration: 0.9, ease: 'power4.out', delay: 0.6});



/* About Section */

gsap.to('body', {
  scrollTrigger: {
    trigger: '#about',
    scrub: true,
    toggleActions: 'play complete none reverse',
    start: 'top center',
    end: 'top top',
  },
  backgroundColor: '#383D4F',
  duration: 1
})


gsap.to('#cube1', {
  scrollTrigger: {
    trigger: '#cube1',
    start: 'top bottom',
    end: '-60% top',
    scrub: true,
    toggleActions: 'restart pause reverse pause',
  },
  x: 200,
  ease: 'none',
  duration: 1,

});

gsap.to('#cube2', {
  scrollTrigger: {
    trigger: '#cube2',
    start: 'top bottom',
    end: '-60% top',
    scrub: true,
    toggleActions: 'restart pause reverse pause',
  },
  x: -200,
  ease: 'none',
  duration: 1,

});

gsap.to('#cube3', {
  scrollTrigger: {
    trigger: '#cube3',
    start: 'top bottom',
    end: '-60% top',
    scrub: true,
    toggleActions: 'restart pause reverse pause',
  },
  x: 200,
  ease: 'none',
  duration: 1,

});

gsap.to('#about-text1', {
  scrollTrigger: {
    trigger: '#cube1',
    start: 'top bottom',
    end: '-60% top',
    scrub: true,
    toggleActions: 'restart pause reverse pause',
  },
  x: -100,
  opacity: 1,
  ease: 'none',
  duration: 2,

});

gsap.to('#about-text2', {
  scrollTrigger: {
    trigger: '#cube2',
    start: 'top bottom',
    end: '-60% top',
    scrub: true,
    toggleActions: 'restart pause reverse pause',
  },
  x: 100,
  opacity: 1,
  ease: 'none',
  duration: 2,

});

gsap.to('#about-text3', {
  scrollTrigger: {
    trigger: '#cube3',
    start: 'top bottom',
    end: '-60% top',
    scrub: true,
    toggleActions: 'restart pause reverse pause',
  },
  x: -100,
  opacity: 1,
  ease: 'none',
  duration: 2,

});



/* Works Section */


gsap.from('#works-title', {
  scrollTrigger: {
    trigger: '#works-title',
    start: '30% 30%',
    end: '+=1850',
    toggleActions: 'restart restart restart none',
    pin: true,
    pinSpacing: false,
  },
});

let thumbnails = gsap.utils.toArray('.thumbnail');

gsap.to(thumbnails, {
  xPercent: -100 * (thumbnails.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '#thumbnails-container',
    pin: true,
    scrub: 1,
    toggleActions: 'restart restart restart none',
    // base vertical scrolling on how wide the container is so it feels more
    // natural.
    start: 'top 30%',
    end: '+=1200',
  }
});



/* Skills Section */

gsap.from('#skills-title', {
  scrollTrigger: {
    trigger: '#skills-title',
    start: 'center center',
    end: '+=1000',
    toggleActions: 'restart restart restart none',
    pin: true,
    scrub: true,
    pinSpacing: false,
  },
  scale: 2
});

gsap.from('#skills-subtitle', {
  scrollTrigger: {
    trigger: '#skills-subtitle',
    start: 'center center',
    end: '+=2000',
    toggleActions: 'restart restart restart none',
    pin: true,
    pinSpacing: false,
  },
});

gsap.from('#gallery .skills-logo', {
  scrollTrigger: {
    trigger: '#gallery',
    start: 'center center',
    toggleActions: 'restart none none none',
    scrub: true,
    pin: true,
  },
  opacity: 0,
  yPercent: 50,
  rotate: 35,
  stagger: 0.3,
  ease: 'elastic'
});


/* Contact Section */


gsap.from('#contact-text', {
  scrollTrigger: {
    trigger: '#contact',
    start: '10% center',
    end: '35% center',
    scrub: true,
    toggleActions: 'play complete none reverse',
  },
  opacity: 0,
  scale: 2
})

gsap.from('.socials', {
  scrollTrigger: {
    trigger: '#contact',
    start: '10% center',
    end: '35% center',
    scrub: true,
    toggleActions: 'play complete none reverse',
  },
  opacity: 0,
})
