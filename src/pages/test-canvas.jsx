import * as React from "react"
import Layout from "../components/templates/Layout"
import Artwork from "../components/gallery/Artwork"


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
