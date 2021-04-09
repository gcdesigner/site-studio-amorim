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
    // const [galeria, setGaleria] = useState(0);
    // const [cont, setCont] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if(cont >= images.length - 1) {
    //             setCont(0);
    //         } else {
    //             setCont(cont+1);
    //         }
    //         setGaleria(cont);
    //     }, 5000);

    //     return () => clearInterval(interval)

    // }, [cont, images.length])

    return (
        <S.Container id="quemsomos">
            <div className="content">
                <div className="box-texto">
                    <SectionTitle title="Quem Somos" desc="" />

                    <p>
                        Quem conhece a experiência e formação profissional na
                        execução de micropigmentação, sabe como pouquíssimas
                        profissionais conseguiram demonstrar, realmente, um
                        trabalho de qualidade no Brasil. Neste caso, as pessoas
                        residentes em Brasília-DF, saíram na frente através da
                        competência, dedicação e responsabilidade da Clínica
                        Alessandra Ramalho Micropigmentação Estética e
                        Paramédica.
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
                        >
                            {/* <img src={item} alt="texto alternativo" /> */}
                        </div>
                    ))}
                </Fade>
            </div>
        </S.Container>
    )
}

export default QuemSomos
