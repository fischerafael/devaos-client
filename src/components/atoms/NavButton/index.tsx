import styled from 'styled-components'
import Link from 'next/link'

interface Props {
    url?: string
    active?: boolean
    action?(e: any): void
}

const NavButton: React.FC<Props> = ({ children, url, active, action }) => {
    return (
        <Link href={url ? url : '/'}>
            <a style={{ textDecoration: 'none' }}>
                {active ? (
                    <ActiveNavBarButtonStyle onClick={action}>
                        {children}
                    </ActiveNavBarButtonStyle>
                ) : (
                    <InactiveNavBarButtonStyle onClick={action}>
                        {children}
                    </InactiveNavBarButtonStyle>
                )}
            </a>
        </Link>
    )
}

export default NavButton

export const NavBarButtonStyle = styled.button`
    height: 4rem;
    min-width: 10rem;

    border-radius: 2rem;
    margin-right: 1rem;

    font-size: 1rem;
    font-weight: 700;

    transition: 0.5s;

    @media (max-width: 400px) {
        font-size: 0.75rem;
        min-width: 1rem;

        padding: 0 1rem;
    }
`
const ActiveNavBarButtonStyle = styled(NavBarButtonStyle)`
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.cian};
`
const InactiveNavBarButtonStyle = styled(NavBarButtonStyle)`
    color: ${({ theme }) => theme.color.dark};
    background: transparent;
`
