import * as React from "react"
import '../styles/global.css'
import styled from "styled-components"
import Navbar from "./templates/Navbar"
import Footer from "./templates/Footer"

const theme = {
  colors: {
    primary:''
  }
}

const LayoutContainer = styled.main`
  color: #F3F3F3;
  position: relative;
  display: block;
  width:100%;
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

