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

import { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import devaosApi from '../../src/services/devaos-api'
import LoadingPage from '../../src/components/templates/LoadingPage'

import AuthContext from '../../src/contexts/auth'

const index = () => {
    const router = useRouter()

    const { handleAuth } = useContext(AuthContext)

    const [github, setGithub] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleLogin(e) {
        e.preventDefault
        setLoading(true)
        try {
            const { data } = await devaosApi.post('/sessions', {
                github,
                password
            })

            handleAuth({ id: data._id, github: data.github, login: true })

            router.push(`/${github}`)
        } catch (err) {
            console.log(err)
            setLoading(false)
            alert('Erro ao realizar login')
        }
    }

    return (
        <>
            <CustomHead title="Entrar" />
            {loading ? (
                <LoadingPage />
            ) : (
                <DefaultPageContainer>
                    <FormContainerStyle>
                        <FormContentStyle>
                            <Link href="/">
                                <a>
                                    <CustomFiX />
                                </a>
                            </Link>
                            <h1>Entre</h1>
                            <h2>Faça login agora mesmo</h2>

                            <Input
                                type="text"
                                title="Usuário GitHub"
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}
                            />
                            <Input
                                type="password"
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
            )}
        </>
    )
}

export default index
