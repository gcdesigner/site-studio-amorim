import styled from 'styled-components'

export const Container = styled.div`
    .loading-page {
        position: fixed;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        top: 0;
        left: 0;
        background: #fff;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        z-index: 10;

        visibility: hidden;
        opacity: 0;
    }
`
