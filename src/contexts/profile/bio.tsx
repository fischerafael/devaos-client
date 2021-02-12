import { createContext, useContext, useState } from 'react'
import devaosApi from '../../services/devaos-api'
import AuthContext from '../auth'
import ProfileInterfaceManagerContext from '../profile-interface'
import ReFetchContext from '../reFetch'

interface Props {
    handleAddBio(e: any): Promise<void>
}

const BioContext = createContext({} as Props)

export default BioContext

export const BioProvider = ({ children }) => {
    const { setReFetch } = useContext(ReFetchContext)
    const { user } = useContext(AuthContext)
    const { setOpenBioModal, openBioModal, setLoading, loading } = useContext(
        ProfileInterfaceManagerContext
    )

    const [bio, setBio] = useState('')

    async function handleAddBio(e: any) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await devaosApi.post(`/users/${user._id}/bio`, {
                bio
            })
            const { data } = response
            console.log('created bio', data)

            setLoading(true)
            setReFetch((prevState: boolean) => !prevState)
            setOpenBioModal(false)
        } catch (err) {
            alert('Erro ao adicionar Bio, tente novamente.')
            setLoading(true)
        }
    }

    return (
        <BioContext.Provider value={{ handleAddBio }}>
            {children}
        </BioContext.Provider>
    )
}
