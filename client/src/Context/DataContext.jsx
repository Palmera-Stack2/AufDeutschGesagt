import { createContext, useState } from "react";
import hero from "../assets/hero-image.jpg";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [heroImage, setHeroImage] = useState(hero);


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
