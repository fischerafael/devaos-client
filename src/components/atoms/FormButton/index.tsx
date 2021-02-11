import styled from 'styled-components'

export const FormButton = styled.button`
    height: 3rem;
    min-width: 15rem;
    width: 100%;

    border-radius: 1.5rem;

    font-size: 1rem;
    font-weight: 900;

    background: ${({ theme }) => theme.color.cianBtn};
    color: ${({ theme }) => theme.color.white};

    transition: 0.5s;

    margin: 1rem 0;

    &:hover {
        background: ${({ theme }) => theme.color.greyBtn};
    }

    @media (max-width: 400px) {
        min-width: 10rem;
    }
`
