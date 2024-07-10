import React from 'react';
import styled from 'styled-components';
import { useMouseFollowing } from '../../hooks/useMouseFollowing'; // Import the custom hook
import previewGrid from '../../assets/images/gallery/previewGridPortrait.svg';

const FrameWrapper = styled.div`
  position: relative;
  min-width: 250px;
  max-width: 270px;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FramePreview = styled.div.attrs(props => ({
  style: {
    visibility: props.$isframeonhover ? 'visible' : 'hidden',
    opacity: props.$isframeonhover ? 1 : 0,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  color: white;
  transition: all 0.3s ease-in-out;

  .previewGrid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateZ(300px) scale(1.05);
    opacity: 0.5;
  }

  h2 {
    position: absolute;
    font-size: 2em;
    margin: 0;
    right: 10px;
    top: 10px;
    text-orientation: upright;
  }

  h3 {
    position: absolute;
    font-size: 1em;
    margin: 0;
    left: 10px;
    bottom: 10px;
    text-orientation: upright;
  }

  h4 {
    position: absolute;
    font-size: 7em;
    margin: 0;
    right: -50px;
    bottom: 10px;
    text-orientation: upright;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
`;

const FrameContainer = styled.div.attrs(props => ({
  style: {
    transform: props.$frameonfocus && props.$mouseposition && props.$isframeonhover
      ? 'rotateX(' +
        ((props.$mouseposition.y - props.$frameonfocus.frame.y - props.$frameonfocus.frame.height / 2) / props.$constraint) +
        'deg) ' +
        'rotateY(' +
        ((props.$mouseposition.x - props.$frameonfocus.frame.x - props.$frameonfocus.frame.width / 2) / props.$constraint) +
        'deg) ' +
        'scale(1.15) translateZ(50px)'
      : '',
    cursor: props.$isframeonhover ? 'pointer' : 'default',
    background: props.$bgcolor,
    zIndex: props.$isframeonhover ? 10000 : 0,
    boxShadow: props.$isframeonhover ? '0 0 40px 0 rgba(0,0,0,0.5)' : '0px 0px 20px 0px rgba(0,0,0,0.3)',
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  height: 95%;
  border-radius: 5px;
  transition: all 0.05s ease-in;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FrameInstructions = styled.p`
  position: absolute;
  top: 12%;
  right: 10px;
  font-size: 0.7rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
  border-radius: 5px;
`;

export default function Frame({ id, children, content, setFrameOpened, ...props }) {
  const {
    frameRef,
    frameOnFocus,
    isFrameOnHover,
    mousePosition,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useMouseFollowing(20);

  const staticImage = require(`../../assets/images/gallery/${content.staticWebp}`).default;
  const animatedImage = require(`../../assets/images/gallery/${content.animatedWebp}`).default;

  const handleFrameClicked = () => {
    setFrameOpened(content);
  };

  return (
    <FrameWrapper
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleFrameClicked}
    >
      <FrameContainer
        ref={frameRef}
        $isframeonhover={isFrameOnHover}
        $frameonfocus={frameOnFocus}
        $mouseposition={mousePosition}
        $constraint={20}
        $bgcolor={content.bgcolor}
      >
        <FramePreview $isframeonhover={isFrameOnHover}>
          <h2>{content.title}</h2>
          <h3>{content.group}</h3>
          <h4>{content.tech}</h4>
          <img className="previewGrid" src={previewGrid} alt="preview grid" />
          <FrameInstructions $visibility={isFrameOnHover}>Click to see live</FrameInstructions>
        </FramePreview>
        <img src={isFrameOnHover ? animatedImage : staticImage} alt={content.title} />
      </FrameContainer>
    </FrameWrapper>
  );
}