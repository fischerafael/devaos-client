import React, { useContext } from 'react'
import styled from 'styled-components'
import AuthContext from '../../../contexts/auth'
import ExpContext from '../../../contexts/profile/exp'
import { CustomCardTrash } from '../../atoms/CustomTrash/styles'

interface Props {
    id: string
    title: string
    institution: string
    location: string
    description?: string
    startedAt: number
    finishedAt: number
}

const ExperienceCard: React.FC<Props> = ({
    title,
    institution,
    location,
    description,
    startedAt,
    finishedAt,
    id
}) => {
    const { user } = useContext(AuthContext)
    const { handleDeleteExp } = useContext(ExpContext)
    console.log('id', id)

    return (
        <ExperienceCardContainerStyle>
            {user.isOwner && (
                <CustomCardTrash onClick={() => handleDeleteExp(id)} />
            )}
            <ExperienceCardHeaderStyle>
                <h3>{title}</h3>
                {!finishedAt ? (
                    <h4>{startedAt} - atualmente</h4>
                ) : (
                    <h4>
                        {startedAt} - {finishedAt}
                    </h4>
                )}

                <p>
                    <span>{institution}</span>
                    {location}
                </p>
            </ExperienceCardHeaderStyle>
            {description && (
                <ExperienceCardContentStyle>
                    <p>{description}</p>
                </ExperienceCardContentStyle>
            )}
        </ExperienceCardContainerStyle>
    )
}

export default ExperienceCard

export const ExperienceCardContainerStyle = styled.div`
    position: relative;
    background: ${({ theme }) => theme.color.lightGrey};
    border-radius: 1rem;
    border: solid 0.5px ${({ theme }) => theme.color.grey};
    padding: 2rem;
    padding-bottom: 2.5rem;
`
export const ExperienceCardHeaderStyle = styled.div`
    h3 {
        font-weight: 900;
        font-size: 2rem;
        line-height: 2.5rem;

        width: 80%;
        min-width: 50%;

        padding: 1rem 0;

        @media (max-width: 800px) {
            width: 90%;

            font-size: 1.5rem;
            line-height: 2rem;
        }
    }

    h4 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;

        @media (max-width: 800px) {
            font-size: 0.75rem;
            line-height: 1.25rem;
        }
    }

    p {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin-bottom: 1rem;

        @media (max-width: 800px) {
            font-size: 1rem;
            line-height: 1.25rem;
        }

        span {
            font-weight: 900;
            font-size: 1.2rem;
            line-height: 1.5rem;
            margin-right: 0.5rem;

            @media (max-width: 800px) {
                font-size: 1rem;
                line-height: 1.25rem;
            }
        }
    }
`
export const ExperienceCardContentStyle = styled.div`
    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.75rem;
        margin: 1rem 0;

        min-width: 50%;
        width: 90%;

        margin-bottom: 0;

        display: flex;

        @media (max-width: 800px) {
            width: 100%;
            font-size: 1rem;
            line-height: 1.75rem;
        }
    }
`
