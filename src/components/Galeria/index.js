import React from 'react'

import img1 from '../../assets/galeria/cliente-1.png'
import img2 from '../../assets/galeria/cliente-2.png'
import img3 from '../../assets/galeria/cliente-3.png'

import SectionTitle from '../../components/SectionTitle'

import * as S from './styles'

const Galeria = () => {
    return (
        <S.Container id="portfolio">
            <SectionTitle
                title={`Olhar de quem\njá passou por aqui!`}
                desc={`Veja a transformação de algumas de nossas clientes e conheça uma “pontinha” do nosso trabalho`}
            />

            <div className="galeria">
                <img src={img1} alt="Texto alternativo" />
                <img src={img2} alt="Texto alternativo" />
                <img src={img3} alt="Texto alternativo" />
                <img src={img1} alt="Texto alternativo" />

                <img src={img1} alt="Texto alternativo" />
                <img src={img2} alt="Texto alternativo" />
                <img src={img3} alt="Texto alternativo" />
                <img src={img1} alt="Texto alternativo" />
            </div>
        </S.Container>
    )
}

export default Galeria
