import React from 'react'
import styled from 'styled-components'
import Grid from '../assets/artwork/Grid'
import JustTwoCircles from '../assets/artwork/JustTwoCircles'
import Points from '../assets/artwork/Points'
import RotateGrid from '../assets/artwork/RotateGrid'
import SoundBlob from '../assets/artwork/SoundBlob'
import SoundMountains from '../assets/artwork/SoundMountains'
import SoundWave from '../assets/artwork/SoundWave'


const ArtworkContainer = styled.div`
    width: 100%;
    height: 100%;`


const Artwork = ({artwork}) => {

  const selectArtworkToShow = (artwork) => {
    switch (artwork.title) {
      case 'Grid':
        return <Grid />
      case 'JustTwoCircles':
        return <JustTwoCircles />
      case 'Points':
        return <Points />
      case 'RotateGrid':
        return <RotateGrid />
      case 'SoundBlob':
        return <SoundBlob />
      case 'SoundMountains':
        return <SoundMountains />
      case 'SoundWave':
        return <SoundWave />
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