import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo1 from "../../Assets/avatar.png";
import Home2 from "./Home2";
import { WelcomeText, RoleTypes } from "./HomeTypeLang";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";


function Home() {
  return (
    <section id="home" style={{ position: "relative", overflow: "hidden" }}>
      <Container
        fluid
        className="home-section complete-background-screen"
        style={{ position: "relative", zIndex: 2 }}
      >
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h5
                style={{
                  paddingBottom: 50,
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                }}
                className="heading"
              >
                <span className="waving-hand">✌️</span>
                <span style={{ marginLeft: "2px" }}>
                  <WelcomeText />
                </span>
              </h5>

              <h1 className="heading-name">
                I'm <strong className="cyan-name">Sachin Bhardwaj</strong>
              </h1>



              <div style={{ padding: 50, textAlign: "left", color: "#ffffff", marginLeft: 100 }}>
                <RoleTypes />
              </div>

              <div className="social-container">
                <ul className="social-links">
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/sachinbhardwajus/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon linkedin"
                    >
                      <AiFillLinkedin />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://github.com/sachinbhardwaj1"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
              </div>

            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="glowing-image-container">
                <img
                  src={homeLogo1} // Use only one image
                  alt="home pic"
                  className="img-fluid glowing-image"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;