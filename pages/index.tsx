import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

import CustomHead from '../src/components/atoms/CustomHead'
import { DefaultButtonStyle } from '../src/components/atoms/DefaultButton'
import MainButton from '../src/components/atoms/MainButton'
import ProfileCard from '../src/components/molecules/ProfileCard'

import NavBar from '../src/components/organisms/NavBar'
import DefaultPageContainer from '../src/components/templates/DefaultPageContainer'
import devaosApi from '../src/services/devaos-api'

const home = ({ data }) => {
    const [initialData, setInitiaData] = useState(data)
    console.log(initialData)
    return (
        <>
            <CustomHead title="Dev Aos" />
            <NavBar />
            <DefaultPageContainer>
                <HeroContainerStyle>
                    <h1>DEV AOS</h1>
                    <h2>
                        O ponto de encontro de pessoas que resolveram entrar
                        mais tarde na carreira de tecnologia.
                    </h2>
                    <Link href="/register">
                        <a>
                            <MainButton>CRIAR PERFIL</MainButton>
                        </a>
                    </Link>
                </HeroContainerStyle>
            </DefaultPageContainer>
            <DefaultPageContainer>
                <UsersSectionStyle>
                    {data &&
                        data.map((user) => (
                            <ProfileCard
                                key={user._id}
                                avatar={user.personal?.avatar}
                                name={user.personal?.name}
                                title={user.personal?.title}
                                github={user.github}
                            />
                        ))}
                </UsersSectionStyle>
            </DefaultPageContainer>
            <DefaultPageContainer>
                <AboutSectionStyle>
                    <h1>Sobre</h1>
                    <p>
                        Dev Aos é uma plataforma que permite Devs criarem um CV
                        online facilmente e em poucos passos.
                    </p>
                    <div>
                        <img
                            src="https://avatars.githubusercontent.com/u/47259718?v=4"
                            alt=""
                        />
                        <h2>Rafael Fischer</h2>
                        <p>
                            Criador e idealizador do Dev Aos. Arquiteto e
                            urbanista que virou dev. Entusiasta de NextJS,
                            ReactJS, NodeJS, Typescript & Javascript. Curte UI /
                            UX também.
                        </p>
                        <p>
                            Atualmente, é aluno do Bootcamp Frontend Jamstack da
                            Alura (ganhou bolsa após ter o projeto AluraQuiz
                            selecionado em primeiro lugar dentre mais de 1500
                            propostas).
                        </p>
                        <DefaultButtonStyle>Ver Perfil</DefaultButtonStyle>
                    </div>
                </AboutSectionStyle>
            </DefaultPageContainer>
        </>
    )
}

export default home

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const response = await devaosApi.get('/users')
        const { data } = response

        return {
            props: {
                data
            },
            revalidate: 60
        }
    } catch (err) {}
}

export const UsersSectionStyle = styled.main`
    max-width: 80rem;
    width: 90%;
    padding-bottom: 10vh;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

export const AboutSectionStyle = styled.footer`
    background: ${({ theme }) => theme.color.white};
    max-width: 80rem;
    width: 90%;
    padding-bottom: 10vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 2rem;
        margin: 2rem;
    }

    p {
        max-width: 30rem;
        width: 90%;
        text-align: start;
        font-size: 1rem;
        margin: 1rem 0;
        margin-bottom: 2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 10rem;
            height: 10rem;
            border-radius: 5rem;
        }

        h2 {
            font-size: 2rem;
            margin: 2rem;
            text-align: center;
        }

        p {
            max-width: 30rem;
            width: 90%;
            text-align: start;
            font-size: 1rem;
            margin: 1rem 0;
        }
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

export const HeroContainerStyle = styled.main`
    max-width: 80rem;
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
