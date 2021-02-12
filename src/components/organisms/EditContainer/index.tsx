import React, { useContext } from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import ProfileInterfaceManagerContext from '../../../contexts/profile-interface'
import useAddBio from '../../../hooks/useAddBio'

import useAuth from '../../../hooks/useAuth'

import BioContainer from './BioContainer'

interface Props {
    section: string
    type: 'bio' | 'exp' | 'edu' | 'skill'
}

const EditContainer: React.FC<Props> = ({ section, type }) => {
    const { user } = useAuth()

    const { loading, setLoading, setOpenBioModal, openBioModal } = useContext(
        ProfileInterfaceManagerContext
    )

    const { bio, setBio, handleAddBio } = useAddBio({
        userId: user._id,
        setLoading,
        setOpenModal: setOpenBioModal
    })

    if (type === 'bio') {
        return (
            <BioContainer
                setOpenModal={setOpenBioModal}
                modalOpen={openBioModal}
                handleAdd={handleAddBio}
                state={bio}
                setState={setBio}
                loading={loading}
            />
        )
    }

    if (type === 'edu') {
        return (
            <BioContainer
                setOpenModal={setOpenBioModal}
                modalOpen={openBioModal}
                handleAdd={handleAddBio}
                state={bio}
                setState={setBio}
                loading={loading}
            />
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
