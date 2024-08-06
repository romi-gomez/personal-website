import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .8;
  }
`;

const slideIn = keyframes`
  from {
    transform: translate(-50%, -60%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.primaryDark};
  opacity:.3;
  z-index: 999;
  animation: ${fadeIn} 0.5s forwards;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: auto;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1em;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: ${slideIn} 0.5s forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.colors.primary};
  overflow: hidden; /* Ensures the lines don't overflow out of the container */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const PopupContent = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryDark};
  margin-top: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: ${(props) => props.theme.fonts.hero}; /* Use the display font for the title */
  color: ${(props) => props.theme.colors.primaryLight};
  margin: 0;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Text = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: normal;
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const ConstructionPopup = ({ onClose }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <PopupContent>
          <Title>This site is under construction</Title>
          <Text>
            But you are more than welcome to check the building process. <br />
            I'm updating it <Highlight>every day</Highlight>.
          </Text>
        </PopupContent>
      </PopupContainer>
    </>
  );
};

export default ConstructionPopup;