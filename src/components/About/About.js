import React from "react";
import { Container } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import LeetcodeAchievements from "./LeetcodeAchievements";

function About() {
  return (
    <section id="about">
      <Container fluid className="about-section">
        <Container>
          <h1 className="project-heading">
            <strong className="text-highlight"> 🧑‍💻 Skills </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="text-highlight">🖥 Software Tools</strong>
          </h1>
          <Toolstack />

          <Github />

          <LeetcodeAchievements username="sachinbhardwaj" />
        </Container>
      </Container>
    </section>
  );
}

export default About;