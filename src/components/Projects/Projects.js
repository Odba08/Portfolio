import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useTranslation, Trans } from "react-i18next";

import urbe from "../../Assets/Projects/urbe.png";
import tshop from "../../Assets/Projects/tshop.png";
import conectando from "../../Assets/Projects/realidades.png";
import bingo from "../../Assets/Projects/bingo.PNG";
import sustentable from "../../Assets/Projects/sustentable.png";
import campus from "../../Assets/Projects/campus.png";
import chatlayer from "../../Assets/Projects/chatlayer.png";
import bisci from "../../Assets/Projects/bisci.png";
import chatbet from "../../Assets/Projects/ChatBetimage.png";
import igo from "../../Assets/Projects/igo.PNG";
import calo from "../../Assets/Projects/calo.PNG";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <Trans i18nKey="projects.heading">
            My Recent <span className="purple">Works</span>
          </Trans>
        </h1>
        <p style={{ color: "white" }}>{t("projects.description")}</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urbe}
              title={t("projects.urbeTitle")}
              description={t("projects.urbeDesc")}
              demoLink="https://www.urbe.edu/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campus}
              title={t("projects.campusTitle")}
              description={t("projects.campusDesc")}
              demoLink="https://campus.urbe.edu/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sustentable}
              title={t("projects.sustentableTitle")}
              description={t("projects.sustentableDesc")}
              demoLink="https://urbesustentable.urbe.edu/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbet}
              title={t("projects.chatbetTitle")}
              description={t("projects.chatbetDesc")}
              demoLink="https://chatbet.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatlayer}
              title={t("projects.chatlayerTitle")}
              description={t("projects.chatlayerDesc")}
              demoLink="https://chatlayer.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bisci}
              title={t("projects.bisciTitle")}
              description={t("projects.bisciDesc")}
              demoLink="https://bicsi-cala.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tshop}
              title={t("projects.tshopTitle")}
              description={t("projects.tshopDesc")}
              demoLink="https://www.tshop.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calo}
              title={t("projects.caloTitle")}
              description={t("projects.caloDesc")}
              ghLink="https://github.com/Odba08/CaloApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igo}
              title={t("projects.igoTitle")}
              description={t("projects.igoDesc")}
              ghLink="https://github.com/Odba08/IgoStore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={conectando}
              title={t("projects.conectandoTitle")}
              description={t("projects.conectandoDesc")}
              ghLink="https://vercel.com/odba08s-projects/conectando-realidades"
              demoLink="https://vercel.com/odba08s-projects/conectando-realidades"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bingo}
              title={t("projects.bingoTitle")}
              description={t("projects.bingoDesc")}
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
