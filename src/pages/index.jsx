import * as React from "react"
import styled from "styled-components"
import Layout from "../components/templates/Layout"
import MovingThreads from "../assets/artwork/sketches/moving-threads/MovingThreads"
import PageTitle from "../components/tokens/PageTitle"
import Pill  from "../components/tokens/Pill"

const MainImage = styled.div`
  position: relative;
  width: 100%;
  height:57vh;
  border-radius: 1em;
  bottom: 3em;
`

const Background = styled (MovingThreads)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Overlay = styled.div`
  position: fixed;
  background: black;
  width:100%;
  height:100%;
  top:0;
  left:0;
  opacity: .3;
  z-index: 2;
`

const TextWrapper = styled.div`
  position: relative;
  color: ${props => props.theme.colors.primaryDark};
  width:100%;
  top:0;
  left:0;
  padding: 1em;
  padding-bottom: 5em;
  z-index: 20;
`

const Presentation = styled.p`
  line-height: 1.5;
  width: 100%;
  font-weight: 500;
`

const PillsContainer = styled.div`
  position: relative;
  top:0;
  left:0;
  padding:1em;
  width:100%;
  display: flex;
`

const IndexPage = (props) => {
  return (
    <Layout >
      <PageTitle content="I'm romi gomez" size="7"></PageTitle>
      <MainImage>
        <Background />
        <Overlay />
        <PillsContainer>
          <Pill text="Product Designer"></Pill>
          <Pill text="Multimedia Artist"></Pill>
          <Pill></Pill>
        </PillsContainer>
      </MainImage>
      <TextWrapper>
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
