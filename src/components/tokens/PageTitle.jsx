import React from 'react'
import {styled, keyframes} from 'styled-components'

const infiniteScroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-120%);
  }
`;

const Title = styled.h4`
  display: inline-block;
  white-space: nowrap;
  animation: ${infiniteScroll} 22s linear infinite;
  font-family: ${props => props.theme.fonts.hero}
  font-size: ${props => props.size}em;
  color: ${props => props.color || props.theme.colors.primary};
  margin-top: 1.1em;
  padding: 0;
`

const PageTitle = (props) => {
  return (
    <Title size={props.size} color={props.color}>{props.content}</Title>
  )
}

export default PageTitle
