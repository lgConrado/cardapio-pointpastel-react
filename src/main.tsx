import React from "react";
import ReactDOM from "react-dom/client";
import Rotas from "./routes";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
};

:root{font-size: 16px;
font-family: "Inter", sans-serif;

background-color: var(--cor-fundo);
color: var(--cor-primaria);


--cor-primaria: #bdbdbd;
--cor-secundaria: #c9c9c9;
--cor-fundo: #121212;}
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Rotas />
    </React.StrictMode>
  </BrowserRouter>
);
