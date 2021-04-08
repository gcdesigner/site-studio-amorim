import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

export const Servico = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .box-texto {
    width: 350px;
    background-color: #1F1D1D;
    padding: 1rem 1.5rem;
    color: #fff;

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
        color: #DF8484;
        font-size: 1.2rem;
      }
    }


    a {
      display: inline-block;
      color: #fff;
      margin: 0 0 0 auto;
    }
  }

  img {
    height: 100%;
    max-width: 100%;
  }
`;

