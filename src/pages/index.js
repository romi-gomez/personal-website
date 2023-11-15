import * as React from "react"
import TestSketch from "../artwork/testSketch/testSketch"


const IndexPage = () => {
  return (
    <main >
      <h1>
        Testing Sketch
      </h1>
      <TestSketch />  
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
