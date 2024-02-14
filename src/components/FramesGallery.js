import * as React from "react"
import styled from "styled-components"
import Frame from "../components/Frame"

const GalleryContainer = styled.div`
  position: relative;   
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-template-rows:  1fr 1fr;
  width: 100%;
  height: 100%;
`

const FramesGallery= ({gallery, setFrameOpened}) => {
  const displayFrames = (frames) => {
    return frames.map((frame, key) => {
      return (
          <Frame id={key} key={key} content={frame} setFrameOpened={setFrameOpened} />
      )
    })
  }

  return (
      <GalleryContainer>
        {displayFrames(gallery)}
      </GalleryContainer>
  )
}

export default FramesGallery

export const Head = () => {
  return (
    <title>Gallery Page</title>
  )
}
