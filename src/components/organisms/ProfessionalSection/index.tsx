import React from 'react'
import styled from 'styled-components'
import DefaultPageContainer from '../../templates/DefaultPageContainer'

const ProfessionalSection = () => {
    return (
        <DefaultPageContainer>
            <ProfessionalSectionHeaderStyle>
                <h2>Profissional</h2>
                <TwoColumnCardContainerStyle>
                    <ProfessionalCardContainerStyle>
                        <div>
                            <h3>
                                Desenvolvedor Web, UX Designer & UI Designer
                            </h3>
                        </div>
                    </ProfessionalCardContainerStyle>
                    <p>Oisss</p>
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
    min-height: 50vh;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`
export const ProfessionalCardContainerStyle = styled.div`
    background: ${({ theme }) => theme.color.lightGrey};
    border-radius: 1rem;
    padding: 2rem;
`
