import gsap from 'gsap';

export const fadeIn = () => {
  gsap.set('.fade-in', { opacity: 0, y: 50 });

  gsap.to('.fade-in', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.fade-in',
      start: 'top 80%',
    },
  });
  //   }
};
