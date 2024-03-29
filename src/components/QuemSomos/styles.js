import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'

export const Container = styled.section`
    position: relative;
    background-color: #f5f2f2;
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;

    /* &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.5);
    } */

    .content {
        position: relative;
        max-width: 1280px;
        margin: 0 auto;

        .box-texto {
            position: relative;
            max-width: 750px;
            padding: 3rem 1rem;
            z-index: 2;

            @media (max-width: 768px) {
                text-align: center;
            }

            p {
                margin-bottom: 1rem;
            }

            > div {
                margin-top: 0.5rem;
            }

            a {
                color: #bb4623;
                text-decoration: none;
            }

            .social {
                display: flex;
                align-items: center;

                a {
                    margin-right: 1rem;
                }
            }
        }

        .galeria {
            position: absolute;
            width: 60%;
            height: 100%;
            top: 0;
            right: -4.4rem;
            z-index: 1;

            @media (max-width: 768px) {
                position: relative;
                width: 100%;
                height: 300px;
                right: 0;
            }

            div {
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-position: left;
                background-size: cover;

                @media (max-width: 768px) {
                    background-position: right;
                }
            }

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
`
