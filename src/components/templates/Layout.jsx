import * as React from "react"
import '../../styles/global.css'
import theme from '../../styles/theme'
import { GlobalStyle } from '../../../gatsby-browser'; // Adjust the path if necessary
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
import MouseFollower from "../shared/MouseFollower"
import ZenLines from "../../assets/artwork/sketches/zen-lines/ZenLines";

const LayoutContainer = styled.main`
  @import url("https://use.typekit.net/iio2ubs.css");
  position: relative;
  justify-content: center;
  width: 100%;
  background: ${(props) => props.$background && props.$background === 'dark' ? props.theme.colors.primaryDark : props.theme.colors.white}; 
`;

const PageContent = styled.div`
  width: 100%;
  padding: 5%;
  padding-top:9rem;
`;

const Layout = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MouseFollower />
      {
        props.showSketch ? <ZenLines mode="light"/> : ""
      }
      <LayoutContainer $background={props.background}>
        <Navbar />
        <PageContent>
          {props.children}
        </PageContent>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout;