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
  position: absolute;
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
  z-index: 10;
  padding: 15% 5%;
  overflow-y:scroll;
`

const Title = styled.h1`
 
`

const Subtitle = styled.h2`
  position: relative;
  margin-bottom: 2rem;
`

const Presentation = styled.p`
  line-height: 1.5;
  width: 60%;
  position: relative;
`

const IndexPage = (data) => {
 
  return (
    <Layout >
      <Background />
      <Layover />
      <TextWrapper>
        <Title>Hi! I'm Romi Gomez</Title>
        <Subtitle>A Creative developer and multimedia artist based in Uruguay</Subtitle>
        
        <Presentation>
          As a creative professional, I've navigated the intricate paths of digital product development wearing many hats: I've cultivated a diverse expertise in frontend and fullstack development, also in UI and interaction design to craft dynamic and engaging user interfaces. My background in design allows me to meticulously translate static designs into immersive and vibrant digital experiences, paying close attention to detail and usability.
          <br/>
          <br/>
          Beyond my development experience, I also bring a deep understanding of music and sound to my work. Leveraging my musical background, I enhance user experiences by integrating interactive audio elements and designing immersive soundscapes, I push the boundaries of web development, seamlessly blending functionality with captivating sound design.
          <br/>
          <br/>
          Driven by a dedication to staying at the forefront of innovation and delivering high-quality work, I continuously explore new techniques and technologies to elevate my craft. Whether it's refining user interactions or fine-tuning audio effects, I approach each project with creativity and dedication, striving to create memorable and immersive experiences for users.
        </Presentation>
      </TextWrapper>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
