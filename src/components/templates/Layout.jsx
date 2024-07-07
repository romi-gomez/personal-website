import * as React from "react"
import '../../styles/global.css'
import styled from "styled-components"
import {ThemeProvider} from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"

const theme = {
  colors: {
    primary:'#3A4276',
    primaryLight: '#6457A6',
    primaryLighter:'#C4A7E7',
    primaryDark:'#0F0628',
    highlight1: '#8AE598',
    highlight2: '#FF6CC0',
    highlight3: '#FFDC52',
    highlight4: '#58E9F3',
    white: '#FEFEFE',
    greyMid: '#F2F2F2'
  },
  fonts : {
    hero: '"orbitron", sans-serif;',
    main: '"input-mono", monospace',
    text: '"proxima-nova", sans-serif',
    weight: {
      regular: 400,
      bold: 700,
      thin: 200
    }
  },
}

const LayoutContainer = styled.main`

 @import url("https://use.typekit.net/iio2ubs.css");

  color: ${props => props.theme.colors.white};
  position: relative;
  justify-content: center;
  width:100%;
  background: ${props => props.theme.colors.white};
`

const PageContent = styled.div`
  width: 90%;
`

const Layout = ({children}) => {
  console.log("layout children", children)
  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer >
        <Navbar />
          <PageContent>
            {children}
          </PageContent>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  )
}
export default Layout

