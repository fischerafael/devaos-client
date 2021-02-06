import styled from 'styled-components'

const DefaultPageContainer = ({ children }) => {
    return <PageContainerStyle>{children}</PageContainerStyle>
}

export default DefaultPageContainer

export const PageContainerStyle = styled.main`
    background: ${({ theme }) => theme.color.white};
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`
