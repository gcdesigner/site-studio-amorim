import React from 'react'
import logotipo from '../../assets/logotipo-studio-amorim.svg'

import * as S from './styles'

const Banner = ({ img, children }) => {
    return (
        <S.Container id="home" style={{ backgroundImage: `url(${img})` }}>
            <div className="content">
                <div className="box-texto">
                    <img
                        src={logotipo}
                        alt="studio amorim"
                        className="logotipo"
                    />
                    {children}
                </div>
            </div>
        </S.Container>
    )
}

export default Banner
