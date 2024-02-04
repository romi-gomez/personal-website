import * as React from "react"
import { useEffect, useState} from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import FramesGallery from "../components/FramesGallery"

const GallerysContainer = styled.div`
  width:100%;
  height: 100%;
  overflow-y: scroll;
`

const work = [
  [
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"},
    {name: "Art", path: "../artwork/RotateGrid"}
  ],
  [
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
    {name: "website", path: "../artwork/RotateGrid"},
  ],
  [
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
    {name: "animation", path: "../artwork/RotateGrid"},
  ]
]

const GalleryPage = () => {
  const [mousePosition, setMousePosition ] = useState({x: null, y: null})

  const handleMouseMove = (event) => {
    //  Get mouse position relative to element
    const localX = event.clientX ;
    const localY = event.clientY ;

    setMousePosition({ x: localX, y: localY });
  };

  const displayFramesGallerys = (gallerys) => {
    return gallerys.map((gallery, index) => {
      return <FramesGallery key={index} frames={gallery} mousePosition={mousePosition}/>
    })
  }

  return (
    <Layout children = {
      <GallerysContainer onMouseMove={handleMouseMove}>
        {displayFramesGallerys(work)}
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
