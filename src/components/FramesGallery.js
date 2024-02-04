import * as React from "react"
import {useState} from "react"
import styled from "styled-components"
import Frame from "../components/Frame"

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => {return `repeat(${props.children.length}, 400px)`}};
  grid-template-rows: 1fr;
  grid-gap: 20px;
  justify-content: center;
  width: ${props => {return (props.children.length * 400)+(props.children.length * 20)}}px;
  height: 80%;
`

const FramesGallery= ({frames}) => {
  const [mousePosition, setMousePosition ] = useState({x: null, y: null})

  const handleMouseMove = (event) => {
    //  Get mouse position relative to element
    const localX = event.clientX ;
    const localY = event.clientY ;

    setMousePosition({ x: localX, y: localY });
  };

  const displayFrames = (frames) => {
    return frames.map((frame, key) => {
      return (
          <Frame id={key} key={key} mouseposition={mousePosition}>
            {frame.name}
          </Frame>
      )
    })
  }

  return (
      <GalleryContainer onMouseMove={handleMouseMove} >
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
