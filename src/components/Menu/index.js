import React, { useLayoutEffect, useState } from 'react'
import logo from '../../assets/logo-studio-amorim.svg'
import { FaFacebook, FaInstagram, FaBars } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
import { Link as Router } from 'react-router-dom'

import * as S from './styles'

const Menu = () => {
    const menuItems = [
        {
            title: 'Serviços',
            to: 'servicos',
            sub: [
                {
                    title: 'Cílios',
                    to: '/cilios',
                },
                {
                    title: 'Sobrancelhas',
                    to: '/sobrancelhas',
                },
            ],
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
                <LinkScroll
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
                </LinkScroll>

                <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => handleToggleMenu()}
                >
                    <FaBars size={25} color="#666" />
                </button>

                <nav className={toggleMenu ? 'opened' : 'closed'}>
                    <ul>
                        <li>
                            <Router
                                to="/"
                                onClick={() => handleToggleMenu(true)}
                            >
                                Home
                            </Router>
                        </li>
                        {menuItems.map((item, index) => (
                            <li
                                key={item.title}
                                className={item.sub ? 'hassub' : ''}
                            >
                                <LinkScroll
                                    to={item.to}
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-75}
                                    duration={500}
                                    onClick={() => handleToggleMenu(true)}
                                >
                                    {item.title}
                                </LinkScroll>
                                {item.sub && item.sub.length && (
                                    <ul className="submenu">
                                        {item.sub.map((sub) => (
                                            <Router
                                                to={sub.to}
                                                onClick={() =>
                                                    handleToggleMenu(true)
                                                }
                                            >
                                                {sub.title}
                                            </Router>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="redes-sociais">
                        <a
                            href={process.env.REACT_APP_INSTAGRAM_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram color="#BA1C97" size={25} />
                        </a>
                        <a
                            href={process.env.REACT_APP_FACEBOOK_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFacebook color="#324AC6" size={25} />
                        </a>
                    </div>
                </nav>

                <div className="redes-sociais">
                    <a
                        href={process.env.REACT_APP_INSTAGRAM_URL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram color="#BA1C97" size={25} />
                    </a>
                    <a
                        href={process.env.REACT_APP_FACEBOOK_URL}
                        target="_blank"
                        rel="noreferrer"
                    >
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
