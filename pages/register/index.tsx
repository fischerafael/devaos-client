import CustomHead from '../../src/components/atoms/CustomHead'
import Input from '../../src/components/atoms/Input'

import DefaultPageContainer from '../../src/components/templates/DefaultPageContainer'
import FormPagination from '../../src/components/molecules/FormPagination'
import Avatar from '../../src/components/atoms/Avatar'

import { FormButton } from '../../src/components/atoms/FormButton'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import githubApi from '../../src/services/github-api'
import devaosApi from '../../src/services/devaos-api'
import {
    CustomFiX,
    FormContainerStyle,
    FormContentStyle
} from '../../src/components/organisms/FormLoginRegister'
import Link from 'next/link'
import CustomLinkForm from '../../src/components/atoms/CustomLinkForm'
import LoadingPage from '../../src/components/templates/LoadingPage'

const Register = () => {
    const router = useRouter()

    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(3)

    const [github, setGithub] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [location, setLocation] = useState('')
    const [title, setTitle] = useState('')

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getGithuInfo(username: string) {
            try {
                const response = await githubApi.get(username)
                const { data } = response

                setName(data.name)
                setAvatar(data.avatar_url)
                setLocation(data.location)
                setTitle(data.bio)
            } catch (err) {
                console.log(err)
            }
        }

        if (currentPage === 1 && github) {
            getGithuInfo(github)
        }
    }, [currentPage])

    function handleNextPage(e) {
        e.preventDefault()
        setCurrentPage((prevState) =>
            prevState === totalPages - 1 ? prevState : prevState + 1
        )
    }

    function handlePreviusPage(e) {
        e.preventDefault()
        setCurrentPage((prevState) =>
            prevState === 0 ? prevState : prevState - 1
        )
    }

    async function handleUserRegistration(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await devaosApi.post('/users', {
                github,
                email,
                password,
                name,
                avatar,
                location,
                title
            })
            console.log(response)
            alert('Usuário cadastrado com sucesso')
            router.push(`/${github}`)
        } catch (err) {
            console.log(err)
            setLoading(false)
            alert(
                'Falha ao cadastrar usuário. Certifique-se se o usuário Github ou o Email informados já não estão sendo utilizados'
            )
        }
    }

    return (
        <>
            <CustomHead title="Cadastrar-se" />
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
                            <h1>Cadastre-se</h1>
                            <h2>Crie sua conta</h2>
                            {currentPage === 0 && (
                                <>
                                    <Input
                                        type="text"
                                        title="Usuário GitHub"
                                        value={github}
                                        onChange={(e) =>
                                            setGithub(e.target.value)
                                        }
                                    />
                                    <FormPagination
                                        totalPages={totalPages}
                                        previous={handlePreviusPage}
                                        next={handleNextPage}
                                        currentPage={currentPage}
                                    />
                                </>
                            )}
                            {currentPage === 1 && (
                                <>
                                    <Input
                                        type="password"
                                        title="Senha"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        title="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        title="Nome"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    <FormPagination
                                        totalPages={totalPages}
                                        previous={handlePreviusPage}
                                        next={handleNextPage}
                                        currentPage={currentPage}
                                    />
                                </>
                            )}
                            {currentPage === 2 && (
                                <>
                                    <Avatar src={avatar} alt={github} />
                                    <Input
                                        type="text"
                                        title="Link Imagem de Perfil"
                                        value={avatar}
                                        onChange={(e) =>
                                            setAvatar(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        title="Título Profissional"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                    <Input
                                        type="text"
                                        title="Localização"
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                    />
                                    <FormPagination
                                        totalPages={totalPages}
                                        previous={handlePreviusPage}
                                        next={handleNextPage}
                                        currentPage={currentPage}
                                    />
                                    {github &&
                                    email &&
                                    password &&
                                    name &&
                                    avatar &&
                                    location &&
                                    title ? (
                                        <FormButton
                                            onClick={handleUserRegistration}
                                        >
                                            CADASTRAR
                                        </FormButton>
                                    ) : (
                                        <p
                                            style={{
                                                textAlign: 'center',
                                                marginBottom: '2rem',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Preencha todos os campos
                                        </p>
                                    )}
                                </>
                            )}

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

export default Register
