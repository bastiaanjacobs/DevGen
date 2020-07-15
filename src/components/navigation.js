import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

const NavigationList = styled.ul `
    padding: 0;
    margin-left: auto;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const NavigationItem = styled.li`
    padding: 0;
    margin: 0 1rem 0 0;
    list-style: none;
`

const Navigation = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    menuLinks {
                        name
                        url
                    }
                }
            }
        }
    `)

    const menuLinks = data.site.siteMetadata.menuLinks

    return (
        <NavigationList>
            {menuLinks.map((link, i) => {
                return (
                    <NavigationItem key={i}>
                        <Link to={link.url}>{link.name}</Link>
                    </NavigationItem>
                )
            })}
        </NavigationList>
    )
}

Navigation.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

Navigation.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
}

export default Navigation
