import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../style.css'

const Post = styled.section`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 1rem;
    background: #f5f5f5;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
`

const PostSide = styled.aside`
    color: #9c9c9c;
    text-align: center;
    background: #ffffff;
    padding: 2rem 1rem;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    width: 150px;
`

const PostMain = styled.section`
    background: #f5f5f5;
    width: calc(100% - 150px);
`

const PostHeader = styled.header`
    background: #f5f5f5;
    padding: 1rem 2rem;
`

const PostContent = styled.section`
    background: #fafafa;
    padding: 1rem 2rem;
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
                        <PostSide>{node.frontmatter.date}</PostSide>
                        <PostMain>
                            <PostHeader>
                                <h3>
                                    <Link
                                        style={{ boxShadow: `none` }}
                                        to={node.fields.slug}
                                    >
                                        {title}
                                    </Link>
                                </h3>
                            </PostHeader>
                            <PostContent>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            node.frontmatter.description ||
                                            node.excerpt,
                                    }}
                                />
                            </PostContent>
                        </PostMain>
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
