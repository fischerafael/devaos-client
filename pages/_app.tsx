import { GlobalStyle } from '../src/styles/global-style'
import { defaultTheme, darkTheme } from '../src/styles/default-theme'

import { ThemeProvider } from 'styled-components'
import ThemeContext from '../src/contexts/theme'

import { useState } from 'react'
import { AuthProvider } from '../src/contexts/auth'

export default function App({ Component, pageProps }) {
    const [dark, setDarkTheme] = useState<boolean>(false)

    function handleChangeTheme() {
        setDarkTheme((prevState) => !prevState)
    }

    return (
        <>
            <ThemeContext.Provider value={{ dark, handleChangeTheme }}>
                <ThemeProvider theme={dark === true ? darkTheme : defaultTheme}>
                    <AuthProvider>
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </AuthProvider>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    )
}
