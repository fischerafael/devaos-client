import styled from 'styled-components'
import SocialIcon from '../../atoms/SocialIcon'

const HeaderProfile = () => {
    return (
        <ProfileHeaderContainerStyle>
            <ProfileHeaderContentStyle>
                <ContentCotainerStyle>
                    <img
                        src="https://avatars.githubusercontent.com/u/47259718?v=4"
                        alt=""
                    />
                </ContentCotainerStyle>
                <ContentCotainerStyle>
                    <h1>Rafael Fischer</h1>
                    <h2>
                        Desenvolvedor React, NextJS, NodeJS, Typescript &
                        Javascript, UX & UI Designer, Produtor de Conteúdo
                    </h2>
                    <div>
                        <SocialIcon
                            link="/"
                            image="/web.svg"
                            title="Linkedin"
                        />
                        <SocialIcon
                            link="/"
                            image="/linkedin.svg"
                            title="Linkedin"
                        />
                        <SocialIcon
                            link="/github"
                            image="/github.svg"
                            title="Linkedin"
                        />
                    </div>
                </ContentCotainerStyle>
            </ProfileHeaderContentStyle>
        </ProfileHeaderContainerStyle>
    )
}

export default HeaderProfile

export const ProfileHeaderContainerStyle = styled.main`
    background: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 85vh;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const ProfileHeaderContentStyle = styled.section`
    max-width: 1024px;
    width: 90%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`
export const ContentCotainerStyle = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 20rem;
        height: 20rem;
        border-radius: 10rem;
    }

    h1 {
        font-weight: 900;
        font-size: 4rem;
        align-self: flex-start;
    }

    h2 {
        font-weight: 400;
        font-size: 1rem;
        font-family: 'Roboto Slab', serif;
        width: 50%;
        min-width: 10rem;
        align-self: flex-start;
    }

    div {
        width: 8rem;
        align-self: flex-start;
        height: 2rem;
        display: flex;
        justify-content: space-between;
    }
`
