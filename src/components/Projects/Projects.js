import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import readnext from "../../Assets/Project1_image.png";
import db from "../../Assets/Project2_image.png";
import aws from "../../Assets/aws.png";
import dv from "../../Assets/Project3_image.png";
import cultural from "../../Assets/cultural.png";
import mongo from "../../Assets/mongo.jpg";
import toppinghub from "../../Assets/toppinghub.png";
import skytrack from "../../Assets/skytrackvision.jpg";

function Projects() {
  return (
    <section id="projects">
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My <strong className="text-highlight"> 💡 Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={readnext}
                title={
                  <span className="glowing-title">
                    ReadNext - Your Personalized Book Guide
                  </span>
                }
                description={
                  <>
                    🤖 Refined a Machine Learning filtering model using Cosine Similarity and Sparse Matrix techniques to improve data efficiency and scalability. Built a preprocessing pipeline for 6,000+ records, eliminating delays and maximizing performance.
                    <br /> <br />
                    ⚙️ Tools & Technologies: Python, Grafana
                    <br /> <br />
                    🎯 Skills: Managing Technical Personnel, Git, Database Analysis
                  </>
                }
                ghLink="https://github.com/SachinBhardwaj1"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={db}
                title={
                  <span className="glowing-title">
                    TrackNScaleDB
                  </span>
                }
                description={
                  <>
                    🛢️ Developed a robust SQL-based database system with 50,000+ records, enabling efficient tracking of job applications, interviews, and offers for employees and employers at scale.
                    <br /> <br />
                    ⚙️ Tools & Technologies: SQL Server, RDD, Data Integrity, UDF, Cursors, Triggers, Stored Procedures, Security
                    <br /> <br />
                    🎯 Skills: Docker, Git, Oracle SQL Developer, SQL Server Management Studio
                  </>
                }
                ghLink="https://github.com/SachinBhardwaj1"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={aws}
                title={
                  <span className="glowing-title">
                    Secured AWS Cloud Architecture Solution
                  </span>
                }
                description={
                  <>
                    ☁️ Built a scalable AWS infrastructure for applications using Aurora serverless and auto-scaling with load balancing, resulting in 99.9% uptime and a 40% boost in response time.
                    <br /> <br />
                    ⚙️ Tools & Technologies: AWS Aurora serverless, EC2, RDS, Secrets Manager, ALB, Auto Scaling
                    <br /> <br />
                    🎯 Skills: Cloud Security, Amazon EC2, Cloud Computing, Git
                  </>
                }
                ghLink="https://github.com/SachinBhardwaj1"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={cultural}
                title={
                  <span className="glowing-title">
                    Research Paper - Cultural Differences in Data Privacy: Understanding Global Perspectives
                  </span>
                }
                description={
                  <>
                    📑 Analyzed privacy regulations in 8 countries and surveyed over 1,000+ participants to summarize cultural impacts on data privacy attitudes and behaviors.
                    <br /> <br />
                    🎯 Skills: Data Security, Data Analysis, Advanced Information Systems Security
                  </>
                }
                ghLink="https://github.com/SachinBhardwaj1"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={mongo}
                title={
                  <span className="glowing-title">
                    TurboMongo
                  </span>
                }
                description={
                  <>
                    🍃 Architected an application for efficient data migration to MongoDB, achieved a 15% improvement in data insertion speed for large datasets, reduced downtime, and enhanced overall data accessibility.
                    <br /> <br />
                    ⚙️ Tools & Technologies: JavaScript, Node JS, MongoDB
                    <br /> <br />
                    🎯 Skills: Node.js, Git, SQL, Big Data Analytics, Database Analysis
                  </>
                }
                ghLink="https://github.com/SachinBhardwaj1"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={dv}
                title={
                  <span className="glowing-title">
                    Mental Health & Stress Level Insights Across Industries
                  </span>
                }
                description={
                  <>
                    📡 Optimized the dataset with 10,000+ records to analyze remote work impact on stress, job satisfaction, work-life balance, and mental health, driving insights for HR teams and researchers.
                    <br /> <br />
                    ⚙️ Tools & Technologies: Python, Data Cleaning, EDA, SQL, Data Visualization, Docker, Tableau
                    <br /> <br />
                    🎯 Skills: Data Analysis, Data Visualization, Python (Programming Language), Data Cleaning, Team Leadership, Database Analysis
                  </>
                }
                ghLink="https://github.com/SachinBhardwaj1"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={toppinghub}
                title={
                  <span className="glowing-title">
                    Topping Hub
                  </span>
                }
                description={
                  <>
                    ⚛️ Developed server-side applications with Node JS and MongoDB, ensuring efficient data handling and achieving a 30% increase in system performance and reliability. 
                    <br /> <br />
                    ⚙️ Tools & Technologies: MEAN and MERN Stack
                    <br /> <br />
                    🎯 Skills: Node.js, React.js, HTML5, Front-End Development, CSS
                  </>
                }
                ghLink="https://github.com/SachinBhardwaj1"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={skytrack}
                title={
                  <span className="glowing-title">
                    SkyTrack Vision
                  </span>
                }
                description={
                  <>
                    ✈️ Managed and optimized 1TB+ of data using Hadoop's HDFS and Hive, reducing data processing time by 20% and enabling real-time analysis of huge datasets. 
                    <br /> <br />
                    ⚙️ Tools & Technologies: Java, HDFS, Hive, HTML & JavaScript for User Interface, Visual Studio.
                    <br /> <br />
                    🎯 Skills: Hive, MapReduce, AngularJS, Hadoop, HDFS, Java, Big Data, Big Data Analytics, Scala
                  </>
                }
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
