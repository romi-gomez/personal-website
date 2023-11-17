import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SoundBlob from "../artwork/SoundBlob"

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50vh;
`

const GalleryPage = () => {
  return (
    <Layout children = {
      <Gallery >
      <SoundBlob />  
    </Gallery>
    }/>
  )
}

export default GalleryPage

export const Head = () => {
  return (
    <title>Gallery Page</title>
  )
}
