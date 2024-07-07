import React from 'react'
import styled from 'styled-components'

const PillContainer = styled.div`
    background-color: ${(props) => {
        switch (props.background) {
            case 'primary':
                return props.theme.colors.primary
                break;
        
            default:
                return props.theme.colors.primaryDark
                break;
        }
        
    }};
    padding: .5em 1em;
    font-family: ${props => props.theme.fonts.main};
    font-weight: ${props => props.theme.fonts.weight.bold};
    font-size: 1em;
    border-radius: 2em;
`

const Pill = (props) => {
  return (
    <PillContainer background={props.background}><p>{props.text}</p></PillContainer>
  )
}

export default Pill