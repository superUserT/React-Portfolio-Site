import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Fuel Tracking Application"
              description="A fuel tracking application built using asp.net."
              ghLink="https://github.com/superUserT/FuelTrackingApplication"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="EDI FIle Manager"
              description="A project that uses crud to control business edi files and export them to various formats, excel and pdf."
              ghLink="https://github.com/theboydontplaygames/File-Manegment-System"
              demoLink="https://showcase.sit.uct.ac.za/event/showcase-2021/freshgold-pallet-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Simple Shell Project"
              description="A basic unix shell built in C"
              ghLink="https://github.com/superUserT/simple_shell"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Print Function"
              description="A basic printf function written in C"
              ghLink="https://github.com/superUserT/printf"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Loan Application"
              description="A web api that allows people to make loans."
              ghLink="https://github.com/superUserT/loan_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AirBnB Clone"
              description="A fullstack airbnb clone"
              ghLink="https://github.com/superUserT/AirBnB_clone_v4"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
