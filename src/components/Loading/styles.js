import styled from 'styled-components'

export const Container = styled.div`
    /* background-color: #fff;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 9;
    top: 0; */

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
