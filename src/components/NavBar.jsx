import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../styles/navbar.scss';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.addEventListener('scroll', onScroll);
  }, []);

  const onUpdateLink = (value) => setActiveLink(value);

  return (
    <Router>
      <Navbar expand="lg" className={isScrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateLink('home')}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateLink('project')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/stephen-uy-90268a209/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/stephnuy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="" />
                </a>
                <a
                  href="https://github.com/stephn2027"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd" onClick={() => console.log('connect')}>
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
