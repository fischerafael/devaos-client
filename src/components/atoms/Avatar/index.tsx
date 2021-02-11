import React from 'react'
import styled from 'styled-components'

interface Props {
    src?: string
    alt?: string
}

const Avatar: React.FC<Props> = ({ src, alt }) => {
    return <AvatarStyle>{src && <img src={src} alt={alt} />}</AvatarStyle>
}

export default Avatar

export const AvatarStyle = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
`
