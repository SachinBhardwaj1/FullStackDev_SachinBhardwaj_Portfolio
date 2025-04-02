import React, { useState, useEffect, useCallback, memo } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { FaUserGraduate, FaBriefcase, FaTools } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const NavBar = memo(() => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const location = useLocation();

  const scrollHandler = useCallback(() => {
    setNavColour(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky navbar" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <span className="brand-text">{"< sachin-bhardwaj/ >"}</span>
        </Navbar.Brand>

        {/* Mobile Menu Toggle */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand((prev) => !prev)}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              {location.pathname === "/" ? (
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active-section"
                  className="nav-link"
                  onClick={() => {
                    setExpand(false);
                    scroll.scrollToTop();
                  }}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="nav-link" onClick={() => setExpand(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </RouterLink>
              )}
            </Nav.Item>

            {/* Responsive Navigation Items */}
            {location.pathname === "/" ? (
              <>
                <Nav.Item>
                  <ScrollLink to="experience-education" spy smooth duration={500} offset={-70} className="nav-link" onClick={() => setExpand(false)}>
                    <FaBriefcase /> Experience | <FaUserGraduate /> Education
                  </ScrollLink>
                </Nav.Item>
                <Nav.Item>
                  <ScrollLink to="about" spy smooth duration={500} offset={-70} className="nav-link" onClick={() => setExpand(false)}>
                    <FaTools /> Skills
                  </ScrollLink>
                </Nav.Item>
                <Nav.Item>
                  <ScrollLink to="projects" spy smooth duration={500} offset={-70} className="nav-link" onClick={() => setExpand(false)}>
                    <AiOutlineFundProjectionScreen /> Projects
                  </ScrollLink>
                </Nav.Item>
                <Nav.Item>
                  <ScrollLink to="resume" spy smooth duration={500} offset={-70} className="nav-link" onClick={() => setExpand(false)}>
                    <CgFileDocument /> Resume
                  </ScrollLink>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <RouterLink to="/experience-education" className="nav-link" onClick={() => setExpand(false)}>
                    <FaBriefcase /> Experience | <FaUserGraduate /> Education
                  </RouterLink>
                </Nav.Item>
                <Nav.Item>
                  <RouterLink to="/about" className="nav-link" onClick={() => setExpand(false)}>
                    <AiOutlineUser /> Skills
                  </RouterLink>
                </Nav.Item>
                <Nav.Item>
                  <RouterLink to="/project" className="nav-link" onClick={() => setExpand(false)}>
                    <AiOutlineFundProjectionScreen /> Projects
                  </RouterLink>
                </Nav.Item>
                <Nav.Item>
                  <RouterLink to="/resume" className="nav-link" onClick={() => setExpand(false)}>
                    <CgFileDocument /> Resume
                  </RouterLink>
                </Nav.Item>
              </>
            )}

            {/* Social Buttons */}
            {/* <Nav.Item className="fork-btn">
              <Button href="https://github.com/SachinBhardwaj1" target="_blank" className="fork-btn-inner">
                <CgGitFork style={{ fontSize: "1.5em" }} /> <AiFillGithub style={{ fontSize: "1.5em" }} />
              </Button>
            </Nav.Item>
            <Nav.Item className="linkedin-btn">
              <Button href="https://linkedin.com/in/sachinbhardwajus" target="_blank" className="linkedin-btn-inner">
              <AiFillLinkedin style={{ fontSize: "1.5em", width: "2em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default NavBar;
