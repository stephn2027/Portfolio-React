import React from 'react';
import { Col } from 'react-bootstrap';

export default function ProjectCard({
  title,
  description,
  imgUrl,
  projectUrl,
}) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <a href={projectUrl} target="_blank" rel="noreferrer">
            <h4>{title}</h4>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
