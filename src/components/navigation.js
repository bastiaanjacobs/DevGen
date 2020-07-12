import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
        <ul>
            {menuLinks.map(link => {
                return (
                    <li>
                        <Link to={link.url}>{link.name}</Link>
                    </li>
                )
            })}
        </ul>
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
