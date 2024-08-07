import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thabiso Rantsho</span>{" "}
            from <span className="purple">Welkom, South Africa.</span>
            <br />I am majoring in Software Engineering and Web Development with
            a focus on information systems.
            <br />
            <br />
            Besides coding, there are other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Making Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Philosophy
            </li>
            <li className="about-activity">
              <ImPointRight /> Skateboarding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Thabiso Rantsho</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
