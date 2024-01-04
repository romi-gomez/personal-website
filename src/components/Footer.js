import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    background: lightblue;
    width: 100%;
`

export default function Navbar() {
    return (
        <FooterContainer>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
        </FooterContainer>
    )
}