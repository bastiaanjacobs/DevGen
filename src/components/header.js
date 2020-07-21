import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Navigation from './navigation'

const HeaderSection = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    margin: 0 0 1rem 0;
    background: #fff;
    border-bottom: 1px solid #dbdbdb;
`

const HeaderContained = styled.section`
    max-width: 1100px;
    margin: 0 auto;
`

const Header = ({ title }) => {
    return (
        <HeaderSection>
            <HeaderContained>
                <h1>
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
                <Navigation />
            </HeaderContained>
        </HeaderSection>
    )
}

export default Header

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
