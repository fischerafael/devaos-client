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

    handleCreateProExp(e: any): void

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
    const [finishedAt, setFinishedAt] = useState(2021)
    const [description, setDescription] = useState('')

    const [openProModal, setOpenProModal] = useState(false)

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
            setStartedAt(undefined)
            setFinishedAt(undefined)
            setDescription('')
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
                handleCreateProExp,
                loading
            }}
        >
            {children}
        </ExpContext.Provider>
    )
}
