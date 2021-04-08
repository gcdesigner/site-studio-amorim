import React from 'react'

import SectionTitle from '../../components/SectionTitle'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import img from '../../assets/depoimento1.png'

import * as S from './styles'

const Depoimentos = () => {
    return (
        <S.Container id="depoimentos">
            <SectionTitle
                title={`Depoimentos`}
                desc={`Veja o que nossas clientes estão comentando sobre nosso trabalho.\nÉ sempre um prazer atendê-las!`}
            />

            <S.Depoimentos>
                <div className="content">
                    <div className="navigation">
                        <button type="button">
                            <FaChevronLeft />
                        </button>

                        <img src={img} alt="Texto alternativo" />

                        <button type="button">
                            <FaChevronRight />
                        </button>
                    </div>
                    <p>
                        “Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also”
                    </p>
                    <strong>Rakel Santos</strong>
                </div>
            </S.Depoimentos>
        </S.Container>
    )
}

export default Depoimentos
