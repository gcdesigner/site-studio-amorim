import styled from 'styled-components'

export const Container = styled.div`
    background-color: #f5f2f2;
    padding: 3rem 1rem 5rem;

    .content {
        max-width: 800px;
        margin: 0 auto;

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
                height: 50px;
                display: flex;
                align-items: center;
                background-color: #18c768;
                color: #fff;
                border-radius: 50px;
                margin-bottom: 2rem;
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
