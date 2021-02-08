import React from 'react'
import styled from 'styled-components'

interface Props {
    title: string
    description?: string
}

const SkillCard: React.FC<Props> = ({ title, description }) => {
    return (
        <SkillCardContainerStyle>
            <SkillHeaderCardStyle>
                <h3>{title}</h3>
            </SkillHeaderCardStyle>
            {description && (
                <ExperienceBodyCardStyle>
                    <p>{description}</p>
                </ExperienceBodyCardStyle>
            )}
        </SkillCardContainerStyle>
    )
}

export default SkillCard

export const SkillCardContainerStyle = styled.div`
    background: ${({ theme }) => theme.color.lightGrey};
    border-radius: 1rem;
    border: solid 0.5px ${({ theme }) => theme.color.grey};
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const SkillHeaderCardStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        font-weight: 900;
        font-size: 1.5rem;
        line-height: 1.5rem;

        min-width: 50%;

        padding-right: 1rem;
        text-align: center;

        @media (max-width: 800px) {         
            font-size: 1.5rem;
            line-height:1.25rem;
        }
    }
`
export const ExperienceBodyCardStyle = styled.div`
    p {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1rem;
        margin: 1rem 0;

        min-width: 50%;
        width: 100%;

        margin-bottom: 0;

        text-align: center;
    }
`
