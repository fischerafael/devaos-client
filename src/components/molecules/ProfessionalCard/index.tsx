import React from 'react'
import styled from 'styled-components'

interface Props {
    jobTitle: string
    jobCompany: string
    jobLocation: string
    jobDescription?: string
    jobStarted: number
    jobFinished: number
    jobCurrent: boolean
}

const ProfessionalCard: React.FC<Props> = ({
    jobTitle,
    jobCompany,
    jobLocation,
    jobDescription,
    jobStarted,
    jobFinished,
    jobCurrent
}) => {
    return (
        <ProfessionalCardContainerStyle>
            <ProfessionalCardHeaderStyle>
                <h3>{jobTitle}</h3>
                {jobCurrent ? (
                    <h4>{jobStarted} - atualmente</h4>
                ) : (
                    <h4>
                        {jobStarted} - {jobFinished}
                    </h4>
                )}

                <p>
                    <span>{jobCompany}</span>
                    {jobLocation}
                </p>
            </ProfessionalCardHeaderStyle>
            {jobDescription && (
                <ProfessionalCardContentStyle>
                    <p>{jobDescription}</p>
                </ProfessionalCardContentStyle>
            )}
        </ProfessionalCardContainerStyle>
    )
}

export default ProfessionalCard

export const ProfessionalCardContainerStyle = styled.div`
    background: ${({ theme }) => theme.color.lightGrey};
    border-radius: 1rem;
    border: solid 0.5px ${({ theme }) => theme.color.grey};
    padding: 2rem;
`
export const ProfessionalCardHeaderStyle = styled.div`
    h3 {
        font-weight: 900;
        font-size: 2rem;
        line-height: 2.5rem;

        width: 70%;
        min-width: 50%;

        padding: 1rem 0;
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
export const ProfessionalCardContentStyle = styled.div`
    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 1rem 0;

        min-width: 50%;
        width: 75%;

        margin-bottom: 0;

        display: flex;
    }
`
