import styled from 'styled-components'
import Link from 'next/link'

interface Props {
    url?: string
}

const NavButton: React.FC<Props> = ({ children, url }) => {
    return (
        <Link href={url ? url : ''}>
            <a style={{ textDecoration: 'none' }}>
                <NavBarButtonStyle>{children}</NavBarButtonStyle>
            </a>
        </Link>
    )
}

export default NavButton

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

    @media (max-width: 400px) {
        min-width: 10rem;
    }
`
