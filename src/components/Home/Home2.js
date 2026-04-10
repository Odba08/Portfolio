import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avataroscar.png";
import Tilt from "react-parallax-tilt";
import { Trans } from "react-i18next";

function Home2() {
/*   const { t } = useTranslation();
 */
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <Trans i18nKey="home2.title">
                LET ME <span className="purple">INTRODUCE</span> MYSELF
              </Trans>
            </h1>
            <p className="home-about-body">
              <Trans i18nKey="home2.body1">
                I'm a passionate <b className="purple">Web and Mobile Developer</b> with over 3 years of experience
                creating and optimizing high-performance digital products.
              </Trans>
              <br />
              <br />
              <Trans i18nKey="home2.body2">
                I specialize in frameworks like <b className="purple">Angular, React Native, and NestJS,</b> focusing
                on building scalable and maintainable applications with great user experiences.
              </Trans>
              <br />
              <br />
              <Trans i18nKey="home2.body3">
                I’ve worked on corporate systems at <b className="purple">Servieduca</b> and developed multiple{" "}
                <b className="purple">freelance projects</b> with real-world impact.
              </Trans>
              <br />
              <br />
              <Trans i18nKey="home2.body4">
                I enjoy turning ideas into efficient, elegant solutions using modern tools such as{" "}
                <b className="purple">TypeScript, Node.js,</b> and frameworks like <b className="purple">React.js</b>{" "}
                and <b className="purple">Next.js.</b>
              </Trans>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
