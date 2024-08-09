// src/context/NavBarContext.js

import React, { createContext, useState } from 'react';

export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <NavBarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </NavBarContext.Provider>
  );
};