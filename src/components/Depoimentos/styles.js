import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 1rem;
`

export const Depoimentos = styled.div`
    text-align: center;

    p {
        max-width: 780px;
        margin: 1rem auto 0;
        font-size: 0.875rem;
    }

	strong {
		display: block;
		margin-top: .5rem;
	}

    .navigation {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
        margin-top: 1rem;

		img {
			margin: 0 1rem;
		}

		button {
			margin: 0 .5rem;
			background-color: transparent;
		}
    }
`
