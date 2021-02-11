import Link from 'next/link'
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

interface Props {
    link: string
    type: 'linkedin' | 'github' | 'web'
}

const SocialIcon: React.FC<Props> = ({ link, type }) => {
    return (
        <CustomLink href={link}>
            <a target="_blank">
                {' '}
                {type === 'linkedin' ? (
                    <CustomLinkedin />
                ) : type === 'github' ? (
                    <CustomGithub />
                ) : (
                    <CustomGlobe />
                )}
            </a>
        </CustomLink>
    )
}

export default SocialIcon

export const CustomLink = styled(Link)`
    a {
        cursor: pointer;
    }
`
export const CustomGithub = styled(FaGithub)`
    color: ${({ theme }) => theme.color.dark};
    width: 20px;
    height: 20px;
    margin: 1rem;

    transition: 0.5s;

    &:first-child {
        margin-left: 0;
    }

    &:hover {
        color: ${({ theme }) => theme.color.cian};
    }
`
export const CustomLinkedin = styled(FaLinkedin)`
    color: ${({ theme }) => theme.color.dark};
    width: 20px;
    height: 20px;
    margin: 1rem;

    transition: 0.5s;
    &:hover {
        color: ${({ theme }) => theme.color.cian};
    }
`
export const CustomGlobe = styled(FaGlobe)`
    color: ${({ theme }) => theme.color.dark};
    width: 20px;
    height: 20px;
    margin: 1rem;

    transition: 0.5s;
    &:hover {
        color: ${({ theme }) => theme.color.cian};
    }
`
