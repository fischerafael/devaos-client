import { useContext, useState } from 'react'
import GenericContainer from '..'
import AuthContext from '../../../../../contexts/auth'
import ProfileInterfaceManagerContext from '../../../../../contexts/profile-interface'
import ExpContext from '../../../../../contexts/profile/exp'
import { FormButton } from '../../../../atoms/FormButton'
import { SendingModalStyle } from '../../../Modal/styles'
import AddFeature from '../../../Modal/styles/Add'

const ExperienceContainer = ({ kind }) => {
    const {
        setOpenProModal,
        openProModal,

        title,
        setTitle,
        institution,
        setInstitution,
        location,
        setLocation,
        startedAt,
        setStartedAt,
        finishedAt,
        setFinishedAt,
        description,
        setDescription,
        handleCreateProExp,
        loading
    } = useContext(ExpContext)

    console.log(loading)

    return (
        <GenericContainer
            setOpenModal={setOpenProModal}
            modalOpen={openProModal}
            title={kind === 'pro' && 'Experiência Profissional'}
        >
            {loading ? (
                <SendingModalStyle>Enviando...</SendingModalStyle>
            ) : (
                <>
                    <h1>
                        Adicionar {kind === 'pro' && 'Experiência Profissional'}
                    </h1>
                    <AddFeature
                        setState={setTitle}
                        state={title}
                        sectionName="Título"
                        input={true}
                        inputType="text"
                    />
                    <AddFeature
                        setState={setInstitution}
                        state={institution}
                        sectionName="Instituição"
                        input={true}
                        inputType="text"
                    />
                    <AddFeature
                        setState={setLocation}
                        state={location}
                        sectionName="Localização"
                        input={true}
                        inputType="text"
                    />
                    <AddFeature
                        setState={setStartedAt}
                        state={startedAt}
                        sectionName="Início em"
                        input={true}
                        inputType="number"
                    />
                    <AddFeature
                        setState={setFinishedAt}
                        state={finishedAt}
                        sectionName="Término em"
                        input={true}
                        inputType="number"
                    />
                    <AddFeature
                        setState={setDescription}
                        state={description}
                        sectionName="Descrição"
                    />

                    {kind === 'pro' &&
                        title &&
                        institution &&
                        location &&
                        startedAt && (
                            <FormButton onClick={handleCreateProExp}>
                                Adicionarr
                            </FormButton>
                        )}
                </>
            )}
        </GenericContainer>
    )
}

export default ExperienceContainer
