import styled from 'styled-components'

const MainButton = ({ children }) => {
    return <NavBarButtonStyle>{children}</NavBarButtonStyle>
}

export default MainButton

export const NavBarButtonStyle = styled.button`
    height: 4rem;
    min-width: 15rem;

    border-radius: 2rem;

    font-size: 1rem;
    font-weight: 900;

    background: ${({ theme }) => theme.color.cianBtn};
    color: ${({ theme }) => theme.color.white};

    transition: 0.5s;

    margin: 2rem 0;
    margin-top: 4rem;

    &:hover {
        background: ${({ theme }) => theme.color.greyBtn};
    }

    @media (max-width: 400px) {
        min-width: 10rem;
    }
`
