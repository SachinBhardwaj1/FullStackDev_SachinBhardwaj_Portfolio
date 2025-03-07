import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section id="home2">
      <Container fluid className="home-about-section">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Let Me Introduce <span className="purple"> <i>Myself </i></span>
              </h1>
              <p className="home-about-body">
              ➡️ I have developed a deep passion for programming and continuously strive to expand my knowledge and skills.
                <br />
                <br />➡️ I have proficiency in
                <i>
                  <b className="purple"> Javascript{" "} </b> along with modern frameworks like
                  <b className="purple">
                    {" "}React, Angular.
                  </b>
                </i>
                <br />
                <br />
                ➡️ My primary interests lie in developing innovative
                <i>
                  <b className="purple">{" "}Web Technologies and Products </b> and
                  as well as exploring {" "}
                  <b className="purple">
                    Blockchain-related advancements.
                  </b>
                </i>
                <br />
                <br />
                ➡️ I enjoy building scalable, high-performance applications with
                <i>
                  <b className="purple">
                    {" "}
                    Node.js, React.js, and Next.js {" "}
                  </b>
                </i>
                always striving to optimize user experience and stay ahead of web development trends.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid svg_style" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>
                <p>
                  Feel free to <span className="purple">connect </span>with me on
                </p>
              </h1>
              <ul className="home-about-social-links">
              <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/sachinbhardwajus/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://github.com/sachinbhardwaj1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/bhardwaj_s2/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Home2;
