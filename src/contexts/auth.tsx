import { createContext, useState } from 'react'
import { Router, useRouter } from 'next/router'

interface Props {
    logged: boolean
    user: {
        _id: string
        github: string
    }
    handleAuth(data: { id: string; github: string; login?: boolean }): void
    handleLogout(): void
}

const AuthContext = createContext({} as Props)

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(false)
    const [id, setId] = useState('')
    const [github, setGithub] = useState('')

    function handleAuth(data: { id: string; github: string; login?: true }) {
        setLogged(true)
        setId(data.id)
        setGithub(data.github)

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
        setGithub('')
        localStorage.removeItem('devaos')
    }

    return (
        <AuthContext.Provider
            value={{
                logged,
                user: { _id: id, github },
                handleAuth,
                handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
