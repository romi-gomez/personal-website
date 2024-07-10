import { Link } from "gatsby";
import React from "react";
import styled, { keyframes } from "styled-components";

const underlineAnimation = keyframes`
  from {
    width: 0;
    left: 50%;
  }
  to {
    width: 100%;
    left: 0;
  }
`;

const NavContainer = styled.nav`
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: right;
  align-items: center;
  border-radius: 0 0 1em 1em;
  width: 90%;
  padding: 0.5rem 0;
  height: 128px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;

const LinksContainer = styled.div`
  padding: 2em;
  display: flex;
  justify-content: flex-end;
  width: 90%;

  a {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    min-width: 100px;
    text-decoration: none;
    margin: 0 1rem;
    transition: all 0.3s ease-in-out;
    padding-bottom: 0.5em;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px; /* Adjust the thickness of the underline */
      background-color: ${(props) => props.theme.colors.white};
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      animation: ${underlineAnimation} 0.5s forwards;
    }

    &:hover {
      font-weight: ${(props) => props.theme.fonts.weight.bold};
      cursor: none;
    }
  }
`;

export default function Navbar() {
    return (
        <NavContainer>
            <LinksContainer className="links">
                <Link className="clickable" to="/">About me</Link>
                <Link className="clickable" to="/gallery"> Art gallery</Link>
                <Link className="clickable" to="/work">Projects</Link>
                <Link className="clickable" to="/resume">Resume</Link>
            </LinksContainer>
        </NavContainer>
    )
}