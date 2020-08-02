import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav className="nav-wrapper blue accent-2">
        <div className="container">
            <a href="https://www.linkedin.com/in/seanwalmer/" className="brand-logo">Sean Walmer</a>
            {/* eslint-disable-next-line */}
            <a href="#" className="sidenav-trigger right" data-target="mobile-menu">
                <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
                <li><a href="#program">Programing</a></li>
                <li><a href="#pottery">Pottery</a></li>
                <li><a href="https://1drv.ms/b/s!AoXqQA-JgNWNoftAXFT2Sdz-8dmtxg" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href="https://www.linkedin.com/in/seanwalmer/" className="tooltipped btn-floating btn-small deep-purple accent-4" data-position="bottom" data-tooltip="LinkedIn" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/SeanWalmer" className="tooltipped btn-floating btn-small deep-purple accent-4" data-position="bottom" data-tooltip="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.instagram.com/darwful_sean/" className="tooltipped btn-floating btn-small deep-purple accent-4" data-position="bottom" data-tooltip="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <ul className="sidenav grey lighten-2" id="mobile-menu">
                {/* <li className="blue center-align">Navagation</li> */}
                <li><a href="#program" className="sidenav-close">Programing</a></li>
                <li><a href="#pottery" className="sidenav-close">Pottery</a></li>
                <li><a href="#contact" className="sidenav-close">Contact</a></li>
                <li className="blue center-align">Profile Links</li>
                <li><a href="https://www.linkedin.com/in/seanwalmer/" className="sidenav-close" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/SeanWalmer" className="sidenav-close" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.instagram.com/darwful_sean/" className="sidenav-close" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
        </div>
        </nav>
    </header>
  )
}
