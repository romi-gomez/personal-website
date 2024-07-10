
import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import icon from '../../assets/images/pointer-a.svg';
import iconHover from '../../assets/images/pointer-b.svg';

// Styled component for the mouse follower
const MouseFollowerContainer = styled.div`
  position: fixed;
  pointer-events: none; /* Ensure it doesn't interfere with mouse events */
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  z-index: 1000; /* Ensure it's on top of other elements */
  color: ${(props) => props.theme.colors.highlight3}; /* Set the color for the SVG fill */
`;

const Icon = styled.img`
  width: ${(props) => (props.hovered ? '64px' : '32px')}; /* Change size on hover */
  height: ${(props) => (props.hovered ? '64px' : '32px')}; /* Change size on hover */
  transition: width 0.3s ease, height 0.3s ease;
`;

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    const clickableElements = document.querySelectorAll('.clickable');
    clickableElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clickableElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <MouseFollowerContainer style={{ left: position.x, top: position.y }}>
      <Icon src={hovered ? iconHover : icon} alt="Mouse Follower Icon" hovered={hovered} />
    </MouseFollowerContainer>
  );
};

export default MouseFollower;