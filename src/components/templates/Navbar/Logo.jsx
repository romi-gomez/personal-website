import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { NavBarContext } from '../../../context/NavBarContext'; // Import the context
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

const Logo = () => {
  const { expanded } = useContext(NavBarContext); // Access expanded from context
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
              { x: 0, y: 0 },
              { x: "25vw", y: "20vh" },
              { x: "50vw", y: "30vh" },
            ],
            curviness: 1.5,
            autoRotate: false,
          },
          scale: 2,
        })
        .to(logoRef.current, {
          duration: 1.2,
          x: "50vw",
          y: "8vh",
          rotationZ: 10,
          xPercent: -50,
          yPercent: -50,
          ease: "power2.inOut",
        })
        .to(logoRef.current, {
          rotationZ: 0,
          yoyo: true,
          repeat: -1,
          repeatRefresh: true,
          duration: gsap.utils.random(1, 2),
          ease: "power1.inOut",
        });

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