import styled from 'styled-components'

const LoadingPage = () => {
    return (
        <LoadingPageStyle>
            <p>Carregando...</p>
        </LoadingPageStyle>
    )
}

export default LoadingPage

export const LoadingPageStyle = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: ${({ theme }) => theme.color.dark};
        font-weight: 900;
        font-size: 2rem;
    }
`
