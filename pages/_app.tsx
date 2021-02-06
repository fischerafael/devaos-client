import { GlobalStyle } from '../src/styles/global-style'
import { defaultTheme } from '../src/styles/default-theme'

import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
