import React from 'react'
import styled from 'styled-components'

const Input = ({ type, title }) => {
    return (
        <InputContainerStyle>
            <input type={type || 'text'} required />
            <label>{title}</label>
        </InputContainerStyle>
    )
}

export default Input

export const InputContainerStyle = styled.div`
    position: relative;
    width: 100%;
    height: 3rem;

    margin-top: 1rem;

    input {
        outline: none;

        transition: 0.5s;

        padding: 0 2rem;
        padding-top: 0.75rem;
        font-size: 1rem;

        border: 1px solid ${({ theme }) => theme.color.grey};
        width: 100%;
        height: 100%;
        border-radius: 10rem;

        background: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.ultraDark};

        &:focus {
            border: 1px solid ${({ theme }) => theme.color.dark};
        }

        &:focus + label,
        &:valid + label {
            top: 0.25rem;
            font-size: 0.5rem;
        }
    }

    label {
        z-index: 10;
        position: absolute;
        top: 0.85rem;
        left: 1rem;

        padding: 0 1rem;

        pointer-events: none;
        transition: 0.2s;

        color: ${({ theme }) => theme.color.dark};
    }
`
