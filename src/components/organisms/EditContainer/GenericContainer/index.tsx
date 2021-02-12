import React from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import DefaultButton from '../../../atoms/DefaultButton'
import { ModalContainerStyle, ModalContentStyle } from '../../Modal/styles'

const GenericContainer = ({ children, setOpenModal, modalOpen, title }) => {
    return (
        <>
            <EditContainerStyle>
                <div>
                    <DefaultButton action={(e) => setOpenModal(true)}>
                        Adicionar {title}
                    </DefaultButton>
                </div>
            </EditContainerStyle>

            {modalOpen && (
                <ModalContainerStyle>
                    <ModalContentStyle>
                        <CustomFiX onClick={(e) => setOpenModal(false)} />

                        {children}
                    </ModalContentStyle>
                </ModalContainerStyle>
            )}
        </>
    )
}

export default GenericContainer

export const EditContainerStyle = styled.div`
    width: 100%;

    min-height: 10vh;
    background: ${({ theme }) => theme.color.white};
    padding: 1em 0;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        max-width: 80rem;
        width: 90%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const CustomFiX = styled(FiX)`
    z-index: 22;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${({ theme }) => theme.color.cian};
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.color.greyBtn};
    }
`
