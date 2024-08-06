import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useParallax = (ref) => {
  useEffect(() => {
    const element = ref.current;

    gsap.to(element, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom', // When the top of the element hits the bottom of the viewport
        end: 'bottom top',   // When the bottom of the element hits the top of the viewport
        scrub: true,
      }
    });
  }, [ref]);
};

export default useParallax;