import * as React from "react"
import '../styles/global.css'
import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"

const LayoutContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
`

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <LayoutContainer >{children}</LayoutContainer>
      <Footer />
    </>
  )
}
export default Layout

