import React from 'react'

import SectionTitle from '../../components/SectionTitle'

import tecnicas from './tecnicas'

import * as S from './styles'

const TecnicasCilios = () => {
    return (
        <S.Container id="servicos">
            <SectionTitle
                title="Técnicas utilizadas"
                desc="Conheça detalhes sobre cada técnica utilizada em nosso studio"
            />

            <div className="servicos">
                {tecnicas.map((item, index) => (
                    <S.Servico
                        key={index}
                        className={index % 2 === 0 ? 'left' : 'right'}
                    >
                        <div className="box-texto">
                            <small>Alongamento de cílios</small>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>

                        <div
                            className="img-servico"
                            style={{ backgroundImage: `url(${item.img})` }}
                        ></div>
                    </S.Servico>
                ))}
            </div>
        </S.Container>
    )
}

export default TecnicasCilios
