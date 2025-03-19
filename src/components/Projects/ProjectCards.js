import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

const ProjectCards = ({ imgPath, title, description, ghLink, demoLink }) => {
  return (
    <Card className="project-card-view">
      <div className="project-image-container">
        <Card.Img variant="top" src={imgPath} alt={title} className="fixed-project-image" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      {/* Button Container - Ensures buttons stay at the bottom */}
      <div className="button-container">
        <Button href={ghLink} target="_blank" className="fork-btn-inner">
          <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
          <AiFillGithub style={{ fontSize: "1.1em" }} />
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCards;
