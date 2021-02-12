import { useContext } from 'react'
import ProfileInterfaceManagerContext from '../../contexts/profile-interface'
import BioContext from '../../contexts/profile/bio'

const useAddBio = () => {
    const { setLoading, loading } = useContext(ProfileInterfaceManagerContext)
    const {
        bio,
        setBio,
        handleAddBio,
        openBioModal,
        setOpenBioModal
    } = useContext(BioContext)

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
