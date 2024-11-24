import React, { createContext, useContext, useState, ReactNode } from "react";
import { FavoritesContextType } from "../interface/character";

const favoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const useFavorites = () => {
  const context = useContext(favoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
};

export const FavoriteProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (itemId: number) => {
    setFavorites((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  return (
    <favoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </favoritesContext.Provider>
  );
};
