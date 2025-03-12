import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo1 from "../../Assets/avatar.png";
import homeLogo2 from "../../Assets/avatar2.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TypeLang from "./Home_Type_Lang";

function Home() {
  const [currentImage, setCurrentImage] = useState(homeLogo1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === homeLogo1 ? homeLogo2 : homeLogo1));
    }, 5000); // Image switches every 5 seconds

    return () => clearInterval(interval);
  });

  return (
    <section id="home" style={{ position: "relative", overflow: "hidden" }}>
      <Particle />
      <Container fluid className="home-section complete-background-screen" style={{ position: "relative", zIndex: 2 }}>
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h5
                style={{ paddingBottom: 15, textAlign: "left", display: "flex", alignItems: "center" }}
                className="heading"
              >
                <span className="namaste" role="img" aria-labelledby="namaste">🙏</span>
                <span style={{ marginLeft: "2px" }}>
                  <TypeLang />
                </span>
              </h5>

              <h1 className="heading-name" style={{ color: "#ffffff" }}>
                I'm <strong className="main-name">Sachin Bhardwaj</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", color: "#ffffff" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={currentImage}
                alt="home pic"
                className="img-fluid fade-in"
                style={{ maxHeight: "400px", transition: "opacity 1s ease-in-out" }}
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