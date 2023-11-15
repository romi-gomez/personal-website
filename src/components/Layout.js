import * as React from "react"
import '../styles/global.css'
import styled from "styled-components"

const LayoutContainer = styled.main`
  display: flex;
  align-items: center;
  width:100%;
  height:100%;
`

const Layout = ({children}) => {
  return (
    <LayoutContainer >{children}</LayoutContainer>
  )
}

export default Layout

