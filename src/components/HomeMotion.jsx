import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HomeMotion({ children }) {
  const scope = useRef(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-hero-reveal]', {
        opacity: 0,
        y: 32,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
            once: true,
          },
        });
      });

      gsap.utils.toArray('[data-media-reveal]').forEach((element) => {
        gsap.fromTo(element,
          { scale: 0.94, opacity: 0.72 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              end: 'bottom 55%',
              scrub: 0.8,
            },
          });
      });

      gsap.utils.toArray('.process-step').forEach((step) => {
        gsap.from(step, {
          opacity: 0.25,
          x: 24,
          scrollTrigger: {
            trigger: step,
            start: 'top 78%',
            end: 'top 48%',
            scrub: true,
          },
        });
      });
    });

    return () => media.revert();
  }, { scope });

  return <div className="home-page" ref={scope}>{children}</div>;
}
