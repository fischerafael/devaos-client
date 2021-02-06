import styled from 'styled-components'
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
                    <img src={avatar} alt={name} />
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
    height: 85vh;

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
        line-height: 5rem;
        align-self: flex-start;
    }

    h2 {
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
        line-height: 2rem;
        font-size: 1rem;

        min-width: 10rem;
        align-self: flex-start;
        width: 50%;
    }

    div {
        width: 8rem;
        align-self: flex-start;
        height: 2rem;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;
        padding: 10px 0;
    }
`
