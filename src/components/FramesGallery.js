import * as React from "react"
import styled from "styled-components"
import Frame from "../components/Frame"

const GalleryContainer = styled.div`
  position: relative;   
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
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
      <GalleryContainer $width={gallery.lenght}>
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
