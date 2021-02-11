import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../contexts/auth'

const useAuth = () => {
    const { logged, user, handleAuth } = useContext(AuthContext)

    useEffect(() => {
        const authData = localStorage.getItem('devaos')

        if (authData) {
            const { _id, github } = JSON.parse(authData)
            handleAuth({ id: _id, github })
        }
    }, [])

    //checks if the user owns the profile so he can edit stuff
    const router = useRouter()
    const { github } = router.query

    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        if (user.github === github) setIsOwner(true)
    }, [user.github, github])

    return { logged, user, isOwner }
}

export default useAuth
