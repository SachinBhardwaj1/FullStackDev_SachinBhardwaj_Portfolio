import React, { useState, useEffect, useCallback, memo } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { CgGitFork, CgLink } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaUserGraduate, FaBriefcase, FaTools } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import {
  AiFillGithub,
} from "react-icons/ai";

//  Memoized Navbar to prevent unnecessary re-renders
const NavBar = memo(() => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const location = useLocation();

  //  Optimize scroll handler using useCallback
  const scrollHandler = useCallback(() => {
    setNavColour(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand"/>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand((prev) => !prev)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/*  Home Button Fix - Scrolls to Top When Clicked */}
            <Nav.Item>
              {location.pathname === "/" ? (
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active-section" //  Adds active class when in section
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

            {/*  Use react-scroll on Home page, react-router elsewhere */}
            {location.pathname === "/" ? (
              <>
                <Nav.Item>
                  <ScrollLink
                    to="experience_education"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active-section"
                    className="nav-link fa-solid fa-user-graduate"
                    onClick={() => setExpand(false)}
                  >
                    <FaBriefcase style={{ marginBottom: "2px" }} /> Experience | <FaUserGraduate style={{ marginBottom: "2px" }} /> Education
                  </ScrollLink>
                </Nav.Item>
                <Nav.Item>
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active-section"
                    className="nav-link fa-solid fa-tools"
                    onClick={() => setExpand(false)}
                  >
                    <FaTools style={{ marginBottom: "2px" }} /> Skills
                  </ScrollLink>
                </Nav.Item>

                <Nav.Item>
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active-section"
                    className="nav-link"
                    onClick={() => setExpand(false)}
                  >
                    <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                  </ScrollLink>
                </Nav.Item>

                <Nav.Item>
                  <ScrollLink
                    to="resume"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active-section"
                    className="nav-link"
                    onClick={() => setExpand(false)}
                  >
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                  </ScrollLink>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <RouterLink to="/experience_education" className="nav-link" onClick={() => setExpand(false)}>
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Experience | Education
                  </RouterLink>
                </Nav.Item>
                <Nav.Item>
                  <RouterLink to="/about" className="nav-link" onClick={() => setExpand(false)}>
                    <AiOutlineUser style={{ marginBottom: "2px" }} /> Skills
                  </RouterLink>
                </Nav.Item>
                <Nav.Item>
                  <RouterLink to="/project" className="nav-link" onClick={() => setExpand(false)}>
                    <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                  </RouterLink>
                </Nav.Item>
                <Nav.Item>
                  <RouterLink to="/resume" className="nav-link" onClick={() => setExpand(false)}>
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                  </RouterLink>
                </Nav.Item>
              </>
            )}

            <Nav.Item className="fork-btn">
              <Button href="https://github.com/SachinBhardwaj1" target="_blank" className="fork-btn-inner">
                <CgGitFork style={{ fontSize: "1.5em" }} />{" "}
                <AiFillGithub style={{ fontSize: "1.5em" }} />
              </Button>
            </Nav.Item>
            <Nav.Item className="linkedin-btn">
              <Button href="https://linkedin.com/in/sachinbhardwajus" target="_blank" className="linkedin-btn-inner">
                  <CgLink style={{ fontSize: "1.5em" }} />{" "}
                  <AiFillLinkedin style={{ fontSize: "1.5em" }} />
                </Button>
              </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default NavBar;
