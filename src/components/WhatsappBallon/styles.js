import styled from 'styled-components'

export const Container = styled.div`
    a {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        background-color: #18c768;
        box-shadow: 0 0 10px #ccc;
        z-index: 3;
        transition: all 0.5s;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            transform: scale(1.2);
        }
    }
`
