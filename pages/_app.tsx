import { GlobalStyle } from '../src/styles/global-style'
import { defaultTheme, darkTheme } from '../src/styles/default-theme'

import { ThemeProvider } from 'styled-components'
import ThemeContext from '../src/contexts/theme'

import { useState } from 'react'
import { AuthProvider } from '../src/contexts/auth'
import { EditProvider } from '../src/contexts/edit'
import { ReFetchProvider } from '../src/contexts/reFetch'

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
                        <EditProvider>
                            <ReFetchProvider>
                                <GlobalStyle />
                                <Component {...pageProps} />
                            </ReFetchProvider>
                        </EditProvider>
                    </AuthProvider>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    )
}
