import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
    url?: string
    action?(e: any): void
}

const AuthNavButton: React.FC<Props> = ({ children, url, action }) => {
    const { query } = useRouter()
    const { github } = query

    return (
        <Link href={url ? url : github ? `/${github}` : '/'}>
            <a style={{ textDecoration: 'none' }}>
                <NavBarButtonStyle onClick={action}>
                    {children}
                </NavBarButtonStyle>
            </a>
        </Link>
    )
}

export default AuthNavButton

export const NavBarButtonStyle = styled.button`
    height: 4rem;
    min-width: 10rem;

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
        min-width: 5rem;
    }
`
