import styled from 'styled-components'
import CustomHead from '../src/components/atoms/CustomHead'
import MainButton from '../src/components/atoms/MainButton'
import NavBar from '../src/components/organisms/NavBar'
import DefaultPageContainer from '../src/components/templates/DefaultPageContainer'

const home = () => {
    return (
        <>
            <CustomHead title="Rafael Fischer" />
            <NavBar />
            <DefaultPageContainer>
                <HeroContainerStyle>
                    <h1>DEV AOS</h1>
                    <h2>
                        O ponto de encontro de pessoas que resolveram entrar
                        mais tarde na carreira de tecnologia.
                    </h2>
                    <MainButton>CRIAR PERFIL</MainButton>
                </HeroContainerStyle>
            </DefaultPageContainer>
        </>
    )
}

export default home

export const HeroContainerStyle = styled.main`
    max-width: 1024px;
    width: 90%;
    min-height: 85vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: sans-serif;
        font-size: 12rem;
        color: transparent;
        -webkit-text-stroke-width: 4px;
        -webkit-text-stroke-color: ${({ theme }) => theme.color.head};

        text-shadow: 0px 0px 30px ${({ theme }) => theme.color.blur};
        text-align: center;

        @media (max-width: 800px) {
            font-size: 8rem;
            -webkit-text-stroke-width: 3px;
        }

        @media (max-width: 480px) {
            font-size: 5rem;
            -webkit-text-stroke-width: 2px;
        }
    }

    h2 {
        font-family: 'Roboto Slab', sans-serif;
        font-weight: 400;
        font-size: 1.5rem;

        text-align: center;

        min-width: 10rem;
        width: 70%;

        @media (max-width: 800px) {
            font-size: 1rem;
        }

        @media (max-width: 480px) {
            font-size: 0.75rem;
        }
    }
`
