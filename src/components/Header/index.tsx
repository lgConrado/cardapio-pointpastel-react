import styled from "styled-components"

const CustomHeader = styled.header`
    align-items: center;
    display: flex;
    padding: 32px 0;
    justify-content: center;
    width: 100vw;
`
const CustomTitulo = styled.h1`
    color: var(--cor-secundaria);
    font-size: 2.5rem;
    font-weight: 700;
`
const Header = () => {
    return(
        <CustomHeader>
            <CustomTitulo>Cardápio</CustomTitulo>
        </CustomHeader>
    )
}

export default Header