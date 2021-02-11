import CustomHead from '../../src/components/atoms/CustomHead'
import DefaultPageContainer from '../../src/components/templates/DefaultPageContainer'

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

import Github from '../../src/components/organisms/FormSection/Github'
import EmailPassord from '../../src/components/organisms/FormSection/EmailPassword'
import AvatarStep from '../../src/components/organisms/FormSection/AvatarStep'
import NameTitleLocationSetp from '../../src/components/organisms/FormSection/NameTitleLocationStep'

import FormStep from '../../src/components/molecules/FormStep'
import LinksSection from '../../src/components/organisms/FormSection/LinksSection'

const registrationForm = [
    { page: 1, fields: ['gihub'] },
    { page: 2, fields: ['email', 'password'] },
    { page: 3, fields: ['avatar'] },
    { page: 4, fields: ['name', 'title', 'location'] },
    { page: 5, field: ['linkedin', 'blog'] }
]

const Register = () => {
    const router = useRouter()

    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(5)

    const [github, setGithub] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [avatar, setAvatar] = useState('')

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')

    const [linkedin, setLinkedin] = useState('')
    const [blog, setBlog] = useState('')

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

    function handlePreviusPage(e: any) {
        e.preventDefault()
        setCurrentPage((prevState) =>
            prevState === 0 ? prevState : prevState - 1
        )
    }

    async function handleUserRegistration(e) {
        e.preventDefault()

        if (!email.includes('@')) {
            alert('Preencha um email válido!')
            return
        }

        if (password.length < 6) {
            alert('Sua senha deve conter no mínimo 6 caracteres')
            return
        }

        setLoading(true)

        try {
            const response = await devaosApi.post('/users', {
                github: github.toLowerCase(),
                email: email.toLowerCase(),
                password,
                name,
                avatar,
                location,
                title,
                linkedin,
                blog
            })
            console.log(response)
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
                            <h2>Preencha todos os campos para se cadastrar</h2>

                            {currentPage === 0 && (
                                <Github github={github} setValue={setGithub} />
                            )}
                            {currentPage === 1 && (
                                <EmailPassord
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                />
                            )}
                            {currentPage === 2 && (
                                <AvatarStep
                                    avatar={avatar}
                                    setAvatar={setAvatar}
                                />
                            )}
                            {currentPage === 3 && (
                                <NameTitleLocationSetp
                                    name={name}
                                    setName={setName}
                                    title={title}
                                    setTitle={setTitle}
                                    location={location}
                                    setLocation={setLocation}
                                />
                            )}
                            {currentPage === 4 && (
                                <LinksSection
                                    linkedin={linkedin}
                                    setLinkedin={setLinkedin}
                                    blog={blog}
                                    setBlog={setBlog}
                                />
                            )}
                            <FormStep
                                pages={registrationForm}
                                currentPage={currentPage}
                                previous={handlePreviusPage}
                                next={handleNextPage}
                            />
                            {github &&
                                email &&
                                password &&
                                name &&
                                avatar &&
                                location &&
                                title &&
                                currentPage === 4 && (
                                    <FormButton
                                        onClick={handleUserRegistration}
                                    >
                                        FINALIZAR CADASTRO
                                    </FormButton>
                                )}
                            <CustomLinkForm href="/login">
                                Já sou cadastrado
                            </CustomLinkForm>
                        </FormContentStyle>
                    </FormContainerStyle>
                </DefaultPageContainer>
            )}
        </>
    )
}

export default Register
