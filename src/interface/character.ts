import { ReactNode } from "react";

export interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  episodes: string[];
  image: string;
}

export interface CharacterProps {
  arrayItems: Characters[];
}

export interface CharacterCardProps {
  character: Characters;
  children?: ReactNode;
}
export interface DisabledStateContextType {
  isDisabled: Record<number, boolean>;
  setIsDisabled: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}
export interface FavoritesContextType {
  favorites: number[];
  toggleFavorite: (itemId: number) => void;
}
