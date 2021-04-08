import React from 'react';

import SectionTitle from '../../components/SectionTitle';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import quemSomosimg1 from '../../assets/quem-somos-1.png';

import * as S from './styles';

const QuemSomos = () => {
    return (
        <S.Container>
            <div className="content">
                <div className="box-texto">
                    <SectionTitle 
                        title="Quem Somos"
                        desc=""
                    />

                    <p>
                        Quem conhece a experiência e formação profissional na execução de 
                        micropigmentação, sabe como pouquíssimas profissionais conseguiram demonstrar, 
                        realmente, um trabalho de qualidade no Brasil. Neste caso, as pessoas residentes 
                        em Brasília-DF, saíram na frente através da competência, dedicação e responsabilidade 
                        da Clínica Alessandra Ramalho Micropigmentação Estética e Paramédica.
                    </p>

                    <div><strong>Horário de atendimento:</strong> de 08h30 às 19hs</div>
                    <div><strong>Endereço:</strong> CLSW 302 Bloco B, setor Sudoeste - Brasília-DF</div>
                    <div><strong>Telefone:</strong> +55 61 99414-4229</div>
                    <br />

                    <div className="social">
                        <a href="https://julianaamorim.com">
                            <FaInstagram size={30} color="#BA1C97"/>
                        </a>
                        <a href="https://julianaamorim.com">
                            <FaFacebook size={30} color="#324AC6"/>
                        </a>
                        Nos acompanhe nas redes sociais
                    </div>    
                    
                

                </div>

                <div className="galeria">
                    <img src={quemSomosimg1} alt="Texto alternativo" />
                </div>
            </div>
        </S.Container>
    )
}

export default QuemSomos;