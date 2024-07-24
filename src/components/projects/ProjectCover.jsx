import React from 'react'
import styled from 'styled-components'

const CoverContainer =  styled.div`
    width:100%;
    height: 65vh;
    background: ${props => props.theme.colors.primaryLighter};
    border-radius: 1rem;
    margin: .5rem 0;
`

const ProjectCover = (props) => {
  return (
    <CoverContainer>projectCover</CoverContainer>
  )
}


export default ProjectCover