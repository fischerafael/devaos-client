import { createContext, useState } from 'react'

interface Props {
    loading: boolean
    setLoading(e: boolean): void
    openBioModal: boolean
    setOpenBioModal(e: boolean): void
}

const ProfileInterfaceManagerContext = createContext({} as Props)

export default ProfileInterfaceManagerContext

export const ProfileInterfaceProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)

    const [openBioModal, setOpenBioModal] = useState(false)

    return (
        <ProfileInterfaceManagerContext.Provider
            value={{
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
