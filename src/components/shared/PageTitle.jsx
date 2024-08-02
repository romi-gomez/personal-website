import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;
`;

const Title = styled.h4`
  display: block;
  white-space: nowrap; /* Prevent line breaks */
  text-align:center;
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

const PageTitle = (props) => {
  const { content, size } = props;
  const titleRef = useRef();
  const glitch1Ref = useRef();
  const glitch2Ref = useRef();

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
    const glitch1 = glitchEffect(glitch1Ref.current, (gsap.utils.random(.5, 1.5)));
    const glitch2 = glitchEffect(glitch2Ref.current, (gsap.utils.random(.5, 1.5)));

    const handleMouseEnter = () => {
      glitch1.play();
      glitch2.play();
    };

    const handleMouseLeave = () => {
      glitch1.pause();
      glitch2.pause();
      gsap.to([glitch1Ref.current, glitch2Ref.current], {
        duration: 0.2,
        skewX: 0,
        opacity: 1,
        x: 0,
        y: 0,
      });
    };

    const titleElement = titleRef.current;
    titleElement.addEventListener('mouseenter', handleMouseEnter);
    titleElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      titleElement.removeEventListener('mouseenter', handleMouseEnter);
      titleElement.removeEventListener('mouseleave', handleMouseLeave);
      glitch1.kill();
      glitch2.kill();
    };
  }, []);

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