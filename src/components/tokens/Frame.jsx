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
  perspective: 1000px; /* Add perspective to the parent */

    &:hover{
        z-index:200000;
    }
`;

const FramePreview = styled.div.attrs(props => ({
  style: {
    visibility: props.$isframeonhover ? 'visible' : 'hidden',
    opacity: props.$isframeonhover ? 1 : 0,
  },
}))`
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  z-index: 10000;
  transform: translateZ(50px); /* Move forward in 3D space */
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  pointer-events: none; /* Ensure it doesn't interfere with mouse events */
  padding: 2rem;

  .previewGrid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }

  h2, h3, h4 {
    position: absolute;
    margin: 0;
    text-orientation: upright;
    color: white;
  }

  h2 {
    font-size: 2em;
    right: 2rem;
    top: 4rem;
  }

  h3 {
    font-size: 1em;
    left: 2rem;
    bottom: 3rem;
  }

  h4 {
    font-size: 7em;
    right: 0rem;
    bottom: 3rem;
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
  position: relative;
  width: 95%;
  height: 95%;
  border-radius: 5px;
  transition: all 0.05s ease-in;
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

const FrameInstructions = styled.p`
  position: absolute;
  top: 7rem;
  right: 2rem;
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

  const staticImage = require(`../../assets/images/gallery/${content.img}`).default;
  const animatedWebp = require(`../../assets/images/gallery/${content.animatedWebp}`).default;
  const animatedGif = require(`../../assets/images/gallery/${content.gif}`).default;

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
        <picture>
          {isFrameOnHover ? (
            <>
              <source type="image/webp" srcSet={animatedWebp} />
              <img src={animatedGif} alt={content.title} />
            </>
          ) : (
            <img src={staticImage} alt={content.title} />
          )}
        </picture>
      </FrameContainer>
      <FramePreview $isframeonhover={isFrameOnHover}>
        <h2>{content.title}</h2>
        <h3>{content.group}</h3>
        <h4>{content.tech}</h4>
        <img className="previewGrid" src={previewGrid} alt="preview grid" />
        <FrameInstructions $visibility={isFrameOnHover}>Click to see live</FrameInstructions>
      </FramePreview>
    </FrameWrapper>
  );
}