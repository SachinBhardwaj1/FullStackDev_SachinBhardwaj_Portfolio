import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import  tcslogo  from "../../Assets/TCSLogo.jpg";
import  accenturelogo  from "../../Assets/AccentureLogo.jpg";
import  asulogo  from "../../Assets/ASULogo.jpg";
import  CodepathLogo  from "../../Assets/CodepathLogo.jpg";
import  kiit  from "../../Assets/kiitlogo.png";


const experienceData = [
  {
    company: "Tata Consultancy Services",
    logo: tcslogo,
    position: "Full stack developer",
    location: "Bangalore, India",
    duration: "November 2022 – June 2023",
    description: "Led React v18 migration, optimized API scalability, and enhanced UI for autonomous kiosks, improving performance, reliability, and user engagement.",
    keyFocus: "React, API scalability, Root cause analysis, performance optimization",
  },
  {
    company: "Accenture",
    logo: accenturelogo,
    position: "Full stack developer",
    location: "Bangalore, India",
    duration: "Aug 2020 – November 2022",
    description:
      "Worked on system design and optimization for credit union services, enhancing user engagement, statement processing, and API performance.",
    keyFocus: "Angular, Cypress (Automation Testing), React, Java, Technical Documentation",
  }
];

const educationData = [
  {
    institution: "Arizona State University",
    logo: asulogo,
    degree: "Master of Science in Information Technology",
    location: "Arizona, USA",
    duration: "2023 – 2025",
  },
  {
    institution: "Codepath ORG",
    logo: CodepathLogo,
    degree: "TIP-103 Advanced Technical Interview Prep",
    location: "Arizona, USA (Remote)",
    duration: "Summer of 2024",
  },
  {
    institution: "Kalinga Institute of Industrial Technology",
    logo: kiit,
    degree: "B.Tech in Computer Science",
    location: "Bhubaneswar, India",
    duration: "2016 – 2020",
  }
];

const ExperienceEducation = () => {
  return (
    <section id="experience_education">
        <Container className="experience-education-section">
        <Row>
            {/* Work Experience Column */}
            <Col md={6}>
            <h3 className="section-title">💼 Work <strong className="purple">X</strong></h3>
            <div className="timeline">
                {experienceData.map((exp, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                    <img src={exp.logo} alt={exp.company} className="company-logo" />
                    <h4>{exp.company} <span className="exp-duration">({exp.duration})</span></h4>
                    <h5>{exp.position}</h5>
                    <p><FaMapMarkerAlt /> {exp.location}</p>
                    {exp.description && <p className="exp-description">{exp.description}</p>}
                    <p><strong>Key Focus:</strong> {exp.keyFocus}</p>
                    </div>
                </div>
                ))}
            </div>
            </Col>

            {/* Education Column */}
            <Col md={6}>
            <h3 className="section-title">🏛 Education</h3>
            <div className="timeline">
                {educationData.map((edu, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                    <img src={edu.logo} alt={edu.institution} className="edu-logo" />
                    <h4>{edu.institution} <span className="edu-duration">({edu.duration})</span></h4>
                    <h5>{edu.degree}</h5>
                    <p><FaMapMarkerAlt /> {edu.location}</p>
                    </div>
                </div>
                ))}
            </div>
            </Col>
        </Row>
        </Container>
    </section>
  );
};

export default ExperienceEducation;