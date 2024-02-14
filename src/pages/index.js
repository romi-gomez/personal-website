import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import IndexBackground from "../assets/artwork/IndexBackground"

const Layover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`

const Background = styled (IndexBackground)`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`
const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  padding: 15% 10%;
`

const Title = styled.h1`
 
`

const Subtitle = styled.h2`
  position: relative;
`

const Presentation = styled.p`
  position: relative;
`

const IndexPage = (data) => {
 
  return (
    <Layout >
      <Background />
      <Layover />
      <TextWrapper>
        <Title>Hi! I'm Romi Gomez</Title>
        <Subtitle>Artwork</Subtitle>
        
        <Presentation>
          <p>Some text</p>
        </Presentation>
      </TextWrapper>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
