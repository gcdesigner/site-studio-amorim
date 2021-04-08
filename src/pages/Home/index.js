import React from 'react'

import Menu from '../../components/Menu'
import Banner from '../../components/Banner'
import Servicos from '../../components/Servicos'
import QuemSomos from '../../components/QuemSomos'
import Galeria from '../../components/Galeria'
import Depoimentos from '../../components/Depoimentos'
import Contato from '../../components/Contato'
import Footer from '../../components/Footer'

import BannerHome from '../../assets/banner-home-sem-texto.png'

import * as S from './styles'

const HomePage = () => {
    return (
        <S.Container>
            <Menu />
            <Banner img={BannerHome}>
                <h2>
                    Realce seu olhar <br />e sinta-se <br />
                    <strong>PODEROSA</strong>
                </h2>
                <h3>
                    Alongamento de cílios <br />& Design de sobrancelhas
                </h3>
            </Banner>
            <Servicos />
            <QuemSomos />
            <Galeria />
            <Depoimentos />
            <Contato />
            <Footer />
        </S.Container>
    )
}

export default HomePage
