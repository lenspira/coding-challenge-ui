import React, { createContext, useState, useContext } from "react";

const SharedDataContext = createContext();

export const useSharedData = () => {
  return useContext(SharedDataContext);
};

export const SharedDataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState({ entity: null });

  return (
    <SharedDataContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </SharedDataContext.Provider>
  );
};
