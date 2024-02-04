import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
    position: fixed;
    z-index:10000;
    background: pink;
    width: 100%;
`

export default function Navbar() {
    return (
        <NavContainer>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
        </NavContainer>
    )
}