import React from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'

import useAddBio from '../../../hooks/useAddBio'

import { FormButton } from '../../atoms/FormButton'
import { SendingModalStyle } from '../Modal/styles'
import AddFeature from '../Modal/styles/Add'

import BioContainer from './BioContainer'

interface Props {
    type: 'bio' | 'exp' | 'edu' | 'skill'
}

const EditContainer: React.FC<Props> = ({ type }) => {
    const {
        bio,
        setBio,
        handleAddBio,
        setOpenBioModal,
        openBioModal,
        loading
    } = useAddBio()

    if (type === 'bio') {
        return (
            <BioContainer
                setOpenModal={setOpenBioModal}
                modalOpen={openBioModal}
                title="Biografia"
            >
                {loading ? (
                    <SendingModalStyle>Enviando...</SendingModalStyle>
                ) : (
                    <>
                        <AddFeature
                            setState={setBio}
                            state={bio}
                            sectionName="Biografia"
                        />
                        <FormButton onClick={handleAddBio}>
                            Adicionar
                        </FormButton>
                    </>
                )}
            </BioContainer>
        )
    }

    return null
}

export default EditContainer

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
