import React from 'react';
import styled from 'styled-components';
import CoverText from './CoverText';
import ImageFrame from '../shared/frame/ImageFrame'

const CoverContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$imageFirst ? 'row' : 'row-reverse')};
  width: 100%;
  height:70vh;
  column-gap: 2rem; /* Add some space between columns */

`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectCover = ({ project, imageFirst = true }) => {

  const imageContent = {
    staticImg: project.coverStatic,
    animatedImg: project.cover
  }

  return (
        <CoverContainer $imageFirst={imageFirst}>
          <Column>
            <ImageFrame imgSource="Project" content={imageContent}></ImageFrame>
          </Column>
          <Column>
            <CoverText
              number={project.key}
              name={project.displayName}
              title={project.title}
              role={project.role}
              company={project.company}
            />
          </Column>
        </CoverContainer>
      );
}
export default ProjectCover;