import { createContext, useState } from 'react'

interface Props {
    handleChangeTheme(): void
    dark: boolean
}

const ThemeContext = createContext({} as Props)

export default ThemeContext
