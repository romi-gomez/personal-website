import React from 'react'
import styled, {keyframes} from 'styled-components'
import MovingThreads from '../../assets/artwork/sketches/moving-threads/MovingThreads'

const BackgroundAnimation = keyframes `
  0% {
    clip-path: inset(0 50% 0 50%);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height:57vh;
  border-radius: 1em;
  overflow: hidden;
`

const BackgoundWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1; /* ensure it's behind interactive elements */
  animation: ${BackgroundAnimation} 0.7s ease-in-out forwards;
`

const BackgroundSketch = styled (MovingThreads)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Overlay = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.primaryDark};
  width:100%;
  height:100%;
  top:0;
  left:0;
  opacity: .4;
  z-index: 0;
`


const MainImage = (props) => {
  return (
    <Container className="clickable">
        {props.children}
        <BackgoundWrapper>
          <BackgroundSketch />
          <Overlay />
        </BackgoundWrapper>
    </Container>
  )
}

export default MainImage