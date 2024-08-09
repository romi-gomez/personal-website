import React, { useContext } from "react";
import '../../styles/global.css';
import theme from '../../styles/theme';
import { GlobalStyle } from '../../../gatsby-browser'; // Adjust the path if necessary
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { NavBarContext } from "../../context/NavBarContext";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import MouseFollower from "../shared/MouseFollower";
import ZenLines from "../../assets/artwork/sketches/zen-lines/ZenLines";

const LayoutContainer = styled.main`
  @import url("https://use.typekit.net/iio2ubs.css");
  
  display: grid;
  grid-template-columns: ${(props) => (props.$expanded ? '12rem' : '4rem')} 1fr;
  transition: grid-template-columns 0.3s ease-in-out;
  width: 100%;
  height: 100vh;
  background: ${(props) => (props.$background && props.$background === 'dark' ? props.theme.colors.primaryDark : props.theme.colors.white)};
`;

const PageContent = styled.div`
  margin: 2rem auto 0;
  width: 95%;
  z-index: 101;
`;

const Layout = (props) => {
  // Access the expanded state from NavBarContext
  const { expanded } = useContext(NavBarContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MouseFollower />
      {props.showSketch ? <ZenLines mode="light" /> : ""}
      <LayoutContainer $background={props.background} $expanded={expanded}>
        <Navbar />
        <div></div>
        <PageContent>
          {props.children}
          <Footer />
        </PageContent>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;