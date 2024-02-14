import * as React from "react"
import { useState, useEffect} from "react"
import gallerys from "../data/artwork-data"
import styled from "styled-components"
import Layout from "../components/Layout"
import FramesGallery from "../components/FramesGallery"
import GalleryOverlay from "../components/GalleryOverlay"

const GallerysContainer = styled.div`
  width:100%;
  height: 100%;
  padding: 2%;
  overflow-x: scroll;
`

const GalleryPage = () => {
  const [frameOpened, setFrameOpened] = useState(null)

  const displayFramesGallerys = (gallerys) => {
    return gallerys.map((gallery, index) => {
      return (
          <FramesGallery key={index} gallery={gallery} setFrameOpened= {setFrameOpened}/>
      )
    })
  }

  const displayGalleryOverlay = (frameOpened, setFrameOpened) => {
    if(frameOpened !== null) {
      return (
        <GalleryOverlay frameOpened={frameOpened} setFrameOpened= {setFrameOpened}/>
      )
    }
    return
  }

  return (
    <Layout children = {
        <GallerysContainer>
          {displayGalleryOverlay(frameOpened, setFrameOpened)}
          {displayFramesGallerys(gallerys)}
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
