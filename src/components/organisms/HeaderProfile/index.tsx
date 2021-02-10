import styled from 'styled-components'
import Avatar from '../../atoms/Avatar'
import SocialIcon from '../../atoms/SocialIcon'
import DefaultPageContainer from '../../templates/DefaultPageContainer'

interface Props {
    avatar: string
    name: string
    description: string
    github: string
    linkedin?: string
    web?: string
}

const HeaderProfile: React.FC<Props> = ({
    avatar,
    name,
    description,
    github,
    linkedin,
    web
}) => {
    return (
        <DefaultPageContainer>
            <ProfileHeaderContentStyle>
                <ContentCotainerStyle>
                    <Avatar alt={name} avatar={avatar} />
                </ContentCotainerStyle>
                <ContentCotainerStyle>
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                    <div>
                        <SocialIcon link={github} type="github" />
                        {linkedin && (
                            <SocialIcon link={linkedin} type="linkedin" />
                        )}
                        {web && <SocialIcon link={web} type="web" />}
                    </div>
                </ContentCotainerStyle>
            </ProfileHeaderContentStyle>
        </DefaultPageContainer>
    )
}

export default HeaderProfile

export const ProfileHeaderContentStyle = styled.section`
    max-width: 1024px;
    width: 90%;
    min-height: 85vh;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
export const ContentCotainerStyle = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: 900;
        font-size: 4rem;
        line-height: 5rem;
        align-self: flex-start;

        @media (max-width: 800px) {
            align-self: center;
            text-align: center;
        }

        @media (max-width: 400px) {
            font-size: 3rem;
        }
    }

    h2 {
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
        line-height: 2rem;
        font-size: 1rem;

        min-width: 10rem;
        align-self: flex-start;
        width: 50%;

        @media (max-width: 800px) {
            align-self: center;
            text-align: center;
            width: 90%;
        }
    }

    div {
        width: 8rem;
        align-self: flex-start;
        height: 2rem;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;
        padding: 10px 0;

        @media (max-width: 800px) {
            align-self: center;
        }
    }
`
