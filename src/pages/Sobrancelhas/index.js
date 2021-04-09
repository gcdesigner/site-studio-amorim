import React, { useEffect } from 'react'

import Menu from '../../components/Menu'
import Banner from '../../components/Banner'
import QuemSomos from '../../components/QuemSomos'
import Galeria from '../../components/Galeria'
import Depoimentos from '../../components/Depoimentos'
import Contato from '../../components/Contato'
import Footer from '../../components/Footer'

import BannerSobrancelhas from '../../assets/banner-design-sobrancelhas.png'

import * as S from './styles'
import WhatsappBallon from '../../components/WhatsappBallon'
import TecnicasSobrancelhas from '../../components/TecnicasSobrancelhas'

const SobrancelhasPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <S.Container>
            <Menu />
            <Banner img={BannerSobrancelhas}>
                <h2 style={{ textAlign: 'center' }}>
                    Design de <br />
                    <strong>SOBRANCELHAS</strong>
                </h2>
                <h3 style={{ textAlign: 'center' }}>
                    Você linda e maquiada <br />
                    todos os dias
                </h3>
            </Banner>
            <TecnicasSobrancelhas />
            <QuemSomos />
            <Galeria />
            <Depoimentos />
            <Contato />
            <Footer />
            <WhatsappBallon />
        </S.Container>
    )
}

export default SobrancelhasPage
