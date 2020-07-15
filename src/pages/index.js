import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../style.css'

const Post = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    margin: 0;
    border-bottom: 1px solid #F4F5FB;
`

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" />
            <Bio />
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <Post key={node.fields.slug}>
                        <header>
                            <h3>
                                <Link
                                    style={{ boxShadow: `none` }}
                                    to={node.fields.slug}
                                >
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html:
                                        node.frontmatter.description ||
                                        node.excerpt,
                                }}
                            />
                        </section>
                    </Post>
                )
            })}
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`
