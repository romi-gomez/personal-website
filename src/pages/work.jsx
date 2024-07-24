import React from 'react'
import styled from 'styled-components'

const PortfolioContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #f1f1f1;
`

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  z-index: 1; /* Low z-index to ensure iframe appears above it */
  font-size: 24px;
  color: #333;
`

const IframeContainer = styled.iframe`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2; /* Higher z-index to appear above the loading component */
  border: none;
`

const BackHomeButton = styled.button`
  position: absolute;
  z-index:1000000;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background: #3A4276;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #0F0628;
  }
`

const Work = (props) => {
  const handleBackHome = () => {
    window.location.href = '/'
  }

  return (
    <PortfolioContainer>
      <LoadingContainer>Loading...</LoadingContainer>
      <BackHomeButton onClick={handleBackHome}>Back Home</BackHomeButton>
      <IframeContainer
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGU3Cgx5i4fbEzyFeD3z4fP%2F%255Bromigomez%255D%255Bportfolio-%252B-cv%255D%3Fpage-id%3D4%253A4%26node-id%3D4-9%26viewport%3D1370%252C430%252C0.06%26t%3DWug0s9QANFljiCtl-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D4%253A9"
        allowFullScreen
      ></IframeContainer>
    </PortfolioContainer>
  )
}

export default Work