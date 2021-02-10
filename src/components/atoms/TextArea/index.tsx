import React from 'react'
import styled from 'styled-components'

interface Props {
    type?: string
    title: string
    value: string
    onChange(e: any): void
}

const TextArea: React.FC<Props> = ({ type, title, value, onChange }) => {
    return (
        <TextAreaContainerStyle>
            <textarea rows={5} required value={value} onChange={onChange} />
            <label>{title}</label>
        </TextAreaContainerStyle>
    )
}

export default TextArea

export const TextAreaContainerStyle = styled.div`
    position: relative;
    width: 100%;

    margin-top: 1rem;

    textarea {
        outline: none;

        resize: vertical;

        transition: 0.5s;

        padding: 0 2rem;
        padding-top: 1.5rem;
        font-size: 1rem;

        border: 1px solid ${({ theme }) => theme.color.grey};
        width: 100%;

        min-height: 4rem;
        max-height: 10rem;

        border-radius: 2rem;

        background: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.ultraDark};

        &:focus {
            border: 1px solid ${({ theme }) => theme.color.dark};
        }

        &:focus + label,
        &:valid + label {
            top: 0.5rem;
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
