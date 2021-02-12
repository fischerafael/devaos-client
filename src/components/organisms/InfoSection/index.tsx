import { useContext } from 'react'
import styled from 'styled-components'
import AuthContext from '../../../contexts/auth'
import BioContext from '../../../contexts/profile/bio'
import { CustomTrash } from '../../atoms/CustomTrash/styles'
import DefaultPageContainer from '../../templates/DefaultPageContainer'

interface Props {
    bio: string
}

const InfoSection: React.FC<Props> = ({ bio }) => {
    const { user } = useContext(AuthContext)
    const { handleDeleteBio } = useContext(BioContext)

    return (
        <DefaultPageContainer>
            <TwoColumnPageContentStyle>
                <div>
                    <h2>Sobre</h2>
                </div>
                <div>
                    {user.isOwner && <CustomTrash onClick={handleDeleteBio} />}
                    <p>{bio}</p>
                </div>
            </TwoColumnPageContentStyle>
        </DefaultPageContainer>
    )
}

export default InfoSection

export const TwoColumnPageContentStyle = styled.section`
    background: ${({ theme }) => theme.color.white};
    max-width: 80rem;
    width: 90%;
    padding-top: 2rem;
    padding-bottom: 4rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        h2 {
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 3rem;
            line-height: 4rem;
            justify-self: flex-start;
        }

        p {
            font-family: 'Roboto Slab', serif;
            font-weight: 400;
            line-height: 2rem;
            font-size: 1rem;

            min-width: 30rem;
            width: 75%;

            @media (max-width: 800px) {
                min-width: 10rem;
                width: 90%;
            }
        }
    }
`
