import React from 'react'
import { SendingModalStyle } from '..'
import { FormButton } from '../../../../atoms/FormButton'
import TextArea from '../../../../atoms/TextArea'

interface Props {
    loading: boolean
    state: string
    setState(e: any): void
    handleAdd(e: any): Promise<void>
    sectionName: string
}

const AddFeature: React.FC<Props> = ({
    loading,
    state,
    setState,
    handleAdd,
    sectionName
}) => {
    return (
        <>
            {loading ? (
                <SendingModalStyle>Enviando...</SendingModalStyle>
            ) : (
                <>
                    <h1>Adicionar {sectionName}</h1>
                    <TextArea
                        title={sectionName}
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <FormButton onClick={handleAdd}>Adicionar</FormButton>
                </>
            )}
        </>
    )
}

export default AddFeature
