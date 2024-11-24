import styled from "styled-components";

export const States = styled.h1`
  text-align: center;
  font-size: var(--state-size);
  margin-top: var(--state-margin);
  font-weight: bold;
  color: var(--character-color);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--background-color);
  height: 20%;
`;

export const Button = styled.button`
  padding: 2rem 6rem;
  margin-top: 3rem;
  background-color: var(--hover);
  color: var(--main-color);
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: var(--border-radius);
`;
