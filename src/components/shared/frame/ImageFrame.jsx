import React from 'react';
import styled from 'styled-components';
import { useMouseFollowing } from '../../../hooks/useMouseFollowing';
import FrameContainer from './FrameContainer';
import FramePreview from './FramePreview';
import { getArtworkImagePath } from '../../../utils/pathHelper';

const FrameWrapper = styled.div`
  position: relative;
  min-width: 250px;
  max-width: 270px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  perspective: 1000px; /* Add perspective to the parent */
  
  &:hover {
    z-index: 200000;
  }
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

  const staticImage = getArtworkImagePath(content.img);
  const animatedWebp = getArtworkImagePath(content.animatedWebp);
  const animatedGif = getArtworkImagePath(content.gif);

  const handleFrameClicked = () => {
    setFrameOpened(content);
  };

  return (
    <FrameWrapper
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleFrameClicked}
      className= "clickable"
    >
      <FrameContainer
        ref={frameRef}
        isFrameOnHover={isFrameOnHover}
        frameOnFocus={frameOnFocus}
        mousePosition={mousePosition}
        constraint={20}
        bgcolor={content.bgcolor}
        staticImage={staticImage}
        animatedWebp={animatedWebp}
        animatedGif={animatedGif}
        title={content.title}
      />
      <FramePreview
        isFrameOnHover={isFrameOnHover}
        title={content.title}
        group={content.group}
        tech={content.tech}
      />
    </FrameWrapper>
  );
}