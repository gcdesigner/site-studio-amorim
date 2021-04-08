import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F5F2F2;
  padding: 3rem 1rem;

  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;

    .content {
        position: relative;
        max-width: 1280px;
        margin: 0 auto;

        .box-texto {
            max-width: 650px;

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
            position: absolute;
            width: 60%;
            height: 100%;
            top: -3rem;
            right: -1rem;

            img { 
                height: 100%;
                width: 100% 
            };
        }
    }
`;
