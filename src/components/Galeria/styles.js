import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 1rem;

    .galeria {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        @media (max-width: 531px) {
            flex-wrap: nowrap;
            overflow-x: auto;
            justify-content: flex-start;
        }

        img {
            max-width: 250px;
            height: 100%;
            flex: 1 1 30%;
            padding: 0.5rem;

            @media (max-width: 531px) {
                min-width: 100%;
            }
        }
    }
`
