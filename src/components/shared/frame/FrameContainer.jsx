import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs(props => ({
  style: {
    transform: props.$frameOnFocus && props.$mousePosition && props.$isFrameOnHover
      ? `rotateX(${((props.$mousePosition.y - props.$frameOnFocus.frame.y - props.$frameOnFocus.frame.height / 2) / props.$constraint)}deg)
         rotateY(${((props.$mousePosition.x - props.$frameOnFocus.frame.x - props.$frameOnFocus.frame.width / 2) / props.$constraint)}deg)
         scale(1.15) translateZ(50px)`
      : 'rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)',
    cursor: props.$isFrameOnHover ? 'pointer' : 'default',
    background: props.$bgcolor,
    zIndex: props.$isFrameOnHover ? 10000 : 0,
    boxShadow: props.$isFrameOnHover ? '0 0 40px 0 rgba(0,0,0,0.5)' : '0px 0px 20px 0px rgba(0,0,0,0.3)',
  },
}))`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  background-color: #000;
  overflow: hidden;
  border-radius: 10px;
  backface-visibility: hidden;

  picture {
    width: 100%;
    height: 100%;
    display: block;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const FrameContainer = React.forwardRef(({ isFrameOnHover, frameOnFocus, mousePosition, constraint, bgcolor, staticImage, animatedGif, title }, ref) => (
  <Container
    ref={ref}
    $isFrameOnHover={isFrameOnHover}
    $frameOnFocus={frameOnFocus}
    $mousePosition={mousePosition}
    $constraint={constraint}
    $bgcolor={bgcolor}
  >
    <picture>
      {isFrameOnHover ? (
        <img src={animatedGif} alt={title} />
      ) : (
        <img src={staticImage} alt={title} />
      )}
    </picture>
  </Container>
));

export default FrameContainer;