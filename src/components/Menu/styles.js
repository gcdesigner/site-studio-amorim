import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 1rem;
    z-index: 3;

    @media (max-width: 768px) {
        position: relative;
    }

    .content {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    .logo {
        margin-right: 2rem;
        width: 150px;
        max-width: 150px;
        transition: all 0.5s;
        text-align: center;

        img {
            width: 100%;
        }

        @media (max-width: 768px) {
            width: 80%;
            max-width: 180px;
            margin-right: 0;
        }
    }

    .menu-toggle {
        display: none;
        position: fixed;
        right: 1rem;
        top: 1rem;
        width: 50px;
        height: 50px;
        z-index: 4;
        background-color: #fff;
        border-radius: 100%;

        align-items: center;
        justify-content: center;

        &:active {
            background-color: #feb39c;
            border-radius: 100%;
        }

        @media (max-width: 768px) {
            display: flex;
        }
    }

    nav {
        flex: 1;

        @media (max-width: 768px) {
            position: fixed;
            height: 100vh;
            width: 250px;
            right: -250px;
            top: 0;
            background-color: #fff;
            padding: 2rem 2.5rem 2rem 1rem;
            z-index: 3;
            transition: all 0.5s;

            &.opened {
                right: 0;
                box-shadow: 0 0 20px #ccc;
            }
        }

        ul {
            list-style: none;
            display: flex;
            align-items: center;

            @media (max-width: 768px) {
                flex-direction: column;
                align-items: flex-end;
                padding-top: 4.5rem;
            }

            li {
                @media (max-width: 768px) {
                    width: 100%;
                }

                a {
                    display: flex;
                    align-items: center;
                    height: 50px;
                    padding: 0.5rem 0.5rem;
                    color: #666;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-weight: 600;
                    transition: 0.5s all;

                    @media (max-width: 768px) {
                        width: 100%;
                        height: 50px;
                        justify-content: flex-end;
                    }

                    &:hover {
                        color: #000;
                    }

                    &.active {
                        color: #e4a18c;
                    }
                }
            }
        }

        .redes-sociais {
            display: none;

            @media (max-width: 768px) {
                display: flex;
                justify-content: flex-end;
                margin-top: 3rem;
            }
        }
    }

    .redes-sociais {
        display: flex;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            margin: 0 0.5rem;
        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    .agendar {
        height: 35px;
        width: 170px;
        border-radius: 20px;
        background-color: #feb39c;
        color: #000;
        margin-left: 1rem;
        font-size: 0.875rem;

        @media (max-width: 1024px) {
            display: none;
        }
    }

    &.scrolled {
        box-shadow: 0 0 5px #ccc;
        padding: 0.5rem 1rem;

        .logo {
            width: 100px;

            @media (max-width: 768px) {
                width: 80%;
                max-width: 180px;
            }
        }

        nav a {
            font-size: 0.875rem;
        }

        .agendar {
            height: 32px;
            width: 150px;
            font-size: 12px;
        }
    }
`
