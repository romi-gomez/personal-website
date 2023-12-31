import * as React from "react"
import { useEffect, useState} from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import FramesGallery from "../components/FramesGallery"

const GallerysContainer = styled.div`
  background: #000; 
  width:100%;
  height:100vh;
`

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

const GalleryPage = () => {
  const [mousePosition, setMousePosition ] = useState({x: null, y: null})

  const handleMouseMove = (event) => {
    //  Get mouse position relative to element
    const localX = event.clientX ;
    const localY = event.clientY ;

    setMousePosition({ x: localX, y: localY });
  };

  return (
    <Layout children = {
      <GallerysContainer onMouseMove={handleMouseMove} >

      </GallerysContainer>
    }/>
  )
}

export default GalleryPage

export const Head = () => {
  return (
    <title>Gallery Page</title>
  )
}
