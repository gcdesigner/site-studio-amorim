import React from 'react'

import SectionTitle from '../../components/SectionTitle'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
import logotipo from '../../assets/logotipo-studio-amorim-pequena.svg'

import { FiPhone, FiMapPin } from 'react-icons/fi'

import * as S from './styles'

const Contato = () => {
    return (
        <S.Container id="contato">
            <img className="design" src={logotipo} alt="" />
            <SectionTitle
                title={`Fale conosco`}
                desc={`Alguma dúvida? Entre em contatos conosco e saiba mais sobre nosso atendimento`}
            />

            <div className="content">
                <div className="contato">
                    <a
                        href={process.env.REACT_APP_WHATSAPP_URL}
                        className="btn-whatsapp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Atendimento via Whatsapp
                        <FaWhatsapp
                            color="#fff"
                            size={30}
                            style={{ marginLeft: '.5rem' }}
                        />
                    </a>

                    <p>
                        <FiPhone
                            color="#333"
                            style={{ marginRight: '.5rem' }}
                        />
                        {process.env.REACT_APP_TELEFONE}
                    </p>

                    <p>
                        <FiMapPin
                            color="#333"
                            style={{ marginRight: '.5rem' }}
                        />
                        {process.env.REACT_APP_ENDERECO}
                    </p>

                    <div className="social">
                        <a
                            href={process.env.REACT_APP_INSTAGRAM_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram color="#BA1C97" size={30} />
                        </a>
                        <a
                            href={process.env.REACT_APP_FACEBOOK_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFacebook color="#324AC6" size={30} />
                        </a>
                    </div>
                </div>

                {/* <div className="divider"></div>

                <form className="formulario">
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Whatsapp" />
                    <button type="submit">Enviar</button>
                </form> */}
            </div>
        </S.Container>
    )
}

export default Contato
