import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const PortfolioContainer = styled.div`
  widt:100%;
  height:100vh;
  overflow:hidden;
  background:#0F0628;
`

const Portfolio = () => {
  return (
    <Layout>
      <iframe width="100%" height="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGU3Cgx5i4fbEzyFeD3z4fP%2F%255Bromigomez%255D%255Bportfolio-%252B-cv%255D%3Fpage-id%3D4%253A4%26node-id%3D4-9%26viewport%3D1370%252C430%252C0.06%26t%3DWug0s9QANFljiCtl-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D4%253A9" allowfullscreen></iframe>
    </Layout>
  )
}

export default Portfolio