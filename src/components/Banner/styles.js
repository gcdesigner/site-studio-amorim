import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 150px);
    margin: 0 auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #968181;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        top: 0;
        left: 0;
    }

    .content {
        position: relative;
        max-width: 1280px;
        padding: 3rem 1rem;
        margin: 0 auto;

        .box-texto {
            max-width: 650px;
            color: #fff;

            @media (max-width: 768px) {
                text-align: center;
            }

            .logotipo {
                fill: #fff;
                width: 200px;
                margin: 0 auto;
                display: block;
                margin-bottom: 2rem;
            }

            h2 {
                font-family: 'Cinzel';
                font-weight: 400;
                font-size: 4rem;
                margin-bottom: 1rem;
                line-height: 1.1;

                strong {
                    font-weight: 600;
                    font-size: 5rem;
                }
            }

            h3 {
                font-size: 2rem;
                font-weight: 200;
                opacity: 0.8;
            }
        }
    }
`
