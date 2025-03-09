import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FaLaptopCode, FaUtensils, FaBrain, FaCamera, FaGlobe } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/home-main.png";

function Home2() {
  return (
    <Container fluid className="bio-section">
      <Row className="align-items-center">
        {/* Avatar Section */}
        <Col md={4} className="bio-avatar">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={1500}>
            <img src={myImg} className="img-fluid svg-style" alt="avatar" />
          </Tilt>
        </Col>

        {/* Bio Content Section */}
        <Col md={8} className="bio-description">
          <h1 className="bio-title">My <span className="purple">📜 Bio</span></h1>
          <p className="bio-body">
            I'm a <b className="highlight">Full Stack Developer</b>, Tech Enthusiast, and Problem Solver passionate about building scalable applications and crafting seamless user experiences.
            <br /><br />
            I love working with <b className="highlight">JavaScript, TypeScript, React, Angular</b> & backend tech like Node.js & GraphQL. 
            Constantly learning, with <b className="highlight">Google</b> as my teacher and my <b className="highlight">code editor</b> as my notebook.
          </p>

          {/* Interests Section */}
          <h2 className="bio-subtitle">🌟 Beyond Code</h2>
          <ul className="bio-list">
            <li><FaLaptopCode className="bio-icon" /> <b>Open Source:</b> Learning & contributing to projects.</li>
            <li><FaBrain className="bio-icon" /> <b>Exploring AI & Data:</b> Curious about AI’s impact on our future.</li>
            <li><FaCamera className="bio-icon" /> <b>Photography & Travel:</b> Capturing cultures & landscapes.</li>
            <li><FaUtensils className="bio-icon" /> <b>Cooking & Organizing:</b> Life in the US has made me a pro at both!</li>
            <li><FaGlobe className="bio-icon" /> <b>Netflix & Chill:</b> Work hard, binge harder! 🍿</li>
          </ul>

          {/* Call to Action */}
          <p className="bio-cta">
            I care deeply about <b className="highlight">user experience</b>, product feedback, and delivering features that matter.  
            <br /><br />
            <b>I’m looking for new opportunities.</b> Let’s talk!
          </p>
          
          <p className="bio-footer" style={{textAlign: "center"}}>
            📩 <b>Connect with me:</b> <a href="https://www.linkedin.com/in/sachinbhardwajus/" target="_blank" rel="noopener noreferrer" className="bio-link">LinkedIn</a>  
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
