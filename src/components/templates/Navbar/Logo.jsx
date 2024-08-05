import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../../assets/images/logo.svg';

const hoverAnimation = keyframes`
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.2) rotate(360deg);
  }
`;

const LogoContainer = styled.div`
  width: 4rem;
  height: 4rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.theme.colors.primary};
    transition: transform 0.5s ease-in-out;

    &:hover {
      animation: ${hoverAnimation} 1s infinite;
    }
  }
`;

const Logo = () => (
  <LogoContainer>
    <img src={logo} alt="Logo" />
  </LogoContainer>
);

export default Logo;