import React from 'react'
import styled from 'styled-components'
import Grid from '../assets/artwork/Grid'
import JustSomeCircles from '../assets/artwork/JustSomeCircles'
import RotateGrid from '../assets/artwork/RotateGrid'
import SoundBlob from '../assets/artwork/SoundBlob'
import SoundMountains from '../assets/artwork/SoundMountains'


const ArtworkContainer = styled.div`
    width: 100%;
    height: 100%;`


const Artwork = ({artwork}) => {

  const selectArtworkToShow = (artwork) => {
    switch (artwork.title) {
      case 'Grid':
        return <Grid />
      case 'SomeCircles':
        return <JustSomeCircles />
      case 'Mandala':
        return <RotateGrid />
      case 'Blob':
        return <SoundBlob />
      case 'Mountains':
        return <SoundMountains />
      default:
        return <Grid />
    }
  }

  return (
    <ArtworkContainer>
        {selectArtworkToShow(artwork)}
    </ArtworkContainer>
  )
}

export default Artwork