import * as React from "react"
import { useEffect, useState, createContext} from "react"
import artwork from "../data/artwork-data"
import styled from "styled-components"
import Layout from "../components/Layout"
import FramesGallery from "../components/FramesGallery"

const GallerysContainer = styled.div`
  width:100%;
  height: 210%;
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
`

const GalleryPage = () => {
  const [frameOpened, setFrameOpened] = useState(null)
  const value = {frameOpened, setFrameOpened}
  const OpenedFrameContext = createContext()

  const displayFramesGallerys = (gallerys) => {
    return gallerys.map((gallery, index) => {
      return (
          <FramesGallery key={index} gallery={gallery}/>
      )
    })
  }

  return (
    <Layout children = {
        <OpenedFrameContext.Provider value={value} >
          <GallerysContainer>
            {displayFramesGallerys(artwork)}
          </GallerysContainer>
        </OpenedFrameContext.Provider>
    }/>
  )
}

export default GalleryPage

export const Head = () => {
  return (
    <title>Gallery Page</title>
  )
}
