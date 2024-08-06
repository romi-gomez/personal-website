import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/templates/Layout";
import PageTitle from "../components/shared/PageTitle";
import Pill from "../components/shared/Pill";
import SketchFrame from "../components/shared/frame/SketchFrame";
import { HoverProvider } from "../context/HoverContext";
import ConstructionPopup from "../components/ConstructionPopup";

const TextWrapper = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.primaryDark};
  width: 100%;
  top: 0;
  left: 0;
  padding: 1em;
  padding-bottom: 5em;
  z-index: 20;
`;

const Presentation = styled.p`
  line-height: 1.5;
  width: 100%;
  font-weight: 500;
`;

const PillsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  padding: 1em;
  width: 100%;
  display: flex;
  z-index: 10;
`;

const IndexPage = ({ data }) => {
  const markdownRemark = data.file.childMarkdownRemark;
  const { frontmatter, html } = markdownRemark;

  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <HoverProvider>
      <Layout showSketch={true}>
        {showPopup && <ConstructionPopup onClose={handleClosePopup} />}
        <PageTitle content="- I'm Romi Gomez -" size="7" />
        <SketchFrame>
          <PillsContainer>
            <Pill className="clickable" color="white" background="primary" text="Product Designer" />
            <Pill className="clickable" color="dark" background="highlight1" text="Multimedia Artist" />
            <Pill className="clickable" color="white" background="highlight2" text="Frontend Developer" />
          </PillsContainer>
        </SketchFrame>
        <TextWrapper>
          <Presentation dangerouslySetInnerHTML={{ __html: html }} />
        </TextWrapper>
      </Layout>
    </HoverProvider>
  );
};

export default IndexPage;

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
`;

export const Head = () => <title>Home Page</title>;