import Button from '../../atoms/NavButton'

import styled from 'styled-components'

import { useContext } from 'react'
import ThemeContext from '../../../contexts/theme'

import { FaSun, FaMoon } from 'react-icons/fa'

const NavBar = () => {
    const { handleChangeTheme, dark } = useContext(ThemeContext)

    return (
        <NavBarContainerStyle>
            <NavBarContentStyle>
                <NavBarLogoStyle
                    src={dark ? '/devaos-darktheme.svg' : '/devaos.svg'}
                />
                <NavBarActionsStyle>
                    {dark ? (
                        <FaMoon onClick={handleChangeTheme} />
                    ) : (
                        <FaSun onClick={handleChangeTheme} />
                    )}
                    <Button>ENTRAR</Button>
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

    background: ${({ theme }) => theme.color.white};
`
export const NavBarContentStyle = styled.nav`
    width: 90%;
    max-width: 1024px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const NavBarLogoStyle = styled.img``
export const NavBarActionsStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        cursor: pointer;
        color: ${({ theme }) => theme.color.ultraDark};

        width: 1.5rem;
        height: 1.5rem;

        transition: 0.5s;

        margin-right: 1rem;

        &:hover {
            color: ${({ theme }) => theme.color.cian};
        }
    }
`
