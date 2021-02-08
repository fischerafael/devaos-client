import CustomHead from '../../src/components/atoms/CustomHead'
import FormButton from '../../src/components/atoms/FormButton'
import Input from '../../src/components/atoms/Input'
import SessionFormPage from '../../src/components/organisms/SessionFormPage'
import DefaultPageContainer from '../../src/components/templates/DefaultPageContainer'

const Register = () => {
    return (
        <>
            <DefaultPageContainer>
                <CustomHead title="Entrar" />
                <SessionFormPage
                    heading="Cadastre-se"
                    subHeading="Preencha os dados e crie seu perfil."
                    alternativeTitle="Já sou cadastrado"
                    alternativeLink="/login"
                >
                    <Input type="text" title="Usuário GitHub" />
                    <Input type="password" title="Senha" />
                    <Input type="text" title="Email" />
                    <FormButton>ENTRAR</FormButton>
                </SessionFormPage>
            </DefaultPageContainer>
        </>
    )
}

export default Register
