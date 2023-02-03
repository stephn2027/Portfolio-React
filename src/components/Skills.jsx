import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import colorSharp from '../assets/img/color-sharp.png';
import SKILL_ITEMS from '../assets/constants/skills';
import '../styles/skills.scss';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';

export default function Skills() {
  const skills = SKILL_ITEMS;
  const responsive = {
    XXlargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? 'animate__animated animate__fadeIn animate__slower'
                        : 'animate__animated animate__fadeOut'
                    }
                  >
                    <h2>Skills</h2>
                    <p>
                      Build client-side applications with modern features like
                      SPA and maintain semantic coding style among other best
                      practices for SEO optimization. Use modern tech such as
                      Next.js, TailwindCSS, GraphCMS, TypeScript and GSAP.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skills.map((skill) => {
                  return (
                    <TrackVisibility>
                      {({ isVisible }) => (
                        <div
                          className={
                            isVisible
                              ? 'animate__animated animate__slideInRight animate__slow'
                              : 'animate__slideOutRight animate__slow'
                          }
                        >
                          <div className="item">
                            <div
                              className="radial-progress"
                              style={{
                                '--value': skill.percent,
                                '--size': '7rem',
                                '--thickness': '0.7rem',
                              }}
                            >
                              {skill.percent}%
                            </div>
                            <h5>{skill.title}</h5>
                          </div>
                        </div>
                      )}
                    </TrackVisibility>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
}
