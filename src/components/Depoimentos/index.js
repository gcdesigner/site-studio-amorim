import React, { useRef } from 'react'

import SectionTitle from '../../components/SectionTitle'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import depoimentos from './depoimentos'

import { Slide } from 'react-slideshow-image'

import * as S from './styles'

const Depoimentos = () => {
    const slideRef = useRef(null)

    const slideProps = {
        duration: 9000,
        infinite: true,
        pauseOnHover: true,
        arrows: false,
    }

    return (
        <S.Container id="depoimentos">
            <SectionTitle
                title={`Depoimentos`}
                desc={`Veja o que nossas clientes estão comentando sobre nosso trabalho.\nÉ sempre um prazer atendê-las!`}
            />

            <S.Depoimentos>
                <div className="content">
                    <div className="navigation">
                        <button
                            type="button"
                            onClick={() => slideRef.current.goBack()}
                        >
                            <FaChevronLeft size={20} color="#666" />
                        </button>
                        <button
                            type="button"
                            onClick={() => slideRef.current.goNext()}
                        >
                            <FaChevronRight size={20} color="#666" />
                        </button>
                    </div>

                    <Slide {...slideProps} ref={slideRef}>
                        {depoimentos.map((item) => (
                            <div key={item.nome} className="box-texto">
                                <img
                                    src={item.img}
                                    alt={`Cliente ${item.nome}`}
                                />
                                <p>"{item.desc}"</p>
                                <strong>{item.nome}</strong>
                            </div>
                        ))}
                    </Slide>
                </div>
            </S.Depoimentos>
        </S.Container>
    )
}

export default Depoimentos
