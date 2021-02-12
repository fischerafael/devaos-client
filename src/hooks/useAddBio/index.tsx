import { useState, useContext } from 'react'
import ProfileInterfaceManagerContext from '../../contexts/profile-interface'
import ReFetchContext from '../../contexts/reFetch'
import devaosApi from '../../services/devaos-api'

const useAddBio = ({ userId }) => {
    const { setReFetch } = useContext(ReFetchContext)
    const { setOpenBioModal, openBioModal, loading, setLoading } = useContext(
        ProfileInterfaceManagerContext
    )

    const [bio, setBio] = useState('')

    async function handleAddBio(e: any) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await devaosApi.post(`/users/${userId}/bio`, {
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

    return {
        bio,
        setBio,
        handleAddBio,
        setOpenBioModal,
        openBioModal,
        loading,
        setLoading
    }
}

export default useAddBio
