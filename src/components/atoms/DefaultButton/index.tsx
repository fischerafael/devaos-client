import styled from 'styled-components'

interface Props {
    url?: string
    action?(e: any): void
}

const DefaultButton: React.FC<Props> = ({ children, action }) => {
    return <DefaultButtonStyle onClick={action}>{children}</DefaultButtonStyle>
}

export default DefaultButton

export const DefaultButtonStyle = styled.button`
    height: 4rem;
    padding: 0 2rem;

    border-radius: 2rem;

    font-size: 1rem;
    font-weight: 900;

    background: ${({ theme }) => theme.color.cian};
    color: ${({ theme }) => theme.color.white};

    transition: 0.5s;

    margin: 1rem 0;

    &:hover {
        background: ${({ theme }) => theme.color.dark};
        color: ${({ theme }) => theme.color.white};
    }

    @media (max-width: 400px) {
        min-width: 10rem;
    }
`
