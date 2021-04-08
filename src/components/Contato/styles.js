import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F5F2F2;
  padding: 3rem 1rem;

  .content {
      max-width: 800px;
      margin: 0 auto;

      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .contato {

          .btn-whatsapp {
              display: flex;
              align-items: center;
              background-color: #18C768;
              color: #fff;
              border-radius: 50px;
              margin-bottom: 1rem;
          }

          .social {
              a {
                  display: inline-block;
                  margin: 1rem 1rem 0 0;
              }
          }
      }

      .divider {
        height: 250px;
        width: 1px;
        background: gainsboro;
        margin: 0 2rem;
      }

      .formulario {
          flex: 1;
          min-width: 350px;
          max-width: 350px;

          button {
            width: 100%;
            height: 50px;
            background: #FEB39C;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 50px;
            margin-top: 1rem;
          }
      }
  }
`;
