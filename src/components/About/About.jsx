import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/aboutme.png";
import Toolstack from "./Toolstack";

function About() {
  const { t } = useTranslation();

  return (
    <Container fluid className='about-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <Trans i18nKey="about.title">
                Know Who <strong className='purple'>I'M</strong>
              </Trans>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "120px",
              paddingBottom: "50px",
              display: "flex",
              justifyContent: "center",
            }}
            className='about-img'
          >
            <img
              src={laptopImg}
              alt='about'
              className='img-fluid'
              style={{ maxHeight: "400px", objectFit: "contain", borderRadius: "8%" }}
            />
          </Col>
        </Row>

        <h1 className='project-heading'>
          <Trans i18nKey="about.skillset">
            Professional <strong className='purple'>Skillset </strong>
          </Trans>
        </h1>

        <Techstack />

        <h1 className='project-heading'>
        <Trans i18nKey="about.tools">
          <strong className='purple'>Tools</strong>
        </Trans>
      </h1>

        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
