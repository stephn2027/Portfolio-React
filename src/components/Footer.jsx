import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../styles/footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center footer__row">
          <Col lg={12} className="text-center text-md-end">
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
            <p>CopyRight 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
