import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #F3F3F3;
    background-color: #3A4276;
    z-index: 200;
`
const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    justify-content: right;
    padding: .5rem;

    p {
    }
`

export default function Navbar() {
    return (
        <FooterContainer>
            <FooterContent>
                <p>
                    
                </p>
            </FooterContent>
        </FooterContainer>
    )
}