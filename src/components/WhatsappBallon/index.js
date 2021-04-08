import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import * as S from './styles'

const WhatsappBallon = () => {
    return (
        <S.Container>
            <a
                href={process.env.REACT_APP_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
            >
                <FaWhatsapp size={30} color="#fff" />
            </a>
        </S.Container>
    )
}

export default WhatsappBallon
