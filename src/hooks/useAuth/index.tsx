import { useContext, useEffect } from 'react'
import AuthContext from '../../contexts/auth'

const useAuth = () => {
    const { logged, user, handleAuth } = useContext(AuthContext)

    useEffect(() => {
        const authData = localStorage.getItem('devaos')

        if (authData) {
            const { logged, _id, github } = JSON.parse(authData)
            handleAuth({ id: _id, github })
        }
    }, [])

    return { logged, user }
}

export default useAuth
