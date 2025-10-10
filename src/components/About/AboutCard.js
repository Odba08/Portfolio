import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Oscar Bueno</span> from{" "}
            <span className="purple">Venezuela</span>.
            <br />
            I’m a <b className="purple">Web and Mobile Developer</b> with over
            3 years of experience creating and optimizing scalable applications.
            <br />
            Currently, I work as a developer at{" "}
            <b className="purple">Servieduca</b>, focusing on improving system
            performance and user experience.
            <br />
            <br />
            When I’m not coding, I enjoy spending time doing other things I’m
            passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the gym 🏋️‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies and frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games and listening to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep building, keep learning — every line of code matters."{" "}
          </p>
          <footer className="blockquote-footer">Oscar Bueno</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
