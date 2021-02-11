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
import { useRouter } from 'next/router'

import devaosApi from '../../src/services/devaos-api'

const index = () => {
    const router = useRouter()

    const [github, setGithub] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(e) {
        e.preventDefault
        try {
            const { data } = await devaosApi.post('/sessions', {
                github,
                password
            })
            console.log(data)
            alert('Login realizado com sucesso')
            router.push(`/${github}`)
        } catch (err) {
            console.log(err)
            alert('Erro ao realizar login')
        }
    }

    return (
        <>
            <CustomHead title="Entrar" />
            <DefaultPageContainer>
                <FormContainerStyle>
                    <FormContentStyle>
                        <Link href="/">
                            <a>
                                <CustomFiX />
                            </a>
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
                        <FormButton onClick={handleLogin}>ENTRAR</FormButton>

                        <CustomLinkForm href="/register">
                            Ainda não sou cadastrado
                        </CustomLinkForm>
                    </FormContentStyle>
                </FormContainerStyle>
            </DefaultPageContainer>
        </>
    )
}

export default index
