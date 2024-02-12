import * as React from "react"
import { useContext } from "react"
import styled from "styled-components"
import Frame from "../components/Frame"

const GalleryContainer = styled.div`
  position: relative; 
  display: grid;
  grid-template-columns: ${props => {return `repeat(${props.children.length}, 400px)`}};
  grid-template-rows: 1fr;
  width: ${props => {return (props.children.length * 400)+(props.children.length * 20)}}px;
  height: 70%;
`

const FramesGallery= ({gallery}) => {

  const displayFrames = (frames) => {
    console.log("FRAMES::::::", frames)
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
