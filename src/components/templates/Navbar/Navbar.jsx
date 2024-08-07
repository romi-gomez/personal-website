import { Link } from "gatsby";
import React from "react";
import styled, { keyframes, css } from "styled-components";
import Logo from './Logo'; // Importing the Logo component

const underlineAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const NavContainer = styled.nav`
  height: 100%;
  width: ${(props) => (props.$expanded ? '12rem' : '4rem')};
  background-color: ${(props) => props.theme.colors.primary};
  transition: width 0.3s ease-in-out;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid ${(props) => props.theme.colors.primaryLight};
  position: fixed; /* Make the navbar fixed */
  top: 0;
  left: 0;
  overflow: hidden; /* Ensure it doesn't scroll */
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: auto; /* Push the links to the bottom */

  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    margin: 1rem 0;
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: left center;
    white-space: nowrap;

    ${(props) =>
      props.$expanded
        ? css`
            margin-left: 2rem;
            opacity: 1;
          `
        : css`
            margin-left: -2rem;
            opacity: 0;
          `}

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0%;
      width: 0;
      height: 2px;
      background-color: ${(props) => props.theme.colors.white};
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      font-weight: ${(props) => props.theme.fonts.weight.bold};
      cursor: pointer;
    }

    &:hover::after {
      animation: ${underlineAnimation} 0.5s forwards;
    }
  }
`;

export default function Navbar({ expanded, onHoverChange }) {
  return (
    <NavContainer
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      $expanded={expanded} // Pass the expanded prop to styled component
    >
      <Logo expanded={expanded} />
      <LinksContainer $expanded={expanded}>
        <Link className="clickable" to="/">About me</Link>
        <Link className="clickable" to="/gallery">Art gallery</Link>
        <Link className="clickable" to="/work">Projects</Link>
        <Link className="clickable" to="/resume">Resume</Link>
      </LinksContainer>
    </NavContainer>
  );
}