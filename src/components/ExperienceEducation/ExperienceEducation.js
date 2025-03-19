import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import tcslogo from "../../Assets/TCSLogo.jpg";
import accenturelogo from "../../Assets/AccentureLogo.jpg";
import asulogo from "../../Assets/ASULogo.jpg";
import CodepathLogo from "../../Assets/CodepathLogo.jpg";
import kiit from "../../Assets/kiitlogo.png";

const experienceData = [
  {
    company: "Tata Consultancy Services",
    logo: tcslogo,
    position: "Full Stack Developer",
    location: "Bangalore, India",
    duration: "Nov 2022 – June 2023",
    description: "Led React v18 migration, optimized API scalability, and enhanced UI for autonomous kiosks.",
    keyFocus: "React, API scalability, Performance Optimization",
  },
  {
    company: "Accenture",
    logo: accenturelogo,
    position: "Full Stack Developer",
    location: "Bangalore, India",
    duration: "Aug 2020 – Nov 2022",
    description: "Worked on system design and optimization for credit union services.",
    keyFocus: "Angular, Cypress, React, Java",
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
    institution: "CodePath ORG",
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
    <section id="experience-education" className="timeline-container">
      <div className="timeline-column">
        <h2 className="timeline-title">👔 Work X</h2>
        <VerticalTimeline layout="1-column-left">
          {experienceData.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={exp.duration}
              iconStyle={{ background: "#00ff99", color: "#fff" }}
            >
              <div className="timeline-content">
                <img src={exp.logo} alt={exp.company} className="timeline-logo" />
                <div>
                  <h3 className="vertical-timeline-element-title">{exp.company}</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {exp.location}
                  </h4>
                  <p>{exp.description}</p>
                  <p><strong>Key Focus:</strong> {exp.keyFocus}</p>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Education Column */}
      <div className="timeline-column">
        <h2 className="timeline-title">🎓 Education</h2>
        <VerticalTimeline layout="1-column-left">
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              date={edu.duration}
              iconStyle={{ background: "#00ff99", color: "#fff" }}
            >
              <div className="timeline-content">
                <img src={edu.logo} alt={edu.institution} className="timeline-logo" />
                <div>
                  <h3 className="vertical-timeline-element-title">{edu.institution}</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {edu.location}
                  </h4>
                  <p>{edu.degree}</p>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceEducation;
