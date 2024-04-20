import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    z-index:1000000000000000;
    width: 100%;
    top: 0;
    left: 0; 
    padding:.5rem 0;
    color: #F3F3F3;
    background-color: #1A1A1A;

    a {
        color: #F3F3F3;
        text-decoration: none;
        margin: 0 1rem;
        transition: all 0.3s ease-in-out;

        &::hover{
            color: #F3F3F3;
            font-weight: bold;
            font-size: 1.2rem;
        }
    }

`

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`

export default function Navbar() {
    return (
        <NavContainer>
            <LinksContainer className="links">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
            </LinksContainer>
        </NavContainer>
    )
}