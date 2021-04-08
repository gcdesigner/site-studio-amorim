import React from 'react';

import SectionTitle from '../../components/SectionTitle'
import { FaWhatsapp, FaPhone, FaMap, FaFacebook, FaInstagram } from 'react-icons/fa'

import * as S from './styles';

const Contato = () => {
    return (
        <S.Container>
            <SectionTitle
                title={`Fale conosco`}
                desc={`Alguma dúvida? Entre em contatos conosco e saiba mais\nsobre nosso atendimento`}
            />

            <div className="content">
                <div className="contato">
                    <button className="btn-whatsapp" type="button">
                        Atendimento via Whatsapp 
                        <FaWhatsapp color="#fff" size={30} style={{ marginLeft: '.5rem' }} />
                    </button>

                    <p>
                        <FaPhone color="#333" style={{ marginRight: '.5rem' }} />
                        +55 61 99414-4229
                    </p>
                    <p>
                        <FaMap color="#333" style={{ marginRight: '.5rem' }} />
                        CLSW 302 Bloco B, Sudoeste, <br />Brasília-DF
                    </p>

                    <div className="social">
                        <a href="https://julianaamorim.com">
                            <FaInstagram color="#BA1C97" size={30} />
                        </a>
                        <a href="https://julianaamorim.com">
                            <FaFacebook color="#324AC6" size={30} />
                        </a>
                    </div>
                </div>

                <div className="divider"></div>

                <form className="formulario">
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Whatsapp" />
                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </S.Container>
    )
}

export default Contato;