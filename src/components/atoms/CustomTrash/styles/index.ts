import { FiTrash } from 'react-icons/fi'
import styled from 'styled-components'

export const CustomTrash = styled(FiTrash)`
    position: absolute;
    right: 0;
    top: -2rem;

    background: ${({ theme }) => theme.color.cian};
    border-radius: 1rem;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background: red;
        color: white;
    }
`
