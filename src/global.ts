import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
:root {
    
    --main-color: white;
    --background-color:#272b33;
    --character-color:#3c3e44;
    --border-radius:1rem;
    --disabled:rgb(158, 158, 158);
    --hover:orange;
    --height:100%;
    --horizontal-margin:1.25rem;
    --vertical-margin:1.6rem;
    --font-size:1.4rem;
    --location-size:24rem;
    --state-size:3rem;
    --state-margin:19rem;
    --padding:3rem 
  }
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    height: 100%;
    font-family: "Golos Text", sans-serif;
  }
`;
