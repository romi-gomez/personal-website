import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    z-index:100;
    position: fixed;
    align-items: center;
    border-radius: 1em 1em 0 0; 
    bottom:0;
    width: 90%;
    height: 2em;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
    transition: all ease-in-out 1s;

    &:hover{
        height: 4em;
    }
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