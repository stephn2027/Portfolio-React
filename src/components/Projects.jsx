import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import ProjectDetails from '../assets/constants/projects';
import '../styles/project.scss';

export default function Projects() {
  const projects = ProjectDetails;
  // const projects = [
  //   {
  //     title: 'business Startup',
  //     description: 'Design and Development',
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: 'business Startup',
  //     description: 'Design and Development',
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: 'business Startup',
  //     description: 'Design and Development',
  //     imgUrl: projImg3,
  //   },
  //   {
  //     title: 'business Startup',
  //     description: 'Design and Development',
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: 'business Startup',
  //     description: 'Design and Development',
  //     imgUrl: projImg2,
  //   },
  // ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
            Here you will find some of the personal and colab projects that I created with each project containing its own description. 
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                  <Nav.Link eventKey="second" id="projects-tabs-tab-second">
                    Tab2 2
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" id="projects-tabs-tab-third">
                    Tab 3
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                 <h3 className='tab-pane_desc'>Yup. I have to create more projects.</h3> 
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                 <h3 className='tab-pane_desc'>A bit of a stretch but will fill this space soon. 😊</h3> 
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
