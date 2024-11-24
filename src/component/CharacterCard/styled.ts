import styled from "styled-components";

export const Character = styled.article`
  cursor: pointer;
  display: flex;
  background-color: var(--character-color);
  margin-top: 5rem;
  border-radius: var(--border-radius);
  color: var(--main-color);
  min-height: var(--height); 
  overflow: hidden; 
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  @media (max-width: 768px) {
    width: 42rem;
    border-bottom-left-radius: 0;
    border-top-right-radius: var(--border-radius);
  }
`;

export const Texts = styled.div`
  text-align: left;
  margin-left: var(--horizontal-margin);
  margin-right:  var(--horizontal-margin);
  margin-bottom: var(--vertical-margin);
  width: 100%;
  justify-content:space-between;
  overflow:hidden
`;

export const CharacterName = styled.h1`
  font-size: 2.5rem;
  margin-top: var(--vertical-margin);
  white-space: nowrap;       
  overflow: hidden;          
  text-overflow: ellipsis;
  &:hover {
    color: var(--hover);
  }
`;

export const Circle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.4rem;
  background-color: ${(props) => props.color};
`;

export const Status = styled.p`
  font-size: var(--font-size);
  margin-bottom: 1.5rem;
`;

export const Location = styled.p`
  font-size: var(--font-size);
  margin-bottom: 0.7rem;
  color: var(--disabled);
`;

export const LocationContainer=styled.div`
width:var(--location-size);
`;

export const LocationName = styled.p`
  color: var(--main-color);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  white-space: nowrap;      
  overflow: hidden;          
  text-overflow: ellipsis;  
`;

export const LocationNameContainer = styled.div`
  width: var(--location-size);
`;
