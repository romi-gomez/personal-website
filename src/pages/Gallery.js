import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import RotateGrid from "../artwork/RotateGrid"

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70vh;
`

const GalleryPage = () => {
  return (
    <Layout children = {
      <Gallery >
        <RotateGrid />  
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
