import { createContext, useState } from 'react'

interface Props {
    activeEditMode: boolean
    handleEditMode(): void
}

const EditContext = createContext({} as Props)

export default EditContext

export const EditProvider = ({ children }) => {
    const [activeEditMode, setEditMode] = useState(false)

    function handleEditMode() {
        setEditMode(!activeEditMode)
    }

    return (
        <EditContext.Provider value={{ activeEditMode, handleEditMode }}>
            {children}
        </EditContext.Provider>
    )
}
