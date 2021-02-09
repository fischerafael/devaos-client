import ExperienceCard from '../../molecules/ExperienceCard'
import SkillCard from '../../molecules/SkillCard'
import DefaultPageContainer from '../../templates/DefaultPageContainer'

import styled from 'styled-components'

interface IExperience {
    _id: string
    title: string
    institution: string
    location: string
    startedAt?: number
    finishedAt?: number
    description?: string
}

interface ISkill {
    _id: string
    title: string
    description?: string
}

interface Props {
    experiences?: IExperience[]
    skills?: ISkill[]
    type: 'professional' | 'education' | 'skill'
}

const ExperienceSection: React.FC<Props> = ({ experiences, type, skills }) => {
    return (
        <DefaultPageContainer>
            <ExperienceSectionHeaderStyle>
                {type === 'professional' && <h2>Profissional</h2>}
                {type === 'education' && <h2>Educação</h2>}
                {type === 'skill' && <h2>Habilidades</h2>}
            </ExperienceSectionHeaderStyle>

            {experiences && (
                <TwoColumnCardContainerStyle>
                    {experiences.length !== 0 &&
                        experiences.map((exp) => (
                            <ExperienceCard
                                key={exp._id}
                                title={exp.title}
                                startedAt={exp.startedAt}
                                finishedAt={exp.finishedAt}
                                institution={exp.institution}
                                location={exp.location}
                                description={exp.description}
                            />
                        ))}
                </TwoColumnCardContainerStyle>
            )}

            {skills && (
                <FourColumnCardContainerStyle>
                    {skills.length !== 0 &&
                        skills.map((skill) => (
                            <SkillCard
                                key={skill._id}
                                title={skill.title}
                                description={skill.description}
                            />
                        ))}
                </FourColumnCardContainerStyle>
            )}
        </DefaultPageContainer>
    )
}

export default ExperienceSection

export const ExperienceSectionHeaderStyle = styled.section`
    background: ${({ theme }) => theme.color.white};
    max-width: 80rem;
    width: 90%;
    padding-top: 4rem;
    padding-bottom: 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 3rem;
        line-height: 4rem;
        justify-self: flex-start;
    }
`
export const TwoColumnCardContainerStyle = styled.section`
    background: ${({ theme }) => theme.color.white};
    max-width: 80rem;
    width: 90%;
    padding: 2rem 0;
    min-height: 30vh;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

export const FourColumnCardContainerStyle = styled.section`
    background: ${({ theme }) => theme.color.white};
    max-width: 80rem;
    width: 90%;
    padding: 2rem 0;
    min-height: 30vh;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 360px) {
        grid-template-columns: 1fr;
    }
`
