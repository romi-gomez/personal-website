import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Preview = styled.div.attrs(props => ({
  style: {
    visibility: props.$isFrameOnHover ? 'visible' : 'hidden',
    opacity: props.$isFrameOnHover ? 1 : 0,
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
  overflow: hidden; /* Hide overflow */

  .previewGrid {
    position: absolute;
    top: 0px; /* Offset to hide the top border line */
    left: -1px; /* Offset to hide the left border line */
    width: calc(100% + 2px); /* Compensate for the offset */
    height: calc(100% + 2px); /* Compensate for the offset */
    background-size: 2rem 2rem;
    background-image: 
      linear-gradient(to right, ${props => props.theme.colors.primaryDark} 1px, transparent 1px),
      linear-gradient(to bottom, ${props => props.theme.colors.primaryDark} 1px, transparent 1px);
    opacity: 0.5;
  }

  .crosses {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .cross {
    position: absolute;
    width: 3px;
    height: 3px;
    background: ${props => props.theme.colors.primaryDark};
    transform: translate(-50%, -50%); /* Center the cross */
  }

  .cross::before, .cross::after {
    content: '';
    position: absolute;
    background: ${props => props.theme.colors.primaryDark};
  }

  .cross::before {
    width: .5rem; /* Adjust the length of the cross arms */
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .cross::after {
    width: 2px;
    height: .5rem; /* Adjust the length of the cross arms */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h2, h3, h4 {
    position: absolute;
    margin: 0;
    color: ${props => props.theme.colors.primaryDark};
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
  color: ${props => props.theme.colors.primaryDark};
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
  border-radius: 5px;
`;

const generateCrosses = () => {
  const crosses = [];
  for (let y = 1; y <= 100; y += 3) {
    for (let x = 1; x <= 100; x += 3) {
      crosses.push(
        <div
          key={`${x}-${y}`}
          className="cross"
          style={{
            top: `${y * 2}rem`,
            left: `${x * 2}rem`,
          }}
        />
      );
    }
  }
  return crosses;
};

const FramePreview = ({ isFrameOnHover, title, group, tech }) => {
  const crossesRef = useRef([]);

  useEffect(() => {
    if (isFrameOnHover) {
      crossesRef.current.forEach((cross, index) => {
        gsap.to(cross, {
          opacity: 0,
          duration: 0.3,
          repeat: -1,
          yoyo: true,
          delay: index * 0.05,
          ease: 'power1.inOut',
        });
      });
    } else {
      gsap.killTweensOf(crossesRef.current);
      gsap.to(crossesRef.current, { opacity: 1, duration: 0.3 });
    }
  }, [isFrameOnHover]);

  return (
    <Preview $isFrameOnHover={isFrameOnHover}>
      <h2>{title}</h2>
      <h3>{group}</h3>
      <h4>{tech}</h4>
      <div className="previewGrid"></div>
      <div className="crosses">
        {generateCrosses().map((cross, index) => (
          <div
            key={index}
            ref={(el) => (crossesRef.current[index] = el)}
            className="cross"
            style={cross.props.style}
          />
        ))}
      </div>
      <FrameInstructions>Click to see live</FrameInstructions>
    </Preview>
  );
};

export default FramePreview;