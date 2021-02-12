import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import useAddBio from '../../../hooks/useAddBio'

import useAuth from '../../../hooks/useAuth'
import devaosApi from '../../../services/devaos-api'
import DefaultButton from '../../atoms/DefaultButton'
import { FormButton } from '../../atoms/FormButton'
import Input from '../../atoms/Input'
import TextArea from '../../atoms/TextArea'
import {
    ModalContainerStyle,
    ModalContentStyle,
    SendingModalStyle
} from '../Modal/styles'
import AddFeature from '../Modal/styles/Add'

interface Props {
    section: string
    type: 'bio' | 'exp' | 'edu' | 'skill'
}

const EditContainer: React.FC<Props> = ({ section, type }) => {
    const { user } = useAuth()
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const { bio, setBio, handleAddBio } = useAddBio({
        userId: user._id,
        setLoading,
        setOpenModal
    })

    return (
        <>
            <EditContainerStyle>
                <div>
                    <DefaultButton action={(e) => setOpenModal(true)}>
                        Adicionar {section}
                    </DefaultButton>
                </div>
            </EditContainerStyle>

            {openModal && (
                <ModalContainerStyle>
                    <ModalContentStyle>
                        <CustomFiX onClick={(e) => setOpenModal(false)} />

                        {
                            type === 'bio' && (
                                <AddFeature
                                    handleAdd={handleAddBio}
                                    setState={setBio}
                                    state={bio}
                                    loading={loading}
                                    sectionName="Biografia"
                                />
                            ) /*(
                            <>
                                {loading ? (
                                    <SendingModalStyle>
                                        Enviando...
                                    </SendingModalStyle>
                                ) : (
                                    <>
                                        <h1>{section}</h1>
                                        <TextArea
                                            title="Breve biografia"
                                            type="text"
                                            value={bio}
                                            onChange={(e) =>
                                                setBio(e.target.value)
                                            }
                                        />
                                        <FormButton onClick={handleAddBio}>
                                            Adicionar
                                        </FormButton>{' '}
                                    </>
                                )}
                            </>
                                        )*/
                        }

                        {type === 'exp' && (
                            <>
                                <h1>{section}</h1>
                                <Input
                                    title="Cargo"
                                    type="text"
                                    value={'bio'}
                                    onChange={(e) => {}}
                                />
                            </>
                        )}
                    </ModalContentStyle>
                </ModalContainerStyle>
            )}
        </>
    )
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

    min-height: 30vh;
    background: ${({ theme }) => theme.color.white};
    padding: 5em 0;

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
