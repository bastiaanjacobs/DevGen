import React from 'react'
import styled from 'styled-components'

import 'normalize.css'

import Header from '../components/header'
import Footer from '../components/footer'

const Main = styled.main`
    flex: 1;
    max-width: 1100px;
    padding: 5rem;
    margin: 0 auto;
`

const Layout = ({ title, children }) => {
    return (
        <>
            <Header title={title} />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}

export default Layout
