import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vh;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-radius: 2em;;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 2em;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: default; /* Remove pointer cursor */
  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const PopupContent = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.primaryDark};
`;

const Title = styled.div`
  font-size: 2.5em; /* Increase the size of the title */
  color: ${(props) => props.theme.colors.primaryLight}; /* Use primary color from the theme */
  margin: 0;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TitleWord = styled.span`
  margin: 0 0.2rem;
  display: inline-block;
`;

const Text = styled.p`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1.2rem; /* Increase font size */
  font-weight: bold; /* Make the text bold */
`;

const Word = styled.span`
  margin: 0 0.2rem;
  display: inline-block;
`;

const ConstructionPopup = ({ onClose }) => {
  const titleText = "This site is under construction".split(" ");
  const bodyText = "But you are more than welcome to check the building process. I'm updating it everyday.".split(" ");

  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <PopupContent>
          <Title>
            {titleText.map((word, index) => (
              <TitleWord key={index}>
                {word}
              </TitleWord>
            ))}
          </Title>
          <Text>
            {bodyText.map((word, index) => (
              <Word key={index}>
                {word}
              </Word>
            ))}
          </Text>
        </PopupContent>
      </PopupContainer>
    </>
  );
};

export default ConstructionPopup;