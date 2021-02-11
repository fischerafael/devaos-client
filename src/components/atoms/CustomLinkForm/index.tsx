import Link from 'next/link'
import styled from 'styled-components'

interface Props {
    href: string
}

const CustomLinkForm: React.FC<Props> = ({ href, children }) => {
    return (
        <Link href={href}>
            <CustomLinkStyle>{children}</CustomLinkStyle>
        </Link>
    )
}

export default CustomLinkForm

export const CustomLinkStyle = styled.a`
    color: ${({ theme }) => theme.color.dark};
    text-decoration: none;
    cursor: pointer;
    font-size: 0.75rem;

    line-height: 0.75rem;
    margin: 1rem;
    margin-bottom: 1rem;

    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.color.cian};
    }
`
