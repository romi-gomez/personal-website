import React, { useEffect } from 'react'
import styled from 'styled-components'
import Artwork from './Artwork'

const Overlay = styled.div.attrs(props => ({
    style: {
        visibility: props.$frameOpened ? "visible" : "hidden",
      },
    }))`
    position: fixed;
    width:100%;
    height:100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    z-index: 20000000;
  `

  const ArtworkWrapper = styled.div`
    position: absolute;
    width: 80vw;
    height: 80vh;
    top: 10vh;
    left: 10vw;
    background: white;
  `

  const CloseOverlayButton = styled.div.attrs(props => ({
    style: {
        visibility: props.$frameOpened ? "visible" : "hidden",
      },
    }))`
    position: fixed;
    width: 30px;
    height: 30px;
    top: 10%;
    right: 5%;
    background: yellow;
    color: black;
    z-index: 20000001;
    cursor: pointer;
  `


function GalleryOverlay({frameOpened, setFrameOpened}) {

    const handleCloseOverlay = () => {
        document.getElementsByTagName('canvas')[0].remove()
        setFrameOpened(null)
    }

  return (
    <>
        <CloseOverlayButton $frameOpened = {frameOpened} onClick={handleCloseOverlay}>Close</CloseOverlayButton>
        <Overlay $frameOpened = {frameOpened !== null}>
          <ArtworkWrapper>
            <Artwork artwork={frameOpened} /> 
          </ArtworkWrapper>
        </Overlay>
    </>
  )
}

export default GalleryOverlay