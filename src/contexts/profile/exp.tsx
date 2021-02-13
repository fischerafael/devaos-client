import { createContext, useContext, useState } from 'react'
import devaosApi from '../../services/devaos-api'
import AuthContext from '../auth'
import ProfileInterfaceManagerContext from '../profile-interface'
import ReFetchContext from '../reFetch'

interface Props {
    title: string
    institution: string
    location: string
    startedAt: number
    finishedAt?: number
    description?: string

    setTitle(e: string): void
    setInstitution(e: string): void
    setLocation(e: string): void
    setStartedAt(e: number): void
    setFinishedAt(e: number): void
    setDescription(e: string): void

    openProModal: boolean
    setOpenProModal(e: boolean): void

    openEduModal: boolean
    setOpenEduModal(e: boolean): void

    handleCreateProExp(e: any): void
    handleCreateEduExp(e: any): void
    handleDeleteExp(e: any): void

    loading: boolean
}

const ExpContext = createContext({} as Props)

export default ExpContext

export const ExpProvider = ({ children }) => {
    const { setReFetch } = useContext(ReFetchContext)
    const { user } = useContext(AuthContext)
    const { loading, setLoading } = useContext(ProfileInterfaceManagerContext)

    const [title, setTitle] = useState('')
    const [institution, setInstitution] = useState('')
    const [location, setLocation] = useState('')
    const [startedAt, setStartedAt] = useState(2021)
    const [finishedAt, setFinishedAt] = useState(new Date().getFullYear())
    const [description, setDescription] = useState('')

    const [openProModal, setOpenProModal] = useState(false)
    const [openEduModal, setOpenEduModal] = useState(false)

    async function handleDeleteExp(id: string) {
        setLoading(true)

        try {
            const response = await devaosApi.delete(
                `users/${user._id}/experiences/${id}`
            )
            const { data } = response
            console.log('deletado com sucesso', data)
            setReFetch((prevState: boolean) => !prevState)
            setLoading(false)
            setOpenProModal(false)
        } catch (err) {
            console.log('erro ao deletar')
            setLoading(false)
        }
    }

    async function handleCreateProExp(e) {
        setLoading(true)
        e.preventDefault()

        try {
            const response = await devaosApi.post(
                `users/${user._id}/experiences/professional`,
                {
                    title,
                    institution,
                    location,
                    startedAt,
                    finishedAt,
                    description
                }
            )
            const { data } = response
            console.log('exp pro criada', data)
            setReFetch((prevState: boolean) => !prevState)
            setLoading(false)
            setOpenProModal(false)
            setTitle('')
            setInstitution('')
            setLocation('')
            setStartedAt(2021)
            setFinishedAt(new Date().getFullYear())
            setDescription(undefined)
        } catch (err) {
            console.log('erro ao criar exp')
            setLoading(false)
        }
    }

    async function handleCreateEduExp(e) {
        setLoading(true)
        e.preventDefault()

        try {
            const response = await devaosApi.post(
                `users/${user._id}/experiences/education`,
                {
                    title,
                    institution,
                    location,
                    startedAt,
                    finishedAt,
                    description
                }
            )
            const { data } = response
            console.log('exp edu criada', data)
            setReFetch((prevState: boolean) => !prevState)
            setLoading(false)
            setOpenEduModal(false)
            setTitle('')
            setInstitution('')
            setLocation('')
            setStartedAt(2021)
            setFinishedAt(new Date().getFullYear())
            setDescription(undefined)
        } catch (err) {
            console.log('erro ao criar exp')
            setLoading(false)
        }
    }

    return (
        <ExpContext.Provider
            value={{
                title,
                institution,
                location,
                startedAt,
                finishedAt,
                description,
                setTitle,
                setInstitution,
                setLocation,
                setStartedAt,
                setFinishedAt,
                setDescription,
                openProModal,
                setOpenProModal,
                openEduModal,
                setOpenEduModal,
                handleCreateProExp,
                handleCreateEduExp,
                handleDeleteExp,
                loading
            }}
        >
            {children}
        </ExpContext.Provider>
    )
}
