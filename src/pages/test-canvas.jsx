import * as React from "react"
import styled from "styled-components"
import Layout from "../components/templates/Layout"
import Artwork from "../components/Artwork"


const testCanvasPage = () => {

  return (
    <Layout children = {
        <Artwork artwork={{title:"Chladni"}}/>
    }/>
  )
}

export default testCanvasPage

export const Head = () => {
  return (
    <title>Test Canvas</title>
  )
}
