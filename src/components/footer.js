import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    margin: 1rem 0 0 0;
    background: #F4F5FB;
`

const Footer = () => {
    return (
        <FooterSection>
            © {new Date().getFullYear()}, Built with Gatsby
        </FooterSection>
    )
}

export default Footer
