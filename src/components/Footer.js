import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={12} className="home-about-social">
          <h2>
            <p>
              <span className="purple">Open</span> to <span className="purple">software development</span> opportunities—let’s connect!
            </p>
          </h2>
          <div className="handshake-container">
            <img src="/handshake.gif" alt="Handshake" className="handshake-image" />
          </div>
          <ul className="home-about-social-links">
          <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sachinbhardwajus/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillLinkedin />
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
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="footer-license">
          <h6>Sachin Bhardwaj</h6>
        </Col>
        <Col md="4" className="footer-copywright">
          <h6><i>© {year} All Right Reserved</i></h6>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons home-about-social-links">
          <li className="social-icons">
              <a
                href="https://linkedin.com/in/sachinbhardwajus"
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="social-icons home-about-social-links">
              <a
                href="https://github.com/SachinBhardwaj1"
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;