import React from 'react';
import styled from 'styled-components';
import Layout from '../components/templates/Layout';
import PageTitle from '../components/shared/PageTitle';
import ProjectCover from '../components/projects/ProjectCover';
import projects from '../data/projects';

const PortfolioContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  overflow-y: auto;
`;

const Projects = () => {
  const displayProjects = (projects) => {
    return projects.map((project) => {
      return <ProjectCover key={project.name}>{project.name}</ProjectCover>;
    });
  };

  return (
    <Layout>
      <PortfolioContainer>
        <PageTitle content="Featured Projects -" size="7"></PageTitle>
        {displayProjects(projects)}
      </PortfolioContainer>
    </Layout>
  );
};

export default Projects;