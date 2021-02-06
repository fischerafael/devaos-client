import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, html, body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }    
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
    }
    p {
        font-family: 'Roboto Slab', serif;
    }
`
