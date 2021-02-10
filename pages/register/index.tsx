import CustomHead from '../../src/components/atoms/CustomHead'
import FormButton from '../../src/components/atoms/FormButton'
import Input from '../../src/components/atoms/Input'
import SessionFormPage from '../../src/components/organisms/SessionFormPage'
import DefaultPageContainer from '../../src/components/templates/DefaultPageContainer'
import FormPagination from '../../src/components/molecules/FormPagination'

import { useEffect, useState } from 'react'

import githubApi from '../../src/services/github-api'
import devaosApi from '../../src/services/devaos-api'
import Avatar from '../../src/components/atoms/Avatar'

const Register = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(3)

    const [github, setGithub] = useState('fischerafael')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [location, setLocation] = useState('')
    const [title, setTitle] = useState('')

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

        if (currentPage === 1) {
            getGithuInfo(github)
        }
    }, [currentPage])

    function handleNextPage(e) {
        e.preventDefault()
        setCurrentPage((prevState) =>
            prevState === totalPages ? prevState : prevState + 1
        )
    }

    function handlePreviusPage(e) {
        e.preventDefault()
        setCurrentPage((prevState) =>
            prevState === totalPages - totalPages ? prevState : prevState - 1
        )
    }

    async function handleUserRegistration() {
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
        } catch (err) {
            console.log(err)
            alert('erro')
        }
    }

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
                    {currentPage === 0 && (
                        <>
                            <Input
                                type="text"
                                title="Usuário GitHub"
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Input
                                type="text"
                                title="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                type="text"
                                title="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                            <Avatar
                                avatar={avatar}
                                alt={github}
                                position="absolute"
                            />
                            <Input
                                type="text"
                                title="Perfil"
                                value={avatar}
                                onChange={(e) => setAvatar(e.target.value)}
                            />
                            <Input
                                type="text"
                                title="Título"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Input
                                type="text"
                                title="Localização"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
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
                                <FormButton onClick={handleUserRegistration}>
                                    FINALIZAR
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
                </SessionFormPage>
            </DefaultPageContainer>
        </>
    )
}

export default Register
