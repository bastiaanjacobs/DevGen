import React from 'react'

import Layout from '../components/layout'

const Contact = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <h1>Contact</h1>
            <div>lorem ipsum</div>
        </Layout>
    )
}

export default Contact

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
