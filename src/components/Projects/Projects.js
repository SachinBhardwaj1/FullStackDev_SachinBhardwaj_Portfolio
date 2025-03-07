import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import readnext from "../../Assets/Project1_image.png";
import db from "../../Assets/Project2_image.png";
import dv from "../../Assets/Project3_image.png";

function Projects() {
  return (
    <section id="projects">
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={readnext}
                title="ReadNext – Your Personalized Book Guide"
                description="⭐ Refined a Machine Learning filtering model using Cosine Similarity and Sparse Matrix techniques to improve data efficiency and scalability. Built a preprocessing pipeline for 6,000+ records, eliminating delays and maximizing performance."
                ghLink="https://github.com/SachinBhardwaj1"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={db}
                title="EmployEase DB - Database for Employees"
                description="⭐ Developed a SQL database utilizing Cursors, Triggers, Stored procedures, User defined functions(UDFs), Schema normalization, Distributed database system, and Database design to streamline job tracking and interview scheduling, optimizing data management for 1,500+ records."
                ghLink="https://github.com/SachinBhardwaj1"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={dv}
                title="Mental Health & Stress Level Insights Across Industries"
                description="⭐ Analyzed impact of remote work on stress, job satisfaction, and health by refining a dataset of 5,500+ records. Used Python, SQL, and Tableau to generate actionable insights for recruiters and employees."
                ghLink="https://github.com/SachinBhardwaj1"
                demoLink=""              
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
