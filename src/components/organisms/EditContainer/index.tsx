import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import DefaultButton from '../../atoms/DefaultButton'
import Input from '../../atoms/Input'
import TextArea from '../../atoms/TextArea'
import { ModalContainerStyle, ModalContentStyle } from '../Modal/styles'

interface Props {
    section: string
    type: 'bio' | 'exp' | 'edu' | 'skill'
}

const EditContainer: React.FC<Props> = ({ section, type }) => {
    const [openModal, setOpenModal] = useState(false)

    const [bio, setBio] = useState('')

    console.log('bio', bio)

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

                        {type === 'bio' && (
                            <>
                                <h1>{section}</h1>
                                <TextArea
                                    title="Breve biografia"
                                    type="text"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </>
                        )}

                        {type === 'exp' && (
                            <>
                                <h1>{section}</h1>
                                <Input
                                    title="Cargo"
                                    type="text"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
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
    background: ${({ theme }) => theme.color.lightGrey};

    margin: 5em 0;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: inset 0 0 2em ${({ theme }) => theme.color.grey};

    div {
        max-width: 80rem;
        width: 90%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`
