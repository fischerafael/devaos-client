import React from 'react'
import styled from 'styled-components'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface Props {
    pages: object[]
    currentPage: number
    previous(e: any): void
    next(e: any): void
}

const FormStep: React.FC<Props> = ({ pages, currentPage, previous, next }) => {
    return (
        <FormStepStyle>
            <ActiveCustomLeft onClick={previous} />

            <div className="pagesContainer">
                {pages.map((page, pageIndex) => {
                    if (pageIndex > currentPage)
                        return <div key={pageIndex} className="newPage"></div>
                    return <div key={pageIndex} className="currentPage"></div>
                })}
            </div>

            <ActiveCustomRight onClick={next} />
        </FormStepStyle>
    )
}

export default FormStep

export const FormStepStyle = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .pagesContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

        div {
            width: 100%;
            min-height: 0.3rem;
            margin: 1rem;
            border-radius: 0.25rem;
        }
    }

    .newPage {
        background: ${({ theme }) => theme.color.grey};
    }

    .currentPage {
        background: ${({ theme }) => theme.color.cian};
    }
`

export const ActiveCustomLeft = styled(FaArrowLeft)`
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.color.cian};
    margin-right: 1rem;
    cursor: pointer;
`
export const ActiveCustomRight = styled(FaArrowRight)`
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.color.cian};
    margin-left: 1rem;
    cursor: pointer;
`
