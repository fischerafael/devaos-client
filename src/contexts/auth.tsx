import { createContext, useState } from 'react'

interface Props {
    logged: boolean
    user: {
        _id: string
        github: string
    }
    handleAuth(data: { id: string; github: string }): void
}

const AuthContext = createContext({} as Props)

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(false)
    const [id, setId] = useState('')
    const [github, setGithub] = useState('')

    function handleAuth(data: { id: string; github: string }) {
        setLogged(true)
        setId(data.id)
        setGithub(data.github)

        const localStorageData = {
            logged: true,
            _id: data.id,
            github: data.github
        }

        localStorage.setItem('devaos', JSON.stringify(localStorageData))
    }

    return (
        <AuthContext.Provider
            value={{ logged, user: { _id: id, github }, handleAuth }}
        >
            {children}
        </AuthContext.Provider>
    )
}
