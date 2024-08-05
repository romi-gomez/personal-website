import React from 'react'
import styled from 'styled-components'
import { useHover } from '../../context/HoverContext'

const PillContainer = styled.div`
    background-color: ${(props) => {
        switch (props.$background) {
            case 'primary':
                return props.theme.colors.primaryLight
                break;
            case 'highlight1':
              return props.theme.colors.highlight1
              break;
            case 'highlight2':
              return props.theme.colors.highlight2
              break;
            case 'highlight3':
              return props.theme.colors.highlight3
              break;
            default:
              return props.theme.colors.primaryDark
              break;
        }
        
    }};
    color: ${(props) => {
      switch (props.$color) {
        case 'light':
          return props.theme.colors.white
          break;
        case 'dark':
          return props.theme.colors.primaryDark
          break;
        default :
          return props.theme.colors.white
          break;
      }
    }};
    padding: .5em 1em;
    margin: .5rem;
    font-family: ${props => props.theme.fonts.main};
    font-weight: ${props => props.theme.fonts.weight.bold};
    font-size: 1em;
    border-radius: 2em;
    transition: all ease-in-out .5s;

    &:hover {
      padding: .5em 2em;
    }
`

const Pill = (props) => {
  return (
    <PillContainer  className="clickable" $color={props.color} $background={props.background}><p>{props.text}</p></PillContainer>
  )
}

export default Pill