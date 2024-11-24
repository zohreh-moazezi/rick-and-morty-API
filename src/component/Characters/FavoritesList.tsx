import React from "react";
import { CharacterProps } from "interface/character";
import { useFavorites } from "context/FavoritesContext";
import { useDisabledState } from "context/DisabledStateContext";
import CharacterCard from "../CharacterCard/CharacterCard";
import * as Styled from "./styled";

const FavoritesList: React.FC<CharacterProps> = ({ arrayItems }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { setIsDisabled } = useDisabledState();

  const handleRemoveButton = (id: number) => {
    toggleFavorite(id);
    setIsDisabled((prevDisabled: Record<number, boolean>) => ({
      ...prevDisabled,
      [id]: false,
    }));
  };

  return (
    <Styled.FavoritesContainer>
      <Styled.Header>Favorites</Styled.Header>

      {favorites.length === 0 && (
        <Styled.EmptyList>No Characters Are Added</Styled.EmptyList>
      )}

      <div>
        <Styled.CharactersContainer>
          {arrayItems
            .filter((character) => favorites.includes(character.id))
            .map((character) => (
              <CharacterCard key={character.id} character={character}>
                <Styled.Button onClick={() => handleRemoveButton(character.id)}>
                  Remove
                </Styled.Button>
              </CharacterCard>
            ))}
        </Styled.CharactersContainer>
      </div>
    </Styled.FavoritesContainer>
  );
};

export default FavoritesList;
