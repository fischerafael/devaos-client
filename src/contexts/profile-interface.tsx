import { createContext, useContext, useState } from 'react'

interface Props {
    openModal: boolean
    setOpenModal(e: boolean): void
    loading: boolean
    setLoading(e: boolean): void
    openBioModal: boolean
    setOpenBioModal(e: boolean): void
}

const ProfileInterfaceManagerContext = createContext({} as Props)

export default ProfileInterfaceManagerContext

export const ProfileInterfaceProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const [openBioModal, setOpenBioModal] = useState(false)

    return (
        <ProfileInterfaceManagerContext.Provider
            value={{
                openModal,
                setOpenModal,
                loading,
                setLoading,
                openBioModal,
                setOpenBioModal
            }}
        >
            {children}
        </ProfileInterfaceManagerContext.Provider>
    )
}
