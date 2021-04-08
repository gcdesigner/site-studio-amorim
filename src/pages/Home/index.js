import React from 'react';

import * as S from './styles';

import Menu from '../../components/Menu'
import Banner from '../../components/Banner'
import Servicos from '../../components/Servicos'
import QuemSomos from '../../components/QuemSomos'
import Galeria from '../../components/Galeria'
import Depoimentos from '../../components/Depoimentos'
import Contato from '../../components/Contato'
import Footer from '../../components/Footer'

import BannerHome from '../../assets/banner-home.png';

const HomePage = () => {
    return (
        <S.Container>
            <Menu />
            <Banner img={BannerHome} />
            <Servicos />
            <QuemSomos />
            <Galeria />
            <Depoimentos />
            <Contato />
            <Footer />
        </S.Container>
    )
}

export default HomePage;