import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #f5f2f2;
    padding: 3rem 1rem;
    overflow: hidden;

    .design {
        position: absolute;
        width: 100%;
        z-index: 0;
        opacity: 0.3;
    }

    .content {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        z-index: 1;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        text-align: center;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        .contato {
            @media (max-width: 768px) {
                margin-bottom: 2rem;
            }

            .btn-whatsapp {
                height: 70px;
                max-width: 350px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                background-color: #18c768;
                color: #fff;
                border-radius: 50px;
                margin: 0 auto 2rem;
                text-decoration: none;
                padding: 0.5rem 1.5rem;
                transition: all 0.5s;

                &:hover {
                    box-shadow: 0 0 10px #18c768;
                }
            }

            .social {
                a {
                    display: inline-block;
                    margin: 1rem 1rem;
                }
            }
        }

        .divider {
            height: 250px;
            width: 1px;
            background: gainsboro;
            margin: 0 2rem;

            @media (max-width: 768px) {
                display: none;
            }
        }

        .formulario {
            flex: 1;
            min-width: 250px;
            max-width: 350px;

            button {
                width: 100%;
                height: 50px;
                background: #feb39c;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
                border-radius: 50px;
                margin-top: 1rem;
            }
        }
    }
`
