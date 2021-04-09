import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import ScrollToTop from './components/ScrollToTop'
import ModalContato from './components/ModalContato'

import GlobalStyle from './styles/global'
import Loading from './components/Loading'

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Loading />
                <Routes />
                <ModalContato />
            </BrowserRouter>
            <GlobalStyle />
        </>
    )
}

export default App
