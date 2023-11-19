import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Rotate from "../artwork/Rotate"

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
        <Rotate />  
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
