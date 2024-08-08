import React from 'react';
import styled from 'styled-components';
import { useMouseFollowing } from '../../../hooks/useMouseFollowing';
import FrameContainer from './FrameContainer';
import FramePreview from './FramePreview';
import { getArtworkImagePath, getProjectImagePath, getImagePath} from '../../../utils/pathHelper';

const FrameWrapper = styled.div`
  position: relative;
  min-width: 250px;
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

//format images src depending on data src
const getFormattedImageContent = (imgSource, content) => {

  switch (imgSource) {
    case 'Artwork':
      return {
        staticImage: getArtworkImagePath(content.staticImg), 
        animatedGif: getArtworkImagePath(content.animatedImg)
      }
      break;
    case 'Project':
      return {
        staticImage: getProjectImagePath(content.staticImg),
        animatedGif: getProjectImagePath(content.animatedImg)
      }
      break;
    default:
      return {
        staticImage: getImagePath(content.staticImg),
        animatedGif: getImagePath(content.animatedImg)
      }
      break;
  }
}

export default function Frame({ id, children, content, setFrameOpened, imgSource , ...props }) {
  const {
    frameRef,
    frameOnFocus,
    isFrameOnHover,
    mousePosition,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useMouseFollowing(20);

  const formattedImgContent = getFormattedImageContent(imgSource, content)

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
        staticImage={formattedImgContent.staticImage}
        animatedGif={formattedImgContent.animatedGif}
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