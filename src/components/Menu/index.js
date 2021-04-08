import React, { useLayoutEffect, useState } from 'react'
import logo from '../../assets/logo-studio-amorim.svg'
import { FaFacebook, FaInstagram, FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'

import * as S from './styles'

const Menu = () => {
    const menuItems = [
        {
            title: 'Serviços',
            to: 'servicos',
        },
        {
            title: 'Sobre',
            to: 'quemsomos',
        },
        {
            title: 'Galeria',
            to: 'portfolio',
        },
        {
            title: 'Depoimentos',
            to: 'depoimentos',
        },
        {
            title: 'Contato',
            to: 'contato',
        },
    ]

    const [toggleMenu, setToggleMenu] = useState(false)
    const [scrollPosition, setPosition] = useState(0)

    useLayoutEffect(() => {
        function updatePosition() {
            setPosition(window.pageYOffset)
        }
        window.addEventListener('scroll', updatePosition)
        updatePosition()
        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    function handleToggleMenu(item) {
        setToggleMenu(!toggleMenu)
        document.body.classList.toggle('menu-opened')

        if (item) {
            document.body.classList.remove('menu-opened')
        }
    }

    return (
        <S.Container className={scrollPosition > 100 ? 'scrolled' : 'normal'}>
            <div className="content">
                <Link
                    className="logo"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-115}
                    duration={500}
                >
                    <img
                        src={logo}
                        alt="Studio Amorim - Cílios e Sobrancelhas"
                    />
                </Link>

                <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => handleToggleMenu()}
                >
                    <FaBars size={25} color="#666" />
                </button>

                <nav className={toggleMenu ? 'opened' : 'closed'}>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={item.title}>
                                <Link
                                    to={item.to}
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-75}
                                    duration={500}
                                    onClick={() => handleToggleMenu(true)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="redes-sociais">
                    <a href="https://julianaamorim.com">
                        <FaInstagram color="#BA1C97" size={25} />
                    </a>
                    <a href="https://julianaamorim.com">
                        <FaFacebook color="#324AC6" size={25} />
                    </a>
                </div>

                <button className="agendar" type="button">
                    Agende seu horário
                </button>
            </div>
        </S.Container>
    )
}

export default Menu
