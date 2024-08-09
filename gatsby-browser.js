import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { NavBarProvider } from './src/context/NavBarContext'; // Import the NavBarProvider

// Define the global styles
const GlobalStyle = createGlobalStyle`
  body {
    cursor: none; /* Hide the default cursor */
  }
  .clickable {
    pointer-events: auto; /* Ensure clickable elements are interactive */
  }
`;

// Apply the global styles
export const onInitialClientRender = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      cursor: none;
    }
    a, .clickable {
      cursor: none !important;
      pointer-events: auto;
    }
  `;
  document.head.appendChild(style);
};

// Wrap the root element with NavBarProvider
export const wrapRootElement = ({ element }) => {
  return (
    <NavBarProvider>
      {element}
    </NavBarProvider>
  );
};

// Export GlobalStyle for use in layout components
export { GlobalStyle };