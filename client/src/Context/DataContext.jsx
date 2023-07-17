import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [heroImage, setHeroImage] = useState("");

  return (
    <DataContext.Provider
      value={{
        heroImage,
        setHeroImage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
