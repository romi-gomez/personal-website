import React, { useRef } from 'react';
import styled from 'styled-components';
import ImageFrame from '../shared/frame/ImageFrame';

const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  white-space: nowrap;

  /* Hide scrollbar */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

const FrameWrapper = styled.div`
  display: inline-block;
  height: 70%;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  z-index: 3000000;

  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(Button)`
  left: 1rem;
`;

const NextButton = styled(Button)`
  right: 1rem;
`;

const FramesGallery = ({ gallery, setFrameOpened }) => {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const displayFrames = (frames) => {
    return frames.map((frame, key) => (
      <FrameWrapper key={key}>
        <ImageFrame id={key} content={frame} setFrameOpened={setFrameOpened} imgSource="Artwork"/>
      </FrameWrapper>
    ));
  };

  return (
    <GalleryWrapper>
      <PrevButton onClick={scrollLeft}>←</PrevButton>
      <GalleryContainer ref={galleryRef}>
        {displayFrames(gallery)}
      </GalleryContainer>
      <NextButton onClick={scrollRight}>→</NextButton>
    </GalleryWrapper>
  );
};

export default FramesGallery;

