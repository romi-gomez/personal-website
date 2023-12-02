import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Artwork from "../artwork/RotateGrid"

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const GalleryPage = () => {
  return (
    <Layout children = {
      <Gallery >
        <Artwork />  
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
