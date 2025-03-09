import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiNetlify,
  SiMacos,
  SiDocker,
  SiMysql,
  SiIntellijidea,
  SiCodepen,
  SiSublimetext,
  SiCypress,
  SiAtom,
  SiGooglechrome,
  SiNpm,
  SiJira
} from "react-icons/si";

const tools = [
  { icon: <SiMacos />, name: "macOS" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
  { icon: <SiCodepen />, name: "CodePen" },
  { icon: <SiSublimetext />, name: "Sublime Text" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiNetlify />, name: "Netlify" },
  { icon: <SiCypress />, name: "Cypress" },
  { icon: <SiGooglechrome />, name: "Chrome DevTools" },
  { icon: <SiAtom />, name: "Atom" },
  { icon: <SiNpm />, name: "NPM" },
  { icon: <SiJira />, name: "Jira" },
];

function Toolstack() {
  return (
    <Container fluid className="toolstack-section">
      <Row className="justify-content-center">
        {tools.map((tool, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="tech-card">
            <div className="icon-wrapper">
              {tool.icon}
              <p className="tech-name">{tool.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Toolstack;
