import React from 'react'
import styled from 'styled-components'

import 'normalize.css'

import Header from '../components/header'
import Footer from '../components/footer'

const Provider = styled.section`
    font: 12px sans-serif;
`

const Main = styled.main`
    max-width: 1100px;
    margin: 0 auto;
`

const Layout = ({ title, children }) => {
    return (
        <Provider>
            <Header title={title} />
            <Main>{children}</Main>
            <Footer />
        </Provider>
    )
}

export default Layout
