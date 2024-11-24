import React from "react";
import { CharacterProps } from "interface/character";
import { useFavorites } from "context/FavoritesContext";
import { useDisabledState } from "context/DisabledStateContext";
import CharacterCard from "../CharacterCard/CharacterCard";
import * as Styled from "./styled";

const Character: React.FC<CharacterProps> = ({ arrayItems }) => {
  const { toggleFavorite, favorites } = useFavorites();
  const { setIsDisabled, isDisabled } = useDisabledState();

  const handleAddButton = (id: number): void => {
    toggleFavorite(id);
    if (!favorites.includes(id)) {
      setIsDisabled((prevDisabled: Record<number, boolean>) => ({
        ...prevDisabled,
        [id]: true,
      }));
    } else {
      setIsDisabled((prevDisabled: Record<number, boolean>) => ({
        ...prevDisabled,
        [id]: false,
      }));
    }
  };

  return (
    <>
      <Styled.CharactersContainer>
        {arrayItems.map((character) => {
          return (
            <CharacterCard key={character.id} character={character}>
              <Styled.Button
                onClick={() => handleAddButton(character.id)}
                disabled={!!isDisabled[character.id]}
              >
                Add to Favorites
              </Styled.Button>
            </CharacterCard>
          );
        })}
      </Styled.CharactersContainer>
    </>
  );
};

export default Character;
