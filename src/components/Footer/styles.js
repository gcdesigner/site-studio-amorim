import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;

    iframe {
        width: 100%;
        height: 350px;
        border: 0;
    }

    .footer {
        padding: 2rem 1rem;
        text-align: center;

        img {
            width: 250px;
        }
    }

    .copyright {
        border-top: 1px solid #f3f3f3;
        padding: 1.5rem 1rem;
        font-size: 0.875rem;

        a {
            color: #2d9cdb;
            font-weight: bold;
        }
    }
`
