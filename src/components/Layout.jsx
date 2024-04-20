import * as React from "react"
import '../styles/global.css'
import styled from "styled-components"
import Navbar from "./templates/Navbar"
import Footer from "./templates/Footer"

const LayoutContainer = styled.main`
  color: #F3F3F3;
  position: relative;
  display: block;
  width:100%;
  background: rgb(51,51,51);
  background: radial-gradient(circle, rgba(51,51,51,1) 0%, rgba(0,0,0,1) 94%, rgba(29,29,29,1) 100%);
`

const Layout = ({children}) => {
  return (
      <LayoutContainer >
        <Navbar />
          {children}
        <Footer />
      </LayoutContainer>
  )
}
export default Layout

