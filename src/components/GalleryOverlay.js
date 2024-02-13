import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div.attrs(props => ({
    style: {
        visibility: props.$isFrameOpened ? "visible" : "hidden",
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

  const CloseOverlayButton = styled.div.attrs(props => ({
    style: {
        visibility: props.$isFrameOpened ? "visible" : "hidden",
      },
    }))`
    position: absolute;
    width: 50px;
    height: 50px;
    top: 4%;
    right: 4%;
    background: yellow;
    color: black;
    z-index: 20000001;
    cursor: pointer;
  `


function GalleryOverlay({isFrameOpened, setFrameOpened}) {

    const handleCloseOverlay = () => {
        setFrameOpened(null)
    }

  return (
    <>
        <CloseOverlayButton $isFrameOpened = {isFrameOpened} onClick={handleCloseOverlay}>Close</CloseOverlayButton>
        <Overlay $isFrameOpened = {isFrameOpened}/>
    </>
  )
}

export default GalleryOverlay