import React from 'react'

import { Link } from 'react-router-dom'

import SectionTitle from '../../components/SectionTitle'
import imgCilios from '../../assets/alongamento-cilios-home.jpg'
import imgSobrancelhas from '../../assets/design-sobrancelhas-home.jpg'

import * as S from './styles'

const Servicos = () => {
    return (
        <S.Container id="servicos">
            <SectionTitle
                title="Nossos serviços"
                desc="Saber escolher o procedimento é um passo muito importante antes de realçar a sua beleza!"
            />

            <S.Servico>
                <div className="box-texto" style={{ marginRight: '1rem' }}>
                    <h4>Extensão de cílios</h4>
                    <p>Técnicas aplicadas</p>
                    <ul>
                        <li>Volume Russo</li>
                        <li>Volume Brasileiro</li>
                        <li>Fio a fio clássico</li>
                        <li>Lash lifting</li>
                        <li>Híbrido</li>
                    </ul>
                    <Link to="/cilios">Saiba mais +</Link>
                </div>
                <div
                    className="img-servico"
                    style={{ backgroundImage: `url(${imgCilios})` }}
                ></div>
            </S.Servico>

            <S.Servico>
                <div
                    className="img-servico"
                    style={{ backgroundImage: `url(${imgSobrancelhas})` }}
                ></div>
                <div className="box-texto" style={{ marginLeft: '1rem' }}>
                    <h4>Design de sobrancelhas</h4>
                    <p>Técnicas aplicadas</p>
                    <ul>
                        <li>Design Simples</li>
                        <li>Design com Linha</li>
                        <li>Design em Henna</li>
                        <li>Micropigmentação</li>
                    </ul>
                    <Link to="/sobrancelhas">Saiba mais +</Link>
                </div>
            </S.Servico>
        </S.Container>
    )
}

export default Servicos
