import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  padding: 1rem;
  text-align: left;
  color: ${(props) => props.theme.colors.primaryDark};
`;

const ProjectNumber = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const Divider = styled.hr`
  width: 50%;
  border: 1px solid ${(props) => props.theme.colors.primaryLight};
  margin: 0.5rem 0;
`;

const ProjectName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const Description = styled.h1`
  margin: 1rem 0 0 0;
  font-size: 1.5rem;
`;

const RoleNote = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.highlight2};
`;

const CoverText = ({ number, name, description, role }) => (
  <TextContainer>
    <ProjectNumber>{number}</ProjectNumber>
    <Divider />
    <ProjectName>{name}</ProjectName>
    <Description>{description}</Description>
    <RoleNote>{role}</RoleNote>
  </TextContainer>
);

export default CoverText;