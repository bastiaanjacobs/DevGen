import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Intro = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 1rem 1rem 3rem 1rem;
    max-width: 480px;
`

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/me.png/" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `)

    const { author, social } = data.site.siteMetadata
    return (
        <>
            <Intro>
                <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={author.name}
                    style={{
                        marginRight: 15,
                        minWidth: 50,
                        borderRadius: `100%`,
                    }}
                    imgStyle={{
                        borderRadius: `50%`,
                    }}
                />
                <p>
                    Written by <strong>{author.name}</strong> {author.summary}
                    {` `}
                    <a href={`https://twitter.com/${social.twitter}`}>
                        You should follow him on Twitter
                    </a>
                </p>
            </Intro>
        </>
    )
}

export default Bio
