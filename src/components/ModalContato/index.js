import React, { useEffect, useState } from 'react'

import { FaFacebook, FaInstagram, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import SectionTitle from '../SectionTitle'

import * as S from './styles'

const ModalContato = () => {
    const [modal, setModal] = useState()

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('modal-contato'))

        if (storage === false) {
            setModal(false)
        } else {
            setModal(true)
        }

        if (modal) {
            document.body.classList.add('modal-opened')
        }
    }, [modal])

    function closeModal() {
        localStorage.setItem('modal-contato', false)
        setModal(false)
        document.body.classList.remove('modal-opened')
    }

    return (
        <S.Container className={modal ? 'modal-opened' : 'modal-closed'}>
            <div className="modal">
                <button
                    type="button"
                    className="close"
                    title="Fechar"
                    onClick={() => closeModal()}
                >
                    <FaTimes size={20} />
                </button>
                <SectionTitle
                    title="Fale Conosco"
                    desc={`Não perca tempo!\nAgende seu horário agora mesmo!`}
                />
                <div className="contato">
                    <a
                        href={process.env.REACT_APP_WHATSAPP_URL}
                        className="btn-whatsapp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Agendamento pelo Zap
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
                        <small>Nos acompanhe nas redes sociais</small>
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
            </div>
        </S.Container>
    )
}

export default ModalContato
