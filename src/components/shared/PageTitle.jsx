import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { NavBarContext } from '../../context/NavBarContext';

const TitleContainer = styled.div`
  display: flex;
  justify-content: left;
  position: relative;
  width: 100%;
  z-index: 1;
`;

const Title = styled.h4`
  display: block;
  white-space: nowrap; /* Prevent line breaks */
  text-align:left;
  font-family: ${(props) => props.theme.fonts.hero};
  font-size: ${(props) => props.size}em;
  color: ${(props) => props.theme.colors.primary};
  z-index: 100;
`;

const GlitchWrapper = styled.div`
  position: relative;
  display: flex;
  &:hover .glitch {
    animation: none; /* Disable CSS animations on hover */
  }
`;

const GlitchText = styled(Title)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: black;

  &.first {
    color: ${(props) => props.theme.colors.highlight1 || 'black'};
    z-index: 99;
  }

  &.second {
    color: ${(props) => props.theme.colors.highlight2 || 'black'};
    z-index: 98;
  }
`;

const PageTitle = ({ content, size }) => {
  const titleRef = useRef();
  const glitch1Ref = useRef();
  const glitch2Ref = useRef();

  const { expanded } = useContext(NavBarContext); // Use the expanded state from NavBarContext

  const glitchEffect = (element, duration) => {
    return gsap.timeline({ paused: true, repeat: -1, repeatRefresh: true })
      .to(element, { duration: 0.1, skewX: () => gsap.utils.random(50, 90), ease: "power4.inOut" })
      .to(element, { duration: 0.1, skewX: 0, ease: "power4.inOut" })
      .to(element, { duration: 0.1, opacity: 0 })
      .to(element, { duration: 0.1, opacity: 1 })
      .to(element, { duration: 0.1, x: () => gsap.utils.random(-30, 30) })
      .to(element, { duration: 0.1, x: 0 })
      .to(element, { duration: 0.1, y: () => gsap.utils.random(-30, 30) })
      .to(element, { duration: 0.1, y: 0 });
  };

  useEffect(() => {
    gsap.set(titleRef.current, { visibility: 'visible' });
    const glitch1 = glitchEffect(glitch1Ref.current);
    const glitch2 = glitchEffect(glitch2Ref.current);

    // Trigger the glitch animation when navbar is expanded
    if (expanded) {
      glitch1.play();
      glitch2.play();
    } else {
      glitch1.pause();
      glitch2.pause();
      gsap.to([glitch1Ref.current, glitch2Ref.current], {
        duration: 0.2,
        skewX: 0,
        opacity: 1,
        x: 0,
        y: 0,
      });
    }

    return () => {
      glitch1.kill();
      glitch2.kill();
    };
  }, [expanded]); // Add expanded as a dependency

  return (
    <TitleContainer>
      <GlitchWrapper>
        <Title ref={titleRef} size={size}>
          {content}
        </Title>
        <GlitchText ref={glitch1Ref} size={size} className="first glitch">
          {content}
        </GlitchText>
        <GlitchText ref={glitch2Ref} size={size} className="second glitch2">
          {content}
        </GlitchText>
      </GlitchWrapper>
    </TitleContainer>
  );
};

export default PageTitle;