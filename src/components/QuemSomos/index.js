import React from 'react'

import SectionTitle from '../../components/SectionTitle'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import quemSomosimg1 from '../../assets/quem-somos-1.png'
import quemSomosimg2 from '../../assets/quem-somos-2.png'
import quemSomosimg3 from '../../assets/quem-somos-3.png'

import { Fade } from 'react-slideshow-image'

import * as S from './styles'

const QuemSomos = () => {
    const images = [quemSomosimg1, quemSomosimg2, quemSomosimg3]

    return (
        <S.Container id="quemsomos">
            <div className="content">
                <div className="box-texto">
                    <SectionTitle title="Quem Somos" desc="" />

                    <p>
                        Somos um Studio de estética de alto padrão,
                        especializado em Extensão de Cílios e Design de
                        sobrancelhas.
                    </p>

                    <p>
                        Estamos há mais de 8 anos no mercado da beleza
                        oferecendo o que há de mais moderno e profissional. Com
                        certificação internacional e centenas de horas trabalho
                        estamos mais do que preparadas para lhe proporcionar uma
                        experiência inesquecível e satisfatória.
                    </p>

                    <p>
                        Não perca tenho. Venha conhecer nosso espaço que foi
                        idealizado nos mínimos detalhes para fazer com que você
                        sinta-se em casa.
                    </p>

                    <div>
                        <strong>Horário de atendimento:</strong> de 09h às 18hs
                    </div>
                    <div>
                        <strong>Endereço:</strong>{' '}
                        {process.env.REACT_APP_ENDERECO}
                    </div>
                    <div>
                        <strong>Telefone:</strong>{' '}
                        <a href="tel:+5561994144229">
                            {process.env.REACT_APP_TELEFONE}
                        </a>
                    </div>

                    <br />

                    <div className="social">
                        <a
                            href={process.env.REACT_APP_INSTAGRAM_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram size={30} color="#BA1C97" />
                        </a>
                        <a href="https://julianaamorim.com">
                            <FaFacebook size={30} color="#324AC6" />
                        </a>
                        Nos acompanhe nas redes sociais
                    </div>
                </div>

                <Fade className="galeria" arrows={false} infinite={true}>
                    {images.map((item, index) => (
                        <div
                            className="each-fade"
                            key={index}
                            style={{ backgroundImage: `url(${item})` }}
                        ></div>
                    ))}
                </Fade>
            </div>
        </S.Container>
    )
}

export default QuemSomos
