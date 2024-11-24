import React from "react";
import { CharacterCardProps } from "../../interface/character";
import * as Styled from "./styled";

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  children,
}) => {
  return (
    <Styled.Character key={character.id}>
      <Styled.Image src={character.image} alt={character.name} />

      <Styled.Texts>
        <Styled.LocationNameContainer>
          <Styled.CharacterName>{character.name}</Styled.CharacterName>
        </Styled.LocationNameContainer>

        <Styled.Status>
          {character.status === "Alive" ? (
            <Styled.Circle color="green" />
          ) : (
            <Styled.Circle color="red" />
          )}
          {character.status} - {character.species}
        </Styled.Status>

        <Styled.Location>Last known location:</Styled.Location>
        <Styled.LocationContainer>
          <Styled.LocationName>{character.location.name}</Styled.LocationName>
        </Styled.LocationContainer>

        <Styled.Location>First seen in:</Styled.Location>
        <Styled.LocationNameContainer>
          <Styled.LocationName>{character.episodes}</Styled.LocationName>
        </Styled.LocationNameContainer>
      </Styled.Texts>
      {children}
    </Styled.Character>
  );
};

export default CharacterCard;
