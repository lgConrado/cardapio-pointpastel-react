import styled from "styled-components";
import logo from "../../assets/logo.jpg";

const CustomHeader = styled.header`
  align-items: center;
  display: flex;
  padding: 32px 0;
  justify-content: center;
  width: 100vw;
`;

const CustomTitulo = styled.h1`
  color: var(--cor-secundaria);
  font-size: 2.5rem;
  font-weight: 700;
`;

const CustomTextoLogo = styled.h2`
  font-size: 1.25rem;
`;

const CustomLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  left: 24px;
  top: 24px;
`;

const CustomImagemLogo = styled.img`
  height: 64px;
  width: 64px;
`;

const Header = () => {
  return (
    <CustomHeader>
      <CustomLogo>
        <CustomImagemLogo src={logo} />
        <span>
          <CustomTextoLogo>Point</CustomTextoLogo>
          <CustomTextoLogo>do Pastel</CustomTextoLogo>
        </span>
      </CustomLogo>
      <CustomTitulo>Cardápio</CustomTitulo>
    </CustomHeader>
  );
};

export default Header;
