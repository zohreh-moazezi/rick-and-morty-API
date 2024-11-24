import React, { useState } from "react";
import Character from "../Characters/Character";
import FavoritesList from "../Characters/FavoritesList";
import { UseCharacter } from "hook/useCharacter";
import RandomId from "utils/randomId";
import * as Styled from "./styled";

const CharacterLoader = () => {
  const ids = [226, 110, 179, 322, 375, 800];

  const [characterIds, setCharacterIds] = useState<number[]>(ids);

  const { error, isError, data, isLoading } = UseCharacter(characterIds);

  const handleNewCharacter = () => {
    const newCharacters = RandomId(6, 800);
    setCharacterIds(newCharacters);
  };

  if (isLoading) {
    return <Styled.States>Loading...</Styled.States>;
  }

  if (isError) {
    return <Styled.States>{error.message}</Styled.States>;
  }

  return (
    <>
      <Styled.ButtonContainer>
        <Styled.Button onClick={handleNewCharacter}>
          New Characters
        </Styled.Button>
      </Styled.ButtonContainer>

      <Character arrayItems={data || []} />
      <FavoritesList arrayItems={data || []} />
    </>
  );
};

export default CharacterLoader;
