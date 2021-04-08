import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #FFF;
  padding: 1rem;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
      margin-right: 2rem;
  }

  nav {
      flex: 1;

      ul {
          list-style: none;
          display: flex;
          align-items: center;

          li {

            a {
                display: flex;
                align-items: center;
                height: 50px;
                padding: .5rem .5rem;
                color: #666;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 600;
                transition: .5s all;

                &:hover {
                    color: #000;
                }
            }
          }
      }
  }

  .redes-sociais {
    a {
        margin-right: 1rem;
    }
  }

  button {
      border-radius: 20px;
      background-color: #FEB39C;
  }
`;
