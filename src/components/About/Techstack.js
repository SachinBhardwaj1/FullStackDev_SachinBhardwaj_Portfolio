import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  DiJavascript1, DiReact, DiNodejs, 
  DiJava, DiAngularSimple, DiDatabase
} from "react-icons/di";
import {
  SiFirebase, 
  SiJira, SiJenkins, 
  SiApachespark, SiGraphql, SiDocker, SiDevdotto, SiTestinglibrary
} from "react-icons/si";
import { FaBrain, FaCodeBranch, FaUsersCog } from "react-icons/fa";

const skills = [
  { icon: <DiJavascript1 />, title: "Scripting Languages", desc: "JavaScript, TypeScript, HTML, CSS" },
  { icon: <DiJava/>, title: "Programming Language", desc: "Java , Python"},
  { icon: <DiReact />, title: "React", desc: "React, Redux, Next.js" },
  { icon: <DiAngularSimple />, title: "Angular", desc: "Angular, RxJS, HTML5" },
  { icon: <DiNodejs />, title: "Backend Frameworks", desc: "Node.js, Express.js" },
  { icon: <DiDatabase />, title: "Databases & ORMs", desc: "Oracle SQL, MySQL, MongoDB, Mongoose" },
  { icon: <SiDocker />, title: "Cloud & DevOps", desc: "Docker, AWS, Azure, CI/CD Pipelines" },
  { icon: <SiJira />, title: "Project Management", desc: "Jira, Agile, Scrum" },
  { icon: <SiJenkins />, title: "Automation & CI/CD", desc: "Jenkins, Azure DevOps" },
  { icon: <SiTestinglibrary />, title: "Testing & Debugging", desc: "Cypress.io, Jest, Selenium" },
  { icon: <SiGraphql />, title: "API Development", desc: "RESTful APIs, GraphQL" },
  { icon: <SiApachespark />, title: "Big Data & Processing", desc: "Apache Spark, Data Pipelines" },
  { icon: <FaUsersCog />, title: "System Design", desc: "Scalable Architectures & Design Patterns" },
  { icon: <FaCodeBranch />, title: "Version Control", desc: "Git, GitHub, GitLab" },
  { icon: <SiFirebase />, title: "Cross-Platform Apps", desc: "Firebase, React Native, PWA" },
  { icon: <FaBrain />, title: "Problem Solving", desc: "DSA, Algorithms, Logic Building" },
  { icon: <SiDevdotto />, title: "Open Source Contributions", desc: "GitHub, Community Projects" }
];

function Techstack() {
  return (
    <Container fluid className="skills-section">
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3} className="skill-card">
            <div className="skill-content">
              <div className="skill-icon">{skill.icon}</div>
              <h7 className="skill-title">{skill.title}</h7>
              <h5 className="skill-desc">{skill.desc}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Techstack;
