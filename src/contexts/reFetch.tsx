import { createContext, useContext, useEffect, useState } from 'react'
import devaosApi from '../services/devaos-api'
import AuthContext from './auth'

interface Props {
    reFetch: boolean
    setReFetch(e: any): void
    updatedData: object
}

const ReFetchContext = createContext({} as Props)

export default ReFetchContext

export const ReFetchProvider = ({ children }) => {
    const { user } = useContext(AuthContext)

    const [reFetch, setReFetch] = useState(false)

    const [updatedData, setUpdateData] = useState({ notUpdated: true })

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await devaosApi.get(`/profiles/${user.github}`)
                const { data } = response
                setUpdateData(data)
            } catch (err) {
                console.log(
                    'Trying to refetch without providing user github',
                    err
                )
            }
        }
        getUserData()
    }, [reFetch])

    return (
        <ReFetchContext.Provider
            value={{
                reFetch,
                setReFetch,
                updatedData
            }}
        >
            {children}
        </ReFetchContext.Provider>
    )
}
