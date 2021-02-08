import Link from 'next/link'
import styled from 'styled-components'
import { FiX } from 'react-icons/fi'

import CustomLinkForm from '../../atoms/CustomLinkForm'

interface Props {
    heading: string
    subHeading: string
    alternativeLink?: string
    alternativeTitle?: string
}

const SessionFormPage: React.FC<Props> = ({
    heading,
    subHeading,
    alternativeLink,
    alternativeTitle,
    children
}) => {
    return (
        <FormContainerStyle>
            <FormContentStyle>
                <Link href="/">
                    <CustomFiX />
                </Link>
                <h1>{heading}</h1>
                <h2>{subHeading}</h2>
                <form>{children}</form>
                {alternativeLink && (
                    <CustomLinkForm href={alternativeLink}>
                        {alternativeTitle}
                    </CustomLinkForm>
                )}
            </FormContentStyle>
        </FormContainerStyle>
    )
}

export default SessionFormPage

export const FormContainerStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 5rem 0;

    max-width: 80rem;
    width: 90%;
`

export const FormContentStyle = styled.section`
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

    form {
        width: 100%;
    }
`
export const CustomFiX = styled(FiX)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${({ theme }) => theme.color.cian};
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.color.greyBtn};
    }
`
