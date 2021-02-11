import { createContext } from 'react'

interface Props {
    logged: boolean
    user: {
        _id: string
        github: string
    }
}

const AuthContext = createContext({} as Props)

export default AuthContext

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider
            value={{ logged: false, user: { _id: '', github: '' } }}
        >
            {children}
        </AuthContext.Provider>
    )
}
