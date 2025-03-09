import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <section id="about">
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            <strong className="purple"> 🧑‍💻 Skills </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">🖥 Software Tools</strong>
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </section>
  );
}

export default About;
