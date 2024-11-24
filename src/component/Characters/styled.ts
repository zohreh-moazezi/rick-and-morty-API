import styled from "styled-components";

export const CharactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--background-color);
  padding-bottom: var(--padding);
  justify-content: center;
  gap: 5rem;
  align-items: stretch;
`;

export const FavoritesContainer = styled.div`
  background-color: var(--background-color);
  min-height: 30rem;
`;

export const Header = styled.h1`
  text-align: center;
  padding-top: var(--padding);
  font-size: 2.5rem;
  color: var(--main-color);
`;

export const EmptyList = styled.h1`
  color: var(--main-color);
  text-align: center;
  font-size: 2rem;
  margin-top: 6rem;
`;

export const Button = styled.button`
  background-color: var(--character-color);
  color:  var(--main-color)
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  border:none;
  border-left:1px solid var(--disabled);
  font-size: 1.2rem;
  font-weight:bold;
  padding:2rem 2rem;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    color:var(--disabled);
  }

  &:not(:disabled):hover {
    background-color: var(--hover);
  }
 
  @media(max-width:768px){
  padding:3rem;
  border-bottom-left-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-left:none;
  border-top:1px solid var(--disabled)
  }
`;
