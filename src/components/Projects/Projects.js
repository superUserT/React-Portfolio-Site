import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              description="This Project is is built mainly using asp.net."
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
              title="Static Dashboard"
              description="A static Dashboard built using HTML and CSS"
              ghLink="https://github.com/superUserT/Dashboard"
              demoLink="https://superusert.github.io/Dashboard/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
