import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 3rem 1rem;

    .servicos {
        @media (max-width: 768px) {
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-start;
            overflow-x: auto;
        }
    }
`

export const Servico = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    &.left {
        .box-texto {
            margin-right: 1rem;
        }
    }

    &.right {
        flex-direction: row-reverse;

        .box-texto {
            margin-left: 1rem;
        }

        @media (max-width: 768px) {
            flex-direction: column-reverse;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: flex-end;
        justify-content: flex-end;
        min-width: 80%;
        background-color: #3c312f;

        + div {
            margin-left: 1rem;
        }
    }

    .box-texto {
        width: 450px;
        min-height: 250px;
        background-color: #3c312f;
        padding: 2rem 3rem;
        color: #fff;

        @media (max-width: 768px) {
            position: relative;
            width: 100%;
            min-height: inherit;
            margin: 0 !important;
            text-align: center;
            z-index: 1;
        }

        small {
            font-weight: 300;
            font-size: 14px;
        }

        h4 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
            font-weight: 600;
            color: #df8484;
        }

        p {
            font-weight: 300;
            margin-bottom: 0.5rem;
            line-height: 1.5;
        }
    }

    .img-servico {
        width: calc(100% - 470px);
        height: auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        @media (max-width: 768px) {
            width: 100%;
            height: 250px;
            z-index: 0;
        }
    }
`
