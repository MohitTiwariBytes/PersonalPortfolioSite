import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    gsap.to(scrollContainer, {
      y: () => -(scrollContainer.scrollHeight - document.documentElement.clientHeight),
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: scrollContainer,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    return () => {
      // Remove any event listeners or cleanup code if needed
    };
  }, []);

  return (
    <div ref={scrollContainerRef} style={{ overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScroll;
