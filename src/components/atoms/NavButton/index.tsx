import styled from 'styled-components'

const Button = ({ children }) => {
    return <NavBarButtonStyle>{children}</NavBarButtonStyle>
}

export default Button

export const NavBarButtonStyle = styled.button`
    height: 4rem;
    min-width: 15rem;

    border-radius: 2rem;

    font-size: 1rem;
    font-weight: 900;

    background: ${({ theme }) => theme.color.dark};
    color: ${({ theme }) => theme.color.white};

    transition: 0.5s;

    &:hover {
        background: ${({ theme }) => theme.color.cian};
    }
`
