import * as React from "react"
import {useState} from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Frame from "../components/Frame"

const artWorks = [
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"},
  {name: "RotateGrid", path: "../artwork/RotateGrid"}
]

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
  justify-content: center;
  width: 100%;
  height: 70vh;
  background: #000;
`

const GalleryPage = () => {
  const [mousePosition, setMousePosition ] = useState({x: null, y: null})

  const handleMouseMove = (event) => {
    //  Get mouse position relative to element
    const localX = event.clientX ;
    const localY = event.clientY ;

    setMousePosition({ x: localX, y: localY });
  };

  const displayArtwork = () => {
    return artWorks.map((artwork, key) => {
      return (
          <Frame id={key} key={key} mouseposition={mousePosition}>
            {artwork.name}
          </Frame>
      )
    })
  }

  return (
    <Layout children = {
      <GalleryContainer onMouseMove={handleMouseMove} >
        {displayArtwork()}
      </GalleryContainer>
    }/>
  )
}

export default GalleryPage

export const Head = () => {
  return (
    <title>Gallery Page</title>
  )
}
