import React, { useRef } from 'react';
import styled from 'styled-components';
import useParallax from './useParallax';

const ParallaxContainer = styled.div`
  perspective: 1000px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const ParallaxContent = styled.div`
  transform-style: preserve-3d;
`;

const ParallaxWrapper = ({ children }) => {
  const parallaxRef = useRef(null);
  useParallax(parallaxRef);

  return (
    <ParallaxContainer ref={parallaxRef}>
      <ParallaxContent>
        {children}
      </ParallaxContent>
    </ParallaxContainer>
  );
};

export default ParallaxWrapper;