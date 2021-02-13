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
        setOpenEduModal,
        openEduModal,

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
        handleCreateEduExp,
        loading
    } = useContext(ExpContext)

    console.log(loading)

    return (
        <GenericContainer
            setOpenModal={kind === 'pro' ? setOpenProModal : setOpenEduModal}
            modalOpen={kind === 'pro' ? openProModal : openEduModal}
            title={kind === 'pro' ? 'Experiência Profissional' : 'Educação'}
        >
            {loading ? (
                <SendingModalStyle>Enviando...</SendingModalStyle>
            ) : (
                <>
                    {kind === 'pro' && (
                        <h1>Adicionar Experiência Profissional</h1>
                    )}
                    {kind === 'edu' && <h1>Adicionar Educação</h1>}
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
                                Adicionar Experiência Profissional
                            </FormButton>
                        )}
                    {kind === 'edu' &&
                        title &&
                        institution &&
                        location &&
                        startedAt && (
                            <FormButton onClick={handleCreateEduExp}>
                                Adicionar Educação
                            </FormButton>
                        )}
                </>
            )}
        </GenericContainer>
    )
}

export default ExperienceContainer
