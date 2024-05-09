import styled from "styled-components";
import logo from "../../assets/logo.jpg";

const CustomHeader = styled.header`
  align-items: center;
  display: flex;
  width: 100vw;

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

const CustomConteudo = styled.span`
  padding: 32px 24px;

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`;

const CustomTextoLogo = styled.h2`
  font-size: 1.25rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CustomLogo = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const CustomImagemLogo = styled.img`
  height: 64px;
  width: 64px;

  @media (max-width: 480px) {
    height: 48px;
    width: 48px;
  }
`;

const Header = () => {
  return (
    <CustomHeader>
      <CustomConteudo>
        <CustomLogo>
          <CustomImagemLogo src={logo} />
          <span>
            <CustomTextoLogo>Point</CustomTextoLogo>
            <CustomTextoLogo>do Pastel</CustomTextoLogo>
          </span>
        </CustomLogo>
      </CustomConteudo>
    </CustomHeader>
  );
};

export default Header;
