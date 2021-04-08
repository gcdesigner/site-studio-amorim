import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'

export const Container = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 1rem 5rem;
`

export const Depoimentos = styled.div`
    text-align: center;

    .content {
        position: relative;
        max-width: 780px;
        margin: 0 auto;
    }

    .navigation {
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        z-index: 2;

        button {
            margin: 0 6rem;
            background-color: transparent;
        }
    }

    img {
        width: 150px;
        height: 150px;
        margin: 0 1rem;
        border-radius: 100%;
    }

    .box-texto {
        p {
            margin: 1rem auto 0;
            font-size: 1rem;
            font-style: italic;
        }

        strong {
            display: block;
            margin-top: 0.5rem;
        }
    }
`
