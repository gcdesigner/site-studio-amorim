import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        list-style: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        color: #666;
    }

    body, input, button {
        font: 16px "Open Sans", sans-serif;
    }

    p {
        line-height: 2;
    }

    /* #root {
        max-width: 1280px;
        margin: 0 auto;
    } */

    button {
        cursor: pointer;
        border: 0;
        padding: .5rem 1rem;
        transition: .5s all;

        &:hover {
            opacity: .8;
        }
    }
    
    .text-center {
        text-align: center;
    }

    .mb-1 {
        margin-bottom: 1rem;
    }

    input {
        width: 100%;
        height: 58px;
        background: #FCFCFC;
        border: 1px solid #E3E3E3;
        box-sizing: border-box;
        border-radius: 50px;
        padding: .5rem 1.5rem;

        + input {
            margin-top: 1rem;
        }
    }
`;
