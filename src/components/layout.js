import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.15rem 1rem;
    margin: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #333;
`

const Main = styled.main`
    max-width: 1100px;
    margin: 0 auto;
`

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
        header = (
            <h1
                style={{
                    ...scale(1.2),
                    marginBottom: rhythm(1.5),
                    marginTop: 0,
                }}
            >
                <Link
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to={`/`}
                >
                    {title}
                </Link>
            </h1>
        )
    } else {
        header = (
            <h3
                style={{
                    fontFamily: `Montserrat, sans-serif`,
                    marginTop: 0,
                }}
            >
                <Link
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to={`/`}
                >
                    {title}
                </Link>
            </h3>
        )
    }
    return (
        <div>
            <Header>
                <Navigation />
                {header}
            </Header>
            <Main>{children}</Main>
            <Footer />
        </div>
    )
}

export default Layout
