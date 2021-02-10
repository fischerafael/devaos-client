import React from 'react'
import styled from 'styled-components'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const FormPagination = ({ totalPages, next, previous, currentPage }) => {
    return (
        <FormPaginationStyle>
            {currentPage >= 0 && <FaArrowLeft onClick={previous} />}
            <h3>
                {currentPage + 1} / {totalPages}
            </h3>
            {currentPage < totalPages && <FaArrowRight onClick={next} />}
        </FormPaginationStyle>
    )
}

export default FormPagination

export const FormPaginationStyle = styled.div`
    padding: 1.5rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-weight: 400;
    }

    svg {
        margin: 1rem;

        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;

        transition: 0.5s;

        &:hover {
            color: ${(props) => props.theme.color.cian};
        }
    }
`
export const InactiveArrowLeft = styled(FaArrowLeft)`
    color: ${(props) => props.theme.color.grey};
`
export const InactiveArrowRigth = styled(FaArrowRight)`
    color: ${(props) => props.theme.color.grey};
`
