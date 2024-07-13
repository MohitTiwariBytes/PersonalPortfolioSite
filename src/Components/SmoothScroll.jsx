import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      const scrollContainer = scrollContainerRef.current;
      const footer = footerRef.current;

      gsap.to(scrollContainer, {
        y: () =>
          -(scrollContainer.scrollHeight - document.documentElement.clientHeight),
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: scrollContainer,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.create({
        trigger: footer,
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () =>
          gsap.set(footer, { position: "fixed", bottom: 0, width: "100%" }),
        onLeaveBack: () => gsap.set(footer, { position: "relative" }),
      });

      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div ref={scrollContainerRef} style={{ position: "relative" }}>
      {React.Children.map(children, (child) => {
        if (child.type === 'Footer') {
          return React.cloneElement(child, { ref: footerRef });
        }
        return child;
      })}
    </div>
  );
};

export default SmoothScroll;
