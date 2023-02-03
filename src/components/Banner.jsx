import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import headerImg from '../assets/img/header-img7.png';
import 'animate.css';
import '../styles/banner.scss';

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;

  const toRotate = [
    'a Web Developer',
    'a Front-end Developer',
    'Nice to meet you!',
  ];

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className=" d-flex align-items-start">
            <Col xs={12} md={6} xl={7} className="banner_text">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? 'animate__animated animate__fadeIn animate__slower'
                        : 'animate__animated animate__fadeOut animate__slower'
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1 className="banner_text_wrap">
                      {`Hi I'm Stephen `} <div className="wrap">{text}</div>
                    </h1>
                    <p className="banner_text_p">
                      I’m a Tokyo based freelance web developer. Passionate
                      about creating dynamic, simple, usable and engaging user
                      experience for the web. <br></br> ‍Over the years I worked
                      on web development skills while using the latest
                      development principles and techniques. I pride myself on
                      reliable communication with my colleagues and clients and
                      easy to work with.
                    </p>
                    <HashLink to="#connect">
                      <button onClick={() => console.log('connect')}>
                        Let's Connect <ArrowRightCircle />
                      </button>
                    </HashLink>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5} className="header_img">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? 'animate__animated animate__flipInY animate__slow'
                        : 'animate__animated animate__flipOutY'
                    }
                  >
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
}
