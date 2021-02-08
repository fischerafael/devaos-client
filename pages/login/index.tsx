import CustomHead from '../../src/components/atoms/CustomHead'

import DefaultPageContainer from '../../src/components/templates/DefaultPageContainer'

import SessionFormPage from '../../src/components/organisms/SessionFormPage'
import Input from '../../src/components/atoms/Input'
import FormButton from '../../src/components/atoms/FormButton'

const index = () => {
    return (
        <>
            <DefaultPageContainer>
                <CustomHead title="Entrar" />
                <SessionFormPage
                    heading="Entrar"
                    subHeading="Acesse sua conta"
                    alternativeTitle="Ainda não sou cadastrado"
                    alternativeLink="/register"
                >
                    <Input type="text" title="Usuário GitHub" />
                    <Input type="text" title="Senha" />
                    <FormButton>ENTRAR</FormButton>
                </SessionFormPage>
            </DefaultPageContainer>
        </>
    )
}

export default index
