import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Import your new icons
import iconDefault from '../../assets/images/noun-faceless-alien-light.svg';
import iconHover from '../../assets/images/noun-laugh-alien-light.svg';
import iconClick from '../../assets/images/noun-lovely-alien-light.svg';

// Styled component for the mouse follower
const MouseFollowerContainer = styled.div`
  position: fixed;
  pointer-events: none; /* Ensure it doesn't interfere with mouse events */
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  z-index: 1000000; /* Ensure it's on top of other elements */
  color: ${(props) => props.theme.colors.highlight3}; /* Set the color for the SVG fill */
`;

const Icon = styled.img`
  width: ${(props) => {
    if (props.$clicked) return '4rem'; // Size on click
    if (props.$hovered) return '3rem'; // Size on hover
    return '2rem'; // Default size
  }};
  height: ${(props) => {
    if (props.$clicked) return '4rem'; // Size on click
    if (props.$hovered) return '3rem'; // Size on hover
    return '2rem'; // Default size
  }};
  transition: width 0.3s ease, height 0.3s ease;

    svg {
     fill:   ${(props) => props.theme.colors.highlight3}; /* Set the color for the SVG fill */
    }
`;

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [icon, setIcon] = useState(iconDefault);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    setHovered(true);
    setIcon(iconHover);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setIcon(iconDefault);
  };

  const handleMouseClick = () => {
    setClicked(true);
    setIcon(iconClick);
    setTimeout(() => {
      setClicked(false);
      setIcon(hovered ? iconHover : iconDefault);
    }, 500); // Reset to hover or default icon after 500ms
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseClick);

    const clickableElements = document.querySelectorAll('.clickable');
    clickableElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseClick);
      clickableElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [hovered]);

  return (
    <MouseFollowerContainer style={{ left: `calc(${position.x}px - 1rem)`, top: `calc(${position.y}px - 1rem)` }}>
      <Icon src={icon} alt="Mouse Follower Icon" $hovered={hovered} $clicked={clicked} />
    </MouseFollowerContainer>
  );
};

export default MouseFollower;