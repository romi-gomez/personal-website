import { createGlobalStyle } from 'styled-components';
import React from 'react';

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

// Export GlobalStyle for use in layout components
export { GlobalStyle };