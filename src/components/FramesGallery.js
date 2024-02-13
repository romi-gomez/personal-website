import * as React from "react"
import { useContext } from "react"
import styled from "styled-components"
import Frame from "../components/Frame"

const GalleryContainer = styled.div`
  position: relative;   
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 1fr;
  width: 100%;
  height: 70%;
`

const FramesGallery= ({gallery}) => {
  const displayFrames = (frames) => {
    return frames.map((frame, key) => {
      return (
          <Frame id={key} key={key} content={frame} />
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
