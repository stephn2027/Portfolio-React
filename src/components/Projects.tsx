import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

export default function Projects() {
  const projects = [
    {
      title: 'business Startup',
      description: 'Design and Development',
      imgUrl: {},
    },
    {
      title: 'business Startup',
      description: 'Design and Development',
      imgUrl: {},
    },
    {
      title: 'business Startup',
      description: 'Design and Development',
      imgUrl: {},
    },
    {
      title: 'business Startup',
      description: 'Design and Development',
      imgUrl: {},
    },
    {
      title: 'business Startup',
      description: 'Design and Development',
      imgUrl: {},
    },
  ];
  return (
    <section className="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              enim iste veritatis minima perspiciatis eius repellendus, tempora
              similique suscipit deserunt. Rem eius quasi sit voluptatem
              deleniti cumque reiciendis cupiditate magnam.
            </p>
            <Tab.Container>
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab2 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey='first'>
                    <Row>
                        
                    </Row>
                </Tab.Pane>

            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
