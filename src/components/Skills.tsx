import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
import '../styles/skills.scss';
import 'react-multi-carousel/lib/styles.css';

export default function Skills() {
  const skillsValue = '80';
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat, illum dolores libero a impedit ullam enim repellendus
                quibusdam quod. Reiciendis itaque sint explicabo necessitatibus
                corporis quibusdam, cupiditate eum enim architecto.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <div
                    className="radial-progress"
                    style={{
                      '--value': skillsValue,
                      '--size': '10rem',
                      '--thickness': '1rem',
                    }}
                  >
                    {skillsValue}%
                  </div>
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
}
