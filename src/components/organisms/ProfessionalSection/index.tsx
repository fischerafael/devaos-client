import React from 'react'
import styled from 'styled-components'
import ProfessionalCard from '../../molecules/ProfessionalCard'
import DefaultPageContainer from '../../templates/DefaultPageContainer'

interface IJobs {
    id: string
    jobTitle: string
    jobCompany: string
    jobLocation: string
    jobStarted: number
    jobFinished: number
    jobCurrent: boolean
    jobDescription?: string
}

interface Props {
    jobs: IJobs[]
}

const ProfessionalSection: React.FC<Props> = ({ jobs }) => {
    return (
        <DefaultPageContainer>
            <ProfessionalSectionHeaderStyle>
                <h2>Profissional</h2>
                <TwoColumnCardContainerStyle>
                    {jobs.length &&
                        jobs.map((job) => (
                            <ProfessionalCard
                                key={job.id}
                                jobTitle={job.jobTitle}
                                jobStarted={job.jobStarted}
                                jobFinished={job.jobFinished}
                                jobCurrent={job.jobCurrent}
                                jobCompany={job.jobCompany}
                                jobLocation={job.jobLocation}
                                jobDescription={job.jobDescription}
                            />
                        ))}
                </TwoColumnCardContainerStyle>
            </ProfessionalSectionHeaderStyle>
        </DefaultPageContainer>
    )
}

export default ProfessionalSection

export const ProfessionalSectionHeaderStyle = styled.section`
    background: ${({ theme }) => theme.color.white};
    max-width: 80rem;
    width: 90%;
    padding: 2rem 0;
    min-height: 50vh;

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
    width: 100%;
    padding: 2rem 0;
    min-height: 30vh;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`
