import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 3rem 1rem;
`

export const Servico = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    .box-texto {
        width: 350px;
        background-color: #1f1d1d;
        padding: 1rem 1.5rem;
        color: #fff;

        @media (max-width: 768px) {
            position: relative;
            width: 50%;
            min-width: 200px;
            margin: 0 !important;
            text-align: center;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.85);
        }

        h4 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
            font-weight: 600;
        }

        p {
            font-weight: 300;
            margin-bottom: 0.5rem;
        }

        ul {
            margin-bottom: 1rem;
            li {
                color: #df8484;
                font-size: 1.2rem;

                + li {
                    margin-top: 3px;
                }
            }
        }

        a {
            display: inline-block;
            color: #fff;
            margin: 0 0 0 auto;
        }
    }

    .img-servico {
        width: calc(100% - 370px);
        height: auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        @media (max-width: 768px) {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
        }
    }
`
