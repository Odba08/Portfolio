import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of projects I have contributed to, both professionally and personally.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Portal URBE */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portal URBE"
              description="Official university portal. Worked on front-end components, service integration, and content management for seamless user experience."
              demoLink="https://www.urbe.edu/"
            />
          </Col>

          {/* Campus URBE */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Campus URBE"
              description="News portal for the university community. Contributed to integration of news services, performance optimization, and responsive layouts."
              demoLink="https://campus.urbe.edu/"
            />
          </Col>

          {/* URBE Sustentable */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="URBE Sustentable"
              description="Program focused on sustainability initiatives. Developed interactive sections and enhanced engagement for environmental awareness campaigns."
              demoLink="https://urbesustentable.urbe.edu/"
            />
          </Col>

          {/* ChatBet */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChatBet"
              description="AI-powered betting assistant transforming messaging apps (WhatsApp, Telegram, Discord) into seamless revenue channels. Implemented chat flows and backend integration."
              demoLink="https://chatbet.co/"
            />
          </Col>

          {/* ChatLayer */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChatLayer"
              description="Enterprise-grade conversational AI platform. Worked on integration of messaging solutions for WhatsApp and Telegram, ensuring secure and scalable communication."
              demoLink="https://chatlayer.tech/"
            />
          </Col>

          {/* Bisci Cala */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bisci Cala"
              description="Implemented multilingual translation system for the entire website, improving accessibility and user experience across languages."
              demoLink="https://bicsi-cala.org/"
            />
          </Col>

          {/* Tshop */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tshop E-commerce"
              description="Developed e-commerce platform with secure checkout, product catalog, and responsive design. Contributed to front-end features and performance optimization."
              demoLink="https://www.tshop.tech/"
            />
          </Col>

          {/* Calo App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Calo App"
              description="Sports app developed in React Native. Features include tracking exercises, workout plans, and performance analytics. Fully functional, available on GitHub."
              ghLink="https://github.com/Odba08/CaloApp"
            />
          </Col>

          {/* Igo Store */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Igo Store"
              description="Delivery app developed in React Native. Currently in progress, implementing order management, product catalog, and real-time updates."
              ghLink="https://github.com/Odba08/IgoStore"
            />
          </Col>

          {/* Conectando Realidades */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Conectando Realidades"
              description="News page developed as part of a thesis project. Focused on content management and responsive layout. Minor project."
              ghLink="https://vercel.com/odba08s-projects/conectando-realidades"
              demoLink="https://vercel.com/odba08s-projects/conectando-realidades"
            />
          </Col>

          {/* Bingo */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bingo Generator"
              description="Online bingo card generator using HTML, CSS, and JavaScript. Minor personal project for learning purposes."
              ghLink="https://odba08.github.io/Bingo/"
              demoLink="https://odba08.github.io/Bingo/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
