import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import ProjectDetails from '../assets/constants/projects';
import '../styles/project.scss';

export default function Projects() {
  const projects = ProjectDetails;

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? 'animate__animated animate__fadeIn animate__slower'
                        : 'animate__animated animate__fadeOut'
                    }
                  >
                    <h2>Projects</h2>
                    <p>
                      Here you will find some of the personal and colab projects
                      that I created with each project containing its own
                      description.
                    </p>
                    <Nav
                      variant="pills"
                      id="pills-tab"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="first"
                          color="primary"
                          id="projects-tabs-tab-first"
                        >
                          Tab 1
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="second"
                          id="projects-tabs-tab-second"
                        >
                          Tab2 2
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" id="projects-tabs-tab-third">
                          Tab 3
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                )}
              </TrackVisibility>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h3 className="tab-pane_desc">
                    Yup. I have to create more projects.
                  </h3>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h3 className="tab-pane_desc">
                    A bit of a stretch but will fill this space soon. 😊
                  </h3>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
}
