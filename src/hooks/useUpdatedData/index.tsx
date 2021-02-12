import React, { useContext, useEffect } from 'react'
import ReFetchContext from '../../contexts/reFetch'

const useUpdatedData = (setInitialData: (e: NextProps) => void) => {
    const { updatedData } = useContext(ReFetchContext)
    useEffect(() => {
        const updatedDataTypes = updatedData as NextProps
        if (updatedDataTypes.github) {
            setInitialData(updatedData as NextProps)
        }
    }, [updatedData])
}

export default useUpdatedData
