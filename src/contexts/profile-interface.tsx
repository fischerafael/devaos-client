import { createContext, useState } from 'react'

interface Props {
    loading: boolean
    setLoading(e: boolean): void
}

const ProfileInterfaceManagerContext = createContext({} as Props)

export default ProfileInterfaceManagerContext

export const ProfileInterfaceProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)

    return (
        <ProfileInterfaceManagerContext.Provider
            value={{
                loading,
                setLoading
            }}
        >
            {children}
        </ProfileInterfaceManagerContext.Provider>
    )
}
