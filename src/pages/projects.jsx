import React from 'react';
import styled from 'styled-components';
import Layout from '../components/templates/Layout';
import PageTitle from '../components/shared/PageTitle';
import ProjectCover from '../components/projects/ProjectCover';
import projects from '../data/projects';

const PortfolioContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Projects = () => {
  const displayProjects = (projects) => {
    return projects.map((project) => {
      return <ProjectCover key={project.name} project={project}/>;
    });
  };

  return (
    <Layout showSketch={true} >
      <PortfolioContainer>
        <PageTitle content="Featured Projects" size="5"></PageTitle>
        {displayProjects(projects)}
      </PortfolioContainer>
    </Layout>
  );
};

export default Projects;