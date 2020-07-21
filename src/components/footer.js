import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    margin: 1rem 0 0 0;
    background: #f5f5f5;
`

const Footer = () => {
    return (
        <FooterSection>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Terms</a>
                </li>
                <li>
                    <a href="#">Partners</a>
                </li>
                <li>
                    <a href="#">Updates</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Spec</a>
                </li>
                <li>
                    <a href="#">Tools</a>
                </li>
                <li>
                    <a href="#">Resources</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">How it works</a>
                </li>
                <li>
                    <a href="#">Patterns</a>
                </li>
                <li>
                    <a href="#">Usage</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Contracts</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Questions</a>
                </li>
                <li>
                    <a href="#">Answers</a>
                </li>
                <li>
                    <a href="#">Contact us</a>
                </li>
            </ul>
            <div>© {new Date().getFullYear()}, Built with Gatsby</div>
        </FooterSection>
    )
}

export default Footer
