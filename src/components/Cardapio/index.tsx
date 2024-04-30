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
  height: 48px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--cor-secundaria);
  width: 200px;
  font-size: 1.25rem;
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
  gap: 16px;
  padding: 0 32px;
  grid-template-columns: repeat(2, 1fr);
`;

const CustomOption = styled.span`
  display: flex;
  justify-content: space-between;
`;

const CustomDescriptionOption = styled.h3``;

const Cardapio = () => {
  return (
    <CustomSection>
      <CustomButtonsContainer>
        <CustomButtons>
          {Object.entries(cardapio[0]).map((modulo: any, index) => {
            console.log(modulo[0]);
            return <CustomButton>{modulo[0]}</CustomButton>;
          })}
        </CustomButtons>
      </CustomButtonsContainer>
      {Object.entries(cardapio[0]).map((modulo: any, index) => {
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
