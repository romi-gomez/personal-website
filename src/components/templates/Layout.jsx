import * as React from "react"
import '../../styles/global.css'
import theme from '../../styles/theme'
import { GlobalStyle } from '../../../gatsby-browser'; // Adjust the path if necessary
import styled from "styled-components"
import {ThemeProvider} from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
import MouseFollower from "../shared/MouseFollower"

const LayoutContainer = styled.main`

 @import url("https://use.typekit.net/iio2ubs.css");
  position: relative;
  justify-content: center;
  width:100%;
  background: ${props => props.$background && props.$background === 'dark' ? props.theme.colors.primaryDark : props.theme.colors.white }; 
`

const PageContent = styled.div`
  width: 90%;
  padding-top: 7rem;
`

const Layout = (props, {children}) => {
  console.log("layout children", children)
  console.log("background", props.background)

  console.log("Props", props)
  console.log("theme", theme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MouseFollower />
      <LayoutContainer $background = {props.background}>
        <Navbar />
          <PageContent>
            {props.children}
          </PageContent>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  )
}
export default Layout

