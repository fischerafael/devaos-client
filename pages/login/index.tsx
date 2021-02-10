import CustomHead from '../../src/components/atoms/CustomHead'

import DefaultPageContainer from '../../src/components/templates/DefaultPageContainer'

import SessionFormPage from '../../src/components/organisms/SessionFormPage'
import Input from '../../src/components/atoms/Input'
import FormButton from '../../src/components/atoms/FormButton'
import { useState } from 'react'

const index = () => {
    const [github, setGithub] = useState('')
    const [password, setPassword] = useState('')

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
                    <Input
                        type="text"
                        title="Usuário GitHub"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                    />
                    <Input
                        type="text"
                        title="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormButton onClick={() => {}}>ENTRAR</FormButton>
                </SessionFormPage>
            </DefaultPageContainer>
        </>
    )
}

export default index
