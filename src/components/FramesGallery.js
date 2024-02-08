import * as React from "react"
import {useState} from "react"
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

const FramesGallery= ({frames}) => {
  
  const displayFrames = (frames) => {
    return frames.map((frame, key) => {
      return (
          <Frame id={key} key={key}>
            {frame.name}
          </Frame>
      )
    })
  }

  return (
      <GalleryContainer>
        {displayFrames(frames)}
      </GalleryContainer>
  )
}

export default FramesGallery

export const Head = () => {
  return (
    <title>Gallery Page</title>
  )
}
