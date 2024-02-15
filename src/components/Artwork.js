import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Grid from '../assets/artwork/Grid'
import JustSomeCircles from '../assets/artwork/JustSomeCircles'
import RotateGrid from '../assets/artwork/RotateGrid'
import SoundBlob from '../assets/artwork/SoundBlob'
import SoundMountains from '../assets/artwork/SoundMountains'


const ArtworkContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #1A1A1A ;
`

const ArtworkInstructions = styled.p`
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 1rem;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 15px;
    border-radius: 5px;
`


const Artwork = ({artwork}) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleArtworkClick = () => {
    setIsPlaying(!isPlaying)
  }

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
        <ArtworkInstructions $visibility={isPlaying}>Click on the canvas to play/pause</ArtworkInstructions>
        {selectArtworkToShow(artwork)}
    </ArtworkContainer>
  )
}

export default Artwork