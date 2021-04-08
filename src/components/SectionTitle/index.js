import React from 'react';

import * as S from './styles';

const SectionTitle = ({ title, desc, center }) => {
    return (
        <S.Container center={center}>
            <h3>{title}</h3>
            <span className="divider">&nbsp;</span>
            <p>{desc}</p>
        </S.Container>
    )
}

export default SectionTitle;