import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
    z-index:1000000000000000;
    position:fixed;
    display: flex;
    justify-content: right;
    align-items: center;
    border-radius: 0 0 1em 1em;
    width: 90%;
    padding:.5rem 0;
    height: 128px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    a {
        color: ${props => props.theme.colors.white};
        text-align:center;
        min-width:100px;
        text-decoration: none;
        margin: 0 1rem;
        transition: all 0.3s ease-in-out;
        padding-bottom: 0.5em;
        transition: * ease-in-out- .5s;
        border-bottom:1px solid ${props => props.theme.colors.primary};

        &:hover{
            border-bottom:1px solid ${props => props.theme.colors.white};
            font-weight: ${props => props.theme.fonts.weight.bold};
        }
    }

`

const LinksContainer = styled.div`
    padding:2em;
    display: flex;
    justify-content: flex-end;
    width: 90%;
`

export default function Navbar() {
    return (
        <NavContainer>
            <LinksContainer className="links">
                <Link to="/">About me</Link>
                <Link to="/gallery"> Art gallery</Link>
                <Link to="/work">Projects</Link>
                <Link to="/resume">Resume</Link>
            </LinksContainer>
        </NavContainer>
    )
}