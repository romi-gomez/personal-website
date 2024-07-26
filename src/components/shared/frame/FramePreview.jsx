import React from 'react';
import styled from 'styled-components';
import previewGrid from '../../../assets/artwork/thumbnails/previewGridPortrait.svg';

const Preview = styled.div.attrs(props => ({
  style: {
    visibility: props.isFrameOnHover ? 'visible' : 'hidden',
    opacity: props.isFrameOnHover ? 1 : 0,
  },
}))`
  position: absolute;
  top: -12.5%;
  left: -12.5%;
  width: 125%;
  height: 125%;
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
    top: 3rem;
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

const FrameInstructions = styled.p`
  position: absolute;
  top: 6rem;
  right: 2rem;
  font-size: 0.7rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
  border-radius: 5px;
`;

const FramePreview = ({ isFrameOnHover, title, group, tech }) => (
  <Preview isFrameOnHover={isFrameOnHover}>
    <h2>{title}</h2>
    <h3>{group}</h3>
    <h4>{tech}</h4>
    <img className="previewGrid" src={previewGrid} alt="preview grid" />
    <FrameInstructions>Click to see live</FrameInstructions>
  </Preview>
);

export default FramePreview;