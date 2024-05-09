import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CustomFooter = styled.footer`
  border-top: 1px solid var(--cor-primaria);
  margin-top: 128px;
  width: 100vw;
`;

const CustomConteudo = styled.span`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
`;

const CustomLista = styled.ul`
  display: flex;
  gap: 64px;
  justify-content: center;
  list-style: none;

  @media (max-width: 720px) {
    gap: 32px;
  }
  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const CustomItem = styled.li`
  text-decoration: none;
`;

const CustomIconContainer = styled.span`
  align-items: center;
  border: 3px solid var(--cor-primaria);
  border-radius: 128px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 16px;
  transition: 0.3s color ease-in-out, 0.3s background-color ease-in-out;

  &:hover {
    background-color: var(--cor-primaria);
    color: var(--cor-fundo);
  }

  @media (max-width: 720px) {
    padding: 12px;
  }
  @media (max-width: 480px) {
    border: 2px solid var(--cor-primaria);
  }
`;

const CustomIcon = styled(FontAwesomeIcon)`
  height: 32px;
  width: 32px;

  @media (max-width: 480px) {
    height: 24px;
    width: 24px;
  }
`;

const CustomCopyright = styled.div`
  padding: 16px 0;
  text-align: center;
  transition: 0.2s color ease-in-out;

  &:hover {
    color: var(--cor-secundaria);
  }
`;

const CustomCopyrightText = styled.h3`
  font-size: 1.25rem;

  @media (max-width: 720px) {
    font-size: 1.125rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <CustomFooter>
      <CustomConteudo>
        <CustomLista>
          <CustomItem>
            <CustomIconContainer>
              <CustomIcon icon={faInstagram} />
            </CustomIconContainer>
          </CustomItem>
          <CustomItem>
            <CustomIconContainer>
              <CustomIcon icon={faWhatsapp} />
            </CustomIconContainer>
          </CustomItem>
          <CustomItem>
            <CustomIconContainer>
              <CustomIcon icon={faGithub} />
            </CustomIconContainer>
          </CustomItem>
          <CustomItem>
            <CustomIconContainer>
              <CustomIcon icon={faLinkedin} />
            </CustomIconContainer>
          </CustomItem>
        </CustomLista>
        <CustomCopyright>
          <CustomCopyrightText>
            &copy; 2024 - Luiz Gustavo Conrado. Todos os direitos reservados.
          </CustomCopyrightText>
        </CustomCopyright>
      </CustomConteudo>
    </CustomFooter>
  );
};

export default Footer;
