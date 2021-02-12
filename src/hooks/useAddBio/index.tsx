import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import ReFetchContext from '../../contexts/reFetch'
import devaosApi from '../../services/devaos-api'

const useAddBio = ({ userId, setLoading, setOpenModal }) => {
    const { setReFetch } = useContext(ReFetchContext)
    const router = useRouter()

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
            router.push('/fischerafael')
            setOpenModal(false)
        } catch (err) {
            alert('Erro ao adicionar Bio, tente novamente.')
            setLoading(true)
        }
    }

    return {
        bio,
        setBio,
        handleAddBio
    }
}

export default useAddBio
