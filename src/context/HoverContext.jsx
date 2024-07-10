
import React, { createContext, useContext, useState } from 'react';

const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
  const [hoveredPill, setHoveredPill] = useState(null);

  return (
    <HoverContext.Provider value={{ hoveredPill, setHoveredPill }}>
      {children}
    </HoverContext.Provider>
  );
};

export const useHover = () => useContext(HoverContext);