import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { DefaultButtonStyle } from '../../atoms/DefaultButton'

const ProfileCard = ({ avatar, name, title, github }) => {
    return (
        <CardContainerStyle>
            <img src={avatar} alt="" />
            <div className="linear">
                <div className="card-title-container">
                    <h2>{name}</h2>
                    <p>{title}</p>
                    <Link href={`/${github}`}>
                        <a>
                            <DefaultButtonStyle>VER PERFIL</DefaultButtonStyle>
                        </a>
                    </Link>
                </div>
            </div>
        </CardContainerStyle>
    )
}

export default ProfileCard

export const CardContainerStyle = styled.div`
    position: relative;
    background: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        z-index: 99;
        height: 55vh;
        object-fit: cover;
    }

    .linear {
        position: absolute;
        bottom: 0;
        z-index: 100;
        width: 100%;
        height: 40vh;

        background: linear-gradient(transparent, black);

        .card-title-container {
            background: transparent;
            padding: 2rem;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            flex-direction: column;
            bottom: 0;
            z-index: 101;
            width: 100%;
            height: 40vh;

            h2 {
                font-size: 1.5rem;
                color: #fff;
                margin-bottom: 0.5rem;
            }

            p {
                color: #fff;
                font-size: 0.75rem;
            }

            a {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
        }
    }
`
