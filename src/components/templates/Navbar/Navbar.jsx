import { Link } from "gatsby";
import React, { useContext } from "react";
import styled, { keyframes, css } from "styled-components";
import Logo from './Logo';
import planet0 from '../../../assets/images/planet0.svg';
import planet1 from '../../../assets/images/planet1.svg';
import planet2 from '../../../assets/images/planet2.svg';
import planet3 from '../../../assets/images/planet3.svg';
import { NavBarContext } from '../../../context/NavBarContext'; // Import the context

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
  width: ${(props) => (props.$expanded ? '13rem' : '5rem')};
  background-color: ${(props) => props.theme.colors.primary};
  transition: width 0.3s ease-in-out;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 4px solid ${(props) => props.theme.colors.primaryLighter};
  position: fixed; 
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: auto;
  font-family: ${props => props.theme.fonts.main};
  font-size: .75rem;

  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    margin: 1rem 1rem;
    transition: all 0.5s ease-in-out;
    position: relative;
    transform-origin: left center;
    white-space: nowrap;
    display: flex;
    align-items: center;

    img {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }

    span {
      transition: all 0.3s ease-in-out;
      ${(props) =>
        props.$expanded
          ? css`
              opacity: 1;
              margin-left: 1rem;
            `
          : css`
              opacity: 0;
              margin-left: -2rem;
            `}
    }

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

export default function Navbar() {
  const { expanded, setExpanded } = useContext(NavBarContext); // Use the context

  return (
    <NavContainer
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      $expanded={expanded}
    >
      <Logo expanded={expanded} />
      <LinksContainer $expanded={expanded}>
        <Link className="clickable" to="/">
          <img src={planet0} alt="Planet 0" />
          <span>About me</span>
        </Link>
        <Link className="clickable" to="/gallery">
          <img src={planet1} alt="Planet 1" />
          <span>Art gallery</span>
        </Link>
        <Link className="clickable" to="/work">
          <img src={planet2} alt="Planet 2" />
          <span>Projects</span>
        </Link>
        <Link className="clickable" to="/resume">
          <img src={planet3} alt="Planet 3" />
          <span>Resume</span>
        </Link>
      </LinksContainer>
    </NavContainer>
  );
}