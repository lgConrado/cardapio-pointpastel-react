import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import logo from "../../assets/logo.jpg";

const CustomFooter = styled.footer`
  border-top: 1px solid var(--cor-primaria);
  display: flex;
  padding: 32px;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  margin-top: 128px;
  width: 100%;
`;

const CustomTextoLogo = styled.h2`
  font-size: 1.25rem;
`;

const CustomLogo = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`;

const CustomImagemLogo = styled.img`
  height: 64px;
  width: 64px;
`;

const CustomLista = styled.ul`
  display: flex;
  gap: 64px;
  justify-content: center;
  list-style: none;
`;

const CustomItem = styled.li`
  text-decoration: none;
`;

const CustomIcon = styled.span`
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
`;

const CustomCopyright = styled.div`
  padding: 16px 0;
  text-align: center;
  transition: 0.2s color ease-in-out;

  &:hover {
    color: var(--cor-secundaria);
  }
`;

const Footer = () => {
  return (
    <CustomFooter>
      <CustomLogo>
        <CustomImagemLogo src={logo} />
        <span>
          <CustomTextoLogo>Point</CustomTextoLogo>
          <CustomTextoLogo>do Pastel</CustomTextoLogo>
        </span>
      </CustomLogo>
      <CustomLista>
        <CustomItem>
          <CustomIcon>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ width: "32px", height: "32px" }}
            />
          </CustomIcon>
        </CustomItem>
        <CustomItem>
          <CustomIcon>
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ width: "32px", height: "32px" }}
            />
          </CustomIcon>
        </CustomItem>
        <CustomItem>
          <CustomIcon>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ width: "32px", height: "32px" }}
            />
          </CustomIcon>
        </CustomItem>
        <CustomItem>
          <CustomIcon>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ width: "32px", height: "32px" }}
            />
          </CustomIcon>
        </CustomItem>
      </CustomLista>
      <CustomCopyright>
        <h3>
          &copy; 2024 - Luiz Gustavo Conrado. Todos os direitos reservados.
        </h3>
      </CustomCopyright>
    </CustomFooter>
  );
};

export default Footer;
