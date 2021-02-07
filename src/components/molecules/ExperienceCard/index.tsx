import React from 'react'
import styled from 'styled-components'

interface Props {
    title: string
    institution: string
    location: string
    description?: string
    startedAt: number
    finishedAt: number
    currentStatus: boolean
}

const ExperienceCard: React.FC<Props> = ({
    title,
    institution,
    location,
    description,
    startedAt,
    finishedAt,
    currentStatus
}) => {
    return (
        <ExperienceCardContainerStyle>
            <ExperienceCardHeaderStyle>
                <h3>{title}</h3>
                {currentStatus || !finishedAt ? (
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
    background: ${({ theme }) => theme.color.lightGrey};
    border-radius: 1rem;
    border: solid 0.5px ${({ theme }) => theme.color.grey};
    padding: 2rem;
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
        }
    }

    h4 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
    }

    p {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin-bottom: 1rem;

        span {
            font-weight: 900;
            font-size: 1.2rem;
            line-height: 1.5rem;
            margin-right: 0.5rem;
        }
    }
`
export const ExperienceCardContentStyle = styled.div`
    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 1rem 0;

        min-width: 50%;
        width: 90%;

        margin-bottom: 0;

        display: flex;

        @media (max-width: 800px) {
            width: 100%;
        }
    }
`
