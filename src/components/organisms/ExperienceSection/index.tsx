import ExperienceCard from '../../molecules/ProfessionalCard'
import DefaultPageContainer from '../../templates/DefaultPageContainer'

import styled from 'styled-components'

interface IExperience {
    id: string
    title: string
    institution: string
    location: string
    startedAt: number
    finishedAt?: number
    currentStatus: boolean
    description?: string
}

interface Props {
    experiences: IExperience[]
    type: 'professional' | 'education'
}

const ExperienceSection: React.FC<Props> = ({ experiences, type }) => {
    return (
        <DefaultPageContainer>
            <ExperienceSectionHeaderStyle>
                {type === 'professional' && <h2>Profissional</h2>}
                {type === 'education' && <h2>Educação</h2>}
            </ExperienceSectionHeaderStyle>
            <TwoColumnCardContainerStyle>
                {experiences.length &&
                    experiences.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            title={exp.title}
                            startedAt={exp.startedAt}
                            finishedAt={exp.finishedAt}
                            currentStatus={exp.currentStatus}
                            institution={exp.institution}
                            location={exp.location}
                            description={exp.description}
                        />
                    ))}
            </TwoColumnCardContainerStyle>
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
