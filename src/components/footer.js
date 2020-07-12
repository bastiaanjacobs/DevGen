import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    margin: 1rem 0 0 0;
    color: #fff;
    background: #212121;
`

const Footer = () => {
    return (
        <FooterSection>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </FooterSection>
    )
}

export default Footer
