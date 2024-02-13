import * as React from "react"
import { useState, useEffect} from "react"
import artwork from "../data/artwork-data"
import styled from "styled-components"
import Layout from "../components/Layout"
import FramesGallery from "../components/FramesGallery"
import GalleryOverlay from "../components/GalleryOverlay"

const GallerysContainer = styled.div`
  width:100%;
  height: 210%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
`

const GalleryPage = () => {
  const [frameOpened, setFrameOpened] = useState(null)

  useEffect(() => {
    if (frameOpened) {
      console.log("frameOpened in Gallery", frameOpened)
    } 
  }, [frameOpened])

  const displayFramesGallerys = (gallerys) => {
    return gallerys.map((gallery, index) => {
      return (
          <FramesGallery key={index} gallery={gallery} setFrameOpened= {setFrameOpened}/>
      )
    })
  }

  return (
    <Layout children = {
        <GallerysContainer>
          <GalleryOverlay isFrameOpened={frameOpened !== null} setFrameOpened= {setFrameOpened}/>
          {displayFramesGallerys(artwork)}
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
