import { GlobalStyle } from '../src/styles/global-style'
import { defaultTheme, darkTheme } from '../src/styles/default-theme'

import { ThemeProvider } from 'styled-components'
import ThemeContext from '../src/contexts/theme'

import { useState } from 'react'
import { AuthProvider } from '../src/contexts/auth'
import { EditProvider } from '../src/contexts/edit'
import { ReFetchProvider } from '../src/contexts/reFetch'
import { ProfileManagerProvider } from '../src/contexts/profile-manager'
import { ProfileInterfaceProvider } from '../src/contexts/profile-interface'
import { BioProvider } from '../src/contexts/profile/bio'

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
                                <ProfileInterfaceProvider>
                                    <ProfileManagerProvider>
                                        <BioProvider>
                                            <GlobalStyle />
                                            <Component {...pageProps} />
                                        </BioProvider>
                                    </ProfileManagerProvider>
                                </ProfileInterfaceProvider>
                            </ReFetchProvider>
                        </EditProvider>
                    </AuthProvider>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    )
}
