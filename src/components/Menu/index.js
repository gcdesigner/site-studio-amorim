import React from 'react';
import logo from '../../assets/logo-studio-amorim.svg'
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import * as S from './styles';


const Menu = () => {
    return (
        <S.Container>
            <img className="logo" src={logo} />
            {/* <nav>
                <ul>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Depoimentos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav> */}
            <div className="redes-sociais">
                <a href="#"><FaFacebook color="#324AC6" /></a>
                <a href="#"><FaInstagram color="#BA1C97" /></a>
            </div>
            <button type="button">
                Agende seu horário
            </button>
        </S.Container>
    )
}

export default Menu;