import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Hearts } from 'svg-loaders-react'

import * as S from './styles'

const Loading = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        document.body.classList.add('loading')

        setTimeout(() => {
            document.body.classList.remove('loading')
        }, 1000)
    }, [pathname])

    return (
        <S.Container>
            <div className="loading-page">
                <Hearts fill="#968181" />
            </div>
        </S.Container>
    )
}

export default Loading
