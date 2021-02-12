import { createContext, useContext, useState } from 'react'
import devaosApi from '../../services/devaos-api'
import AuthContext from '../auth'
import ProfileInterfaceManagerContext from '../profile-interface'
import ReFetchContext from '../reFetch'

interface Props {
    handleAddBio(e: any): Promise<void>
    handleDeleteBio(e: any): Promise<void>
    bio: string
    setBio(e: string): void
    openBioModal: boolean
    setOpenBioModal(e: boolean): void
}

const BioContext = createContext({} as Props)

export default BioContext

export const BioProvider = ({ children }) => {
    const { setReFetch } = useContext(ReFetchContext)
    const { user } = useContext(AuthContext)
    const { setLoading } = useContext(ProfileInterfaceManagerContext)

    const [bio, setBio] = useState('')
    const [openBioModal, setOpenBioModal] = useState(false)

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
            setBio('')
            setReFetch((prevState: boolean) => !prevState)
            setOpenBioModal(false)
        } catch (err) {
            alert('Erro ao adicionar Bio, tente novamente.')
            setLoading(false)
        }
    }

    async function handleDeleteBio(e: any) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await devaosApi.delete(`/users/${user._id}/bio`)
            const { data } = response
            console.log('deleted', data)

            setReFetch((prevState: boolean) => !prevState)
            setLoading(false)
            alert('Deletado com sucesso')
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    return (
        <BioContext.Provider
            value={{
                handleAddBio,
                handleDeleteBio,
                bio,
                setBio,
                openBioModal,
                setOpenBioModal
            }}
        >
            {children}
        </BioContext.Provider>
    )
}
