import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, html, body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto Slab', serif;
        font-size: 12px;
    }  
    a {
        text-decoration: none;
        font: inherit;
    }  
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.color.dark}
    }
    p {
        font-family: 'Roboto Slab', serif;
        color: ${({ theme }) => theme.color.dark}
    }
    button {
        font-family: 'Roboto', sans-serif;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        cursor: pointer;

        outline: none;
    }
`
