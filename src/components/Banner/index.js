import React from 'react';

import * as S from './styles';

const Banner = ({ img }) => {
    return (
        <S.Container>
            <img src={img} alt="Banner" />
        </S.Container>
    )
}

export default Banner;