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
    top: 7%;
    right: 5%;
    padding: 5px;
    z-index: 20000001;
    cursor: pointer;
    font-size: .7rem;
    color: white;

    &::before {
        content: 'X';
        display: inline-block;
        vertical-align: middle;
        font-size: 1.5rem;
        margin-right: 5px;
    }
  `


function GalleryOverlay({frameOpened, setFrameOpened}) {
  console.log("GALLERY OVERLAY FRAME OPENED",frameOpened)

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