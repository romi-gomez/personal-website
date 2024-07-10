import * as React from "react"
import { graphql } from 'gatsby'
import styled from "styled-components"
import Layout from "../components/templates/Layout"
import PageTitle from "../components/tokens/PageTitle"
import Pill  from "../components/tokens/Pill"
import MainImage  from "../components/tokens/MainImage"
import { HoverProvider } from '../context/HoverContext'


const TextWrapper = styled.div`
  position: relative;
  color: ${props => props.theme.colors.primaryDark};
  width:100%;
  top:0;
  left:0;
  padding: 1em;
  padding-bottom: 5em;
  z-index: 20;
`

const Presentation = styled.p`
  line-height: 1.5;
  width: 100%;
  font-weight: 500;
`

const PillsContainer = styled.div`
  position: absolute;
  top:0;
  justify-content: center;
  padding:1em;
  width:100%;
  display: flex;
  z-index: 10;
`

const IndexPage = ({data}, ...props) => {


  const markdownRemark = data.file.childMarkdownRemark;
  const { frontmatter, html } = markdownRemark;

  console.log(markdownRemark)

  return (
    <HoverProvider>
      <Layout >
        <PageTitle content="I'm romi gomez - " size="7"></PageTitle>
        <MainImage>
          <PillsContainer>
            <Pill className="clickable" color="white" background="primary" text="Product Designer"></Pill>
            <Pill className="clickable" color="dark" background="highlight1" text="Multimedia Artist"></Pill>
            <Pill className="clickable" color="white" background="highlight2" text="Frontend developer"></Pill>
          </PillsContainer>
        </MainImage>
        <TextWrapper>
            <Presentation dangerouslySetInnerHTML={{ __html: html }} />
          </TextWrapper> 
      </Layout>
    </HoverProvider>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "presentation.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          title
        }
      }
    }
  }
`

export const Head = () => <title>Home Page</title>
