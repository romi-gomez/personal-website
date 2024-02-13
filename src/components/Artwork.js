import React from 'react'
import styled from 'styled-components'
import Canvas from '../assets/artwork/RotateGrid'

const ArtworkContainer = styled.div`
    width: 100%;
    height: 100%;`


const Artwork = ({}) => {

  const selectArtworkToShow = () => {
    return (
      <Canvas />
    )
  }

  return (
    <ArtworkContainer>
        {selectArtworkToShow()}
    </ArtworkContainer>
  )
}

export default Artwork