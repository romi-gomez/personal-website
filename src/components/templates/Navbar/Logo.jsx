import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import logo from '../../../assets/images/logo.svg';

gsap.registerPlugin(MotionPathPlugin);

const LogoContainer = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  fill: ${(props) => props.theme.colors.primary};
  z-index: 100000000;
`;

const Logo = ({ expanded }) => {
  const logoRef = useRef(null);
  const timelineRef = useRef(gsap.timeline({ paused: true }));
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Define the animation sequence
      timelineRef.current
        .to(logoRef.current, {
          duration: 0.9,
          ease: "power1.inOut",
          motionPath: {
            path: [
              { x: 0, y: 0 }, // Start point
              { x: "25vw", y: "20vh" }, // Move downwards to create the parabolic effect
              { x: "50vw", y: "30vh" }, // Move to near-center horizontally
            ],
            curviness: 1.5,
            autoRotate: false,
          },
          scale: 2,
        })
        .to(logoRef.current, {
          duration: 1.2,
          x: "50vw", // Center horizontally
          y: "8vh", // Move to the top of the screen
          rotationZ: 10, // Swing slightly
          xPercent: -50,
          yPercent: -50,
          ease: "power2.inOut",
        })
        .to(logoRef.current, {
          rotationZ: 0, // Reset to straight up
          yoyo: true,
          repeat: -1,
          repeatRefresh: true, // Reset the values on each repeat cycle
          duration: gsap.utils.random(1, 2),
          ease: "power1.inOut",
        });

      // Play forward when expanded, reverse when not
      if (expanded) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    });

    return () => ctx.revert();
  }, [expanded]);

  return (
    <LogoContainer>
      <LogoImage ref={logoRef} src={logo} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;