import React from 'react'
import Logo from '../assets/Logo.svg'
import { FaHeart, FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
            <img src={Logo} alt="my-Logo" />
            <p>Made with <FaHeart className="heart"/> by Abhilash Negi</p>
            <div className="icons">
                <a className="twitter__" href="https://twitter.com/attaboyabhilash"><FaTwitterSquare className="twitter"/></a>
                <a href="https://github.com/attaboyabhilash"><FaGithubSquare className="github" /></a>
                <a className="linkedin__" href="https://www.linkedin.com/in/abhilash-negi-247644180/"><FaLinkedin className="linkedin"/></a>
            </div>
        </div>
    )
}

export default Footer
