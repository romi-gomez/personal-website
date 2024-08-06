import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import logo from '../../../assets/images/logo.svg';

const LogoContainer = styled.div`
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  position: relative; /* Needed for absolute positioning of the image */
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  fill: ${(props) => props.theme.colors.primary};
`;

const Logo = ({ expanded }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(logoRef.current, {
        y: expanded ? -20 : 0,
        x: expanded ? 20 : 0,
        z: expanded ? 50 : 0,
        rotationY: expanded ? 360 : 0,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, [expanded]);

  return (
    <LogoContainer ref={logoRef}>
      <LogoImage src={logo} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;