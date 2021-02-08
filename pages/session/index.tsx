import styled from 'styled-components'
import CustomHead from '../../src/components/atoms/CustomHead'
import Input from '../../src/components/atoms/Input'
import MainButton from '../../src/components/atoms/MainButton'
import NavBar from '../../src/components/organisms/NavBar'
import DefaultPageContainer from '../../src/components/templates/DefaultPageContainer'

const index = () => {
    return (
        <>
            <DefaultPageContainer>
                <CustomHead title="Entrar" />
                <NavBar />
                <FormContainerStyle>
                    <FormContentStyle>
                        <h1>Entrar</h1>
                        <h2>Acesse sua conta</h2>
                        <form>
                            <Input
                                type="text"
                                id="github"
                                title="Usuário GitHub"
                            />
                        </form>
                        <MainButton>ENTRAR</MainButton>
                        <a>Já sou cadastrado.</a>
                    </FormContentStyle>
                </FormContainerStyle>
            </DefaultPageContainer>
        </>
    )
}

export default index
export const FormContainerStyle = styled.section`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 85vh;

    max-width: 80rem;
    width: 90%;
`
export const FormContentStyle = styled.section`
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

    h2 {
        font-family: 'Roboto Slab', serif;

        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        display: flex;
        align-items: center;
        text-align: center;

        padding-bottom: 2rem;
    }
`
