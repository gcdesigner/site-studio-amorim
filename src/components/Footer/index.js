import React from 'react'
import logo from '../../assets/logo-studio-amorim.svg'

import * as S from './styles'

const Footer = () => {
    return (
        <S.Container>
            <iframe
                title="localização Studio Amorim"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.42782064535527!2d-47.93254402619284!3d-15.796812248680013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6e8161ffd617f8!2sStudio%20Amorim%2C%20C%C3%ADlios%20e%20Sobrancelha!5e0!3m2!1spt-PT!2sbr!4v1617969013449!5m2!1spt-PT!2sbr"
                loading="lazy"
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
