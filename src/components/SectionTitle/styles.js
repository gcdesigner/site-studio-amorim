import styled from 'styled-components'

export const Container = styled.header`
    position: relative;
    margin-bottom: 2rem;

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Cinzel';
        font-weight: 400;
        font-size: 40px;
        color: #543c3c;
        padding-bottom: 1.2rem;
        white-space: break-spaces;
        text-align: center;
    }

    .divider {
        display: block;
        height: 2px;
        width: 150px;
        background-color: #cdaeaa;
        margin: 0 auto;
        margin-bottom: 1rem;
    }

    p {
        max-width: 650px;
        margin: 0 auto;
        color: #666;
        font-size: 1.1rem;
        text-align: center;
        white-space: break-spaces;
        line-height: 1.5;
    }
`
