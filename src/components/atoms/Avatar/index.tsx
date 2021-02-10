import React from 'react'
import styled from 'styled-components'

interface Props {
    avatar?: string
    alt?: string
}

const Avatar: React.FC<Props> = ({ avatar, alt }) => {
    return (
        <AvatarStyle
            src={
                avatar
                    ? avatar
                    : 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
            }
            alt={alt}
        />
    )
}

export default Avatar

export const AvatarStyle = styled.img`
    border-radius: 50%;
    width: 50%;

    z-index: 10;

    @media (max-width: 800px) {
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
    }
`
