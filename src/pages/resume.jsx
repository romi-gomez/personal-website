import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/templates/Layout";
import PageTitle from "../components/shared/PageTitle";

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 3em;
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 80vh;
  border: none;
`;

const DownloadButton = styled.a`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;

const ResumePage = ({ data }) => {
  const resumeFile = data.file.publicURL;

  return (
    <Layout>
      <ResumeContainer>
        <PDFViewer src={resumeFile} />
        <DownloadButton href={resumeFile} download="[romigomez_product-designer-and-developer.pdf">
          Download Resume
        </DownloadButton>
      </ResumeContainer>
    </Layout>
  );
};

export default ResumePage;

export const query = graphql`
  query {
    file(relativePath: { eq: "[romigomez_product-designer-and-developer.pdf" }) {
      publicURL
    }
  }
`;

export const Head = () => <title>Resume</title>;