import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useTextReveal(refs) {
  const animations = useRef([]);

  useEffect(() => {
    const duration = 0.7;
    const animations = [];

    refs.current.forEach((element) => {
      const animation = gsap.to(element, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "center 70%",
          end: "center 30%",
          markers: true,
          onEnter: () => {
            gsap.to(element, {
              y: -50,
              duration,
              opacity: 1
            });
          },
          onLeave: () => {
            gsap.to(element, {
              y: -100,
              duration,
              opacity: 0
            });
          },
          onEnterBack: () => {
            gsap.to(element, {
              y: -50,
              duration,
              opacity: 1
            });
          },
          onLeaveBack: () => {
            gsap.to(element, {
              y: 0,
              duration,
              opacity: 0
            });
          }
        }
      });

      animations.push(animation);
    });

    animations.current = animations;

    return () => {
      animations.forEach((animation) => animation.scrollTrigger.kill());
    };
  }, [refs]);

  return animations;
}
