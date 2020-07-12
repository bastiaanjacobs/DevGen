import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Navigation from './navigation'

const HeaderSection = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.15rem 1rem;
    margin: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #333;
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
