import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    visibility: visible;
    /* transition: all 0.5s; */

    &.modal-closed {
        opacity: 0;
        visibility: hidden;
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 5;
    }

    .modal {
        position: fixed;
        background-color: #f5f2f2;
        border-radius: 10px;
        text-align: center;
        padding: 2rem 4rem;
        margin: 0 1rem;
        z-index: 6;

        @media (max-width: 768px) {
            padding: 2rem 1rem;
        }

        .close {
            position: absolute;
            right: 1rem;
            top: 1rem;
            background-color: transparent;

            @media (max-width: 768px) {
                top: 4px;
                right: 4px;
                width: 45px;
                height: 45px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #333;
                border-radius: 50% 10px 50% 50%;
            }
        }
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

        @media (max-width: 768px) {
            padding: 0.5rem 1rem;
            font-size: 1rem;
        }
    }

    .social {
        border-top: 1px dashed #ccc;
        margin-top: 1.5rem;
        padding-top: 1rem;

        small {
            display: block;
        }

        a {
            display: inline-block;
            margin: 1rem 1rem 0;
        }
    }
`
