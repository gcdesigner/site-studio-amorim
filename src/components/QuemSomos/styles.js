import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F5F2F2;

    .content {
        position: relative;
        max-width: 1280px;
        margin: 0 auto;
        display: flex;

        .box-texto {
            flex: 1;
            width: 40%;
            padding: 3rem 1rem;

            p {
                margin-bottom: 1rem;        
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
            flex: 1;
            width: 60%;

            img { 
                height: 100%;
                width: 100% 
            };
        }
    }
`;
