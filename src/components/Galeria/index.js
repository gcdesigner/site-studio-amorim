import React from 'react'

import img1 from '../../assets/galeria/cliente1.png'
import img2 from '../../assets/galeria/cliente2.png'
import img3 from '../../assets/galeria/cliente3.png'

import SectionTitle from '../../components/SectionTitle'

import * as S from './styles'

const Galeria = () => {
    function importAll(r) {
        return r.keys().map(r)
    }

    const images = importAll(
        require.context('../../assets/galeria', false, /\.(png|jpe?g|svg)$/)
    )

    console.log(images)

    return (
        <S.Container id="portfolio">
            <SectionTitle
                title={`Olhar de quem\njá passou por aqui!`}
                desc={`Veja a transformação de algumas de nossas clientes e conheça uma “pontinha” do nosso trabalho`}
            />

            <div className="galeria">
                {images.map((item) => (
                    <img src={item.default} alt="Texto alternativo" />
                ))}
            </div>
        </S.Container>
    )
}

export default Galeria
