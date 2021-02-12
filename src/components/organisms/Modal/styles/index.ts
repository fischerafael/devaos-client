import styled from 'styled-components'

export const ModalContainerStyle = styled.div`
    z-index: 20;
    position: fixed;
    top: 0;

    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: hidden;
`
export const ModalContentStyle = styled.div`
    position: relative;
    background: ${({ theme }) => theme.color.lightGrey};
    border-radius: 1rem;
    padding: 2rem;

    max-width: 25rem;
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 2rem;
        display: flex;
        align-items: center;
        text-align: center;
        padding-top: 2rem;
    }

    form {
        width: 100%;
    }
`
