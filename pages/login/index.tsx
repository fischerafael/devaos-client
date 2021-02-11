import CustomHead from '../../src/components/atoms/CustomHead'
import CustomLinkForm from '../../src/components/atoms/CustomLinkForm'
import DefaultPageContainer from '../../src/components/templates/DefaultPageContainer'
import Input from '../../src/components/atoms/Input'

import { FormButton } from '../../src/components/atoms/FormButton'
import {
    CustomFiX,
    FormContainerStyle,
    FormContentStyle
} from '../../src/components/organisms/FormLoginRegister'

import { useState } from 'react'
import Link from 'next/link'

import devaosApi from '../../src/services/devaos-api'

const index = () => {
    const [github, setGithub] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(e) {
        e.preventDefault
        alert('oi')
        try {
            const { data } = await devaosApi.post('/sessions', {
                github,
                password
            })
            console.log(data)
            alert('logou')
        } catch (err) {
            console.log(err)
            alert('erro')
        }
    }

    return (
        <>
            <DefaultPageContainer>
                <CustomHead title="Entrar" />
                <DefaultPageContainer>
                    <FormContainerStyle>
                        <FormContentStyle>
                            <Link href="/">
                                <CustomFiX />
                            </Link>
                            <h1>Cadastre-se</h1>
                            <h2>Crie sua conta</h2>

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
                            <FormButton onClick={handleLogin}>
                                ENTRAR
                            </FormButton>

                            <CustomLinkForm href="/register">
                                Ainda não sou cadastrado
                            </CustomLinkForm>
                        </FormContentStyle>
                    </FormContainerStyle>
                </DefaultPageContainer>
            </DefaultPageContainer>
        </>
    )
}

export default index
