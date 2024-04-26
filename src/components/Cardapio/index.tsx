import cardapio from "./cardapio.json";
import styled from "styled-components";

const CustomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 32px;
`;

const CustomOption = styled.span`
  display: flex;
  justify-content: space-between;
`;

const CustomDescriptionOption = styled.h3``;

const Cardapio = () => {
  return (
    <CustomSection>
      {Object.entries(cardapio[0]).map((modulo: any, index) => {
        return (
          <CustomCardapio key={index}>
            <CustomSectionTitleContainer>
              <CustomSectionTitle>{modulo[0]}</CustomSectionTitle>
            </CustomSectionTitleContainer>
            <CustomOptions>
              {modulo[1].map((opcao: any) => {
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
