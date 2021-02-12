import { createContext, useContext, useState } from 'react'
import useAddBio from '../hooks/useAddBio'
import AuthContext from './auth'

const ProfileManagerContext = createContext({})

export default ProfileManagerContext

export const ProfileManagerProvider = ({ children }) => {
    const { user } = useContext(AuthContext)

    /*const { bio, setBio, handleAddBio } = useAddBio({
        userId: user._id,
        setLoading,
        setOpenModal
    })*/

    return (
        <ProfileManagerContext.Provider value={{}}>
            {children}
        </ProfileManagerContext.Provider>
    )
}
