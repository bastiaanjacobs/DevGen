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
    background: #F4F5FB;
`

const Header = ({ title }) => {
    return (
        <HeaderSection>
            <h1
                style={{
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
            <Navigation />
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
