import { useState } from "react";
import cardapio from "./cardapio.json";
import styled from "styled-components";

const CustomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
`;

const CustomButtonsContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

const CustomButtons = styled.div`
  justify-content: center;
  display: flex;
  border: 1px solid var(--cor-primaria);
  width: 800px;
  overflow: hidden;
  border-radius: 64px;
`;

const CustomButton = styled.button`
  appearance: none;
  border-radius: 64px;
  height: 48px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--cor-secundaria);
  width: 200px;
  font-size: 1.25rem;
  transition: 0.2s background-color ease-in-out, 0.2s color ease-in-out;

  &:hover {
    color: var(--cor-fundo);
    background-color: var(--cor-primaria);
  }

  &[aria-actived="true"] {
    color: var(--cor-fundo);
    background-color: var(--cor-primaria);
  }
`;

const CustomCardapio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CustomSectionTitleContainer = styled.span`
  border-bottom: 1px solid var(--cor-primaria);
  padding: 0 0 8px 32px;
`;

const CustomSectionTitle = styled.h2`
  color: var(--cor-secundaria);
`;

const CustomOptions = styled.div`
  display: grid;
  flex-direction: column;
  column-gap: 32px;
  row-gap: 16px;
  padding: 0 32px;
  grid-template-columns: repeat(2, 1fr);
`;

const CustomOption = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  transition: 0.2s background-color ease-in-out;

  &:hover {
    background-color: #181818;

    > h3 {
      color: var(--cor-secundaria);
    }
  }
`;

const CustomDescriptionOption = styled.h3`
  transition: 0.2s color ease-in-out;
`;

const Cardapio = () => {
  const [filtro, setFiltro] = useState("");
  return (
    <CustomSection>
      <CustomButtonsContainer>
        <CustomButtons>
          {Object.entries(cardapio[0]).map((modulo: any, index) => {
            return (
              <CustomButton
                key={index}
                onClick={() => {
                  console.log(modulo[0]);
                  if (filtro === modulo[0]) {
                    setFiltro("");
                  } else {
                    setFiltro(modulo[0]);
                  }
                }}
                aria-actived={filtro === modulo[0]}
              >
                {modulo[0]}
              </CustomButton>
            );
          })}
        </CustomButtons>
      </CustomButtonsContainer>
      {Object.entries(cardapio[0])
        .filter((item: any) => {
          return filtro === "" ? true : item[0] === filtro ? true : false;
        })
        .map((modulo: any, index) => {
          return (
            <CustomCardapio key={index}>
              <CustomSectionTitleContainer>
                <CustomSectionTitle>{modulo[0]}</CustomSectionTitle>
              </CustomSectionTitleContainer>
              <CustomOptions>
                {modulo[1].map((opcao: any, index: number) => {
                  return (
                    <CustomOption key={index}>
                      <CustomDescriptionOption>
                        {opcao.titulo}
                      </CustomDescriptionOption>
                      <CustomDescriptionOption>
                        {opcao.valor.toLocaleString(`pt-br`, {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </CustomDescriptionOption>
                    </CustomOption>
                  );
                })}
              </CustomOptions>
            </CustomCardapio>
          );
        })}
    </CustomSection>
  );
};

export default Cardapio;
