import React from 'react'
import {styled, keyframes} from 'styled-components'

const infiniteScroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-70%);
  } 
`;

const TitleContainer = styled.div `
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
`

const Title = styled.h4`
  display: inline-block;
  white-space: nowrap; /* Prevent line breaks */
  width:100%;
  animation: ${infiniteScroll} 10s linear infinite;
  font-family: ${props => props.theme.fonts.hero};
  font-size: ${props => props.size}em;
  color: ${props => props.color || props.theme.colors.primary};
  margin-right: 2rem;
`

const PageTitle = (props) => {
  return (
    <TitleContainer>
      <Title size={props.size} color={props.color}>{props.content}</Title>
      <Title size={props.size} color={props.color}>{props.content}</Title>
    </TitleContainer>
  )
}

export default PageTitle
