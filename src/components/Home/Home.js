import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Trans } from "react-i18next";
import homeoscar from "../../Assets/niuhome.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
/*   const { t } = useTranslation();
 */
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <Trans i18nKey="home.welcome">
                  Welcome To My Portfolio
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </Trans>
              </h1>

              <h1 className="heading-name">
                <Trans i18nKey="home.im">
                  I'M <strong className="main-name">OSCAR BUENO</strong>
                </Trans>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeoscar}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "8%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
