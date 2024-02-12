import * as React from "react"
import { useEffect, useState, createContext} from "react"
import artwork from "../data/artwork-data"
import styled from "styled-components"
import Layout from "../components/Layout"
import FramesGallery from "../components/FramesGallery"

const GallerysContainer = styled.div`
  width:100%;
  height: 210%;
  overflow: hidden;
  display : flex;
  flex-direction: column;
  justify-content: center;
`

const GalleryPage = () => {

  const displayFramesGallerys = (gallerys) => {
    return gallerys.map((gallery, index) => {
      return (
          <FramesGallery key={index} gallery={gallery}/>
      )
    })
  }

  return (
    <Layout children = {
        <GallerysContainer>
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
