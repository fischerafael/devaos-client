import NavButton from '../../atoms/NavButton'

import styled from 'styled-components'
import Link from 'next/link'

import { useContext } from 'react'
import ThemeContext from '../../../contexts/theme'

import { FaSun, FaMoon } from 'react-icons/fa'

const NavBar = () => {
    const { handleChangeTheme, dark } = useContext(ThemeContext)

    return (
        <NavBarContainerStyle>
            <NavBarContentStyle>
                <Link href="/">
                    <a>
                        <NavBarLogoStyle
                            src={dark ? '/devaos-darktheme.svg' : '/devaos.svg'}
                        />
                    </a>
                </Link>

                <NavBarActionsStyle>
                    {dark ? (
                        <FaMoon onClick={handleChangeTheme} />
                    ) : (
                        <FaSun onClick={handleChangeTheme} />
                    )}
                    <NavButton url="/login">ENTRAR</NavButton>
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
export const NavBarLogoStyle = styled.img`
    cursor: pointer;
`
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
