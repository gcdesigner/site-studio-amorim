import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    /* @font-face {
        font-family: 'Cinzel';
        font-style: normal;
        font-weight: normal;
        src: local('Cinzel'), url('../fonts/Cinzel-VariableFont_wght.ttf') format('ttf');
    } */

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        list-style: none;
    }

    body {
        -webkit-font-smoothing: subpixel-antialiased;
        color: #666;

        &.menu-opened, &.modal-opened {
            overflow: hidden;

            .whatsapp-ballon {
                display: none;
            }
        }

        &.loading {
            overflow: hidden;
            
            .loading-page {
                opacity: 1;
                visibility: visible;
            }
        }
    }

    body, input, button {
        font: 16px "Open Sans", sans-serif;
    }

    p {
        line-height: 2;
    }

    #root {
       overflow: hidden;
       padding-top: 110px;

       @media (max-width: 768px) {
        padding-top: 0;
        }
    }

    button {
        cursor: pointer;
        border: 0;
        padding: .5rem 1rem;
        transition: .5s all;

        &:hover {
            opacity: .8;
            transform: scale(1.1)
        }
    }

    a { cursor: pointer; }
    
    .text-center {
        text-align: center;
    }

    .mb-1 {
        margin-bottom: 1rem;
    }

    input {
        width: 100%;
        height: 50px;
        background: #FCFCFC;
        border: 1px solid #E3E3E3;
        box-sizing: border-box;
        border-radius: 50px;
        padding: .5rem 1.5rem;

        + input {
            margin-top: 1rem;
        }
    }

    img {
        width: 100%;
        height: auto;
    }
`
