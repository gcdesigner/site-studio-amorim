import React from 'react'
import logo from '../../assets/logo-studio-amorim.svg'

import * as S from './styles'

const Footer = () => {
    return (
        <S.Container>
            <iframe
                title="localização Studio Amorim"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740.0942472218363!2d-47.932716229346745!3d-15.79690901603005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31f547f0d96b%3A0x307606200592757b!2sInstituto%20Pulsare!5e0!3m2!1sen!2sbr!4v1617894783420!5m2!1sen!2sbr"
            ></iframe>

            <div className="footer">
                <img src={logo} alt="Studio Amorim, Cílios e Sobrancelha" />
            </div>

            <div className="copyright">
                Todos os direitos reservados - Desenvolvido por{' '}
                <a href="https://www.gcstudio.com.br">GCStudio</a>
            </div>
        </S.Container>
    )
}

export default Footer
