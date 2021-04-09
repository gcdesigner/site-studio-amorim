import React, { useEffect } from 'react'

import Menu from '../../components/Menu'
import Banner from '../../components/Banner'
import QuemSomos from '../../components/QuemSomos'
import Galeria from '../../components/Galeria'
import Depoimentos from '../../components/Depoimentos'
import Contato from '../../components/Contato'
import Footer from '../../components/Footer'

import BannerCilios from '../../assets/banner-alongamento-cilios.png'

import * as S from './styles'
import WhatsappBallon from '../../components/WhatsappBallon'
import TecnicasCilios from '../../components/TecnicasCilios'

const CiliosPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <S.Container>
            <Menu />
            <Banner img={BannerCilios}>
                <h2 style={{ textAlign: 'center' }}>
                    Alongamento <br />
                    de <strong>CÍLIOS</strong>
                </h2>
                <h3 style={{ textAlign: 'center' }}>
                    Você linda e maquiada <br />
                    todos os dias
                </h3>
            </Banner>
            <TecnicasCilios />
            <QuemSomos />
            <Galeria />
            <Depoimentos />
            <Contato />
            <Footer />
            <WhatsappBallon />
        </S.Container>
    )
}

export default CiliosPage
