import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avataroscar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I'm a passionate <b className='purple'>Web and Mobile Developer</b> with over 3 years of experience
              creating and optimizing high-performance digital products.
              <br />
              <br />I specialize in frameworks like
              <i>
                <b className='purple'> Angular, React Native, and NestJS, </b>
              </i>
              focusing on building scalable and maintainable applications with great user experiences.
              <br />
              <br />
              I’ve worked on corporate systems at <b className='purple'>Servieduca </b>
              and developed multiple <b className='purple'>freelance projects</b> with real-world impact.
              <br />
              <br />I enjoy turning ideas into efficient, elegant solutions using modern tools such as
              <b className='purple'> TypeScript, Node.js,</b> and frameworks like
              <b className='purple'> React.js</b> and <b className='purple'>Next.js.</b>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          {/* <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/soumyajit4419'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/Soumyajit4419'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/soumyajit4419/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/soumyajit4419'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
