import React from 'react'
import styled from 'styled-components'

interface Props {
    type?: string
    placeholder?: string
    title: string
    value: string
    onChange(e: any): void
}

const Input: React.FC<Props> = ({
    type,
    placeholder,
    title,
    value,
    onChange
}) => {
    return (
        <InputContainerStyle>
            <input
                type={type || 'text'}
                required
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <label>{title}</label>
        </InputContainerStyle>
    )
}

export default Input

export const InputContainerStyle = styled.div`
    position: relative;
    width: 100%;

    margin-top: 1rem;

    input {
        outline: none;

        transition: 0.5s;

        padding: 0 2rem;
        padding-top: 0.5rem;
        font-size: 1rem;

        border: 1px solid ${({ theme }) => theme.color.grey};
        width: 100%;
        height: 4rem;
        border-radius: 10rem;

        background: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.ultraDark};

        &:focus {
            border: 1px solid ${({ theme }) => theme.color.dark};
        }

        &:focus + label,
        &:valid + label {
            top: 0.75rem;
            font-size: 0.5rem;
        }
    }

    label {
        z-index: 10;
        position: absolute;
        top: 1.25rem;
        left: 1rem;

        padding: 0 1rem;

        pointer-events: none;
        transition: 0.2s;

        color: ${({ theme }) => theme.color.dark};
    }
`
