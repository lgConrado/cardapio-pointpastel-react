import styled from "styled-components";
import logo from "../../assets/logo.jpg";

const CustomHeader = styled.header`
  align-items: center;
  display: flex;
  padding: 32px 24px;
  width: 100vw;
`;


const CustomTextoLogo = styled.h2`
  font-size: 1.25rem;
`;

const CustomLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
    </CustomHeader>
  );
};

export default Header;