import React from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import DefaultButton from '../../../atoms/DefaultButton'
import { ModalContainerStyle, ModalContentStyle } from '../../Modal/styles'
import AddFeature from '../../Modal/styles/Add'

const BioContainer = ({
    setOpenModal,
    modalOpen,
    handleAdd,
    setState,
    state,
    loading
}) => {
    return (
        <>
            <EditContainerStyle>
                <div>
                    <DefaultButton action={(e) => setOpenModal(true)}>
                        Adicionar Bio
                    </DefaultButton>
                </div>
            </EditContainerStyle>

            {modalOpen && (
                <ModalContainerStyle>
                    <ModalContentStyle>
                        <CustomFiX onClick={(e) => setOpenModal(false)} />

                        <AddFeature
                            handleAdd={handleAdd}
                            setState={setState}
                            state={state}
                            loading={loading}
                            sectionName="Biografia"
                        />
                    </ModalContentStyle>
                </ModalContainerStyle>
            )}
        </>
    )
}

export default BioContainer

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