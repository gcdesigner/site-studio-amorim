import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import ModalContato from './components/ModalContato'

import GlobalStyle from './styles/global'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes />
                <ModalContato />
            </BrowserRouter>
            <GlobalStyle />
        </>
    )
}

export default App
