import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

interface Props {
    logged: boolean
    user: {
        _id: string
        github: string
        isOwner: boolean
    }
    handleAuth(data: { id: string; github: string; login?: boolean }): void
    handleLogout(): void
}

const AuthContext = createContext({} as Props)

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(false)
    const [id, setId] = useState('')
    const [githubState, setGithubState] = useState('')

    function handleAuth(data: { id: string; github: string; login?: true }) {
        setLogged(true)
        setId(data.id)
        setGithubState(data.github)

        if (data.login) {
            const localStorageData = {
                logged: true,
                _id: data.id,
                github: data.github
            }

            localStorage.setItem('devaos', JSON.stringify(localStorageData))
        }
    }

    function handleLogout() {
        setLogged(false)
        setId('')
        setGithubState('')
        localStorage.removeItem('devaos')
    }

    const router = useRouter()
    const { github } = router.query

    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        if (githubState === github) setIsOwner(true)
        if (githubState === '') setIsOwner(false)
    }, [githubState, github])

    return (
        <AuthContext.Provider
            value={{
                logged,
                user: { _id: id, github: githubState, isOwner },
                handleAuth,
                handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
