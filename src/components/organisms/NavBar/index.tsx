import Button from '../../atoms/NavButton'

import styled from 'styled-components'

const NavBar = () => {
    return (
        <NavBarContainerStyle>
            <NavBarContentStyle>
                <NavBarLogoStyle src="/devaos.svg" />
                <NavBarActionsStyle>
                    <Button>SAIR</Button>
                </NavBarActionsStyle>
            </NavBarContentStyle>
        </NavBarContainerStyle>
    )
}

export default NavBar

export const NavBarContainerStyle = styled.header`
    width: 100vw;
    height: 15vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: white;
`
export const NavBarContentStyle = styled.nav`
    width: 90%;
    max-width: 1024px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const NavBarLogoStyle = styled.img``
export const NavBarActionsStyle = styled.div``
