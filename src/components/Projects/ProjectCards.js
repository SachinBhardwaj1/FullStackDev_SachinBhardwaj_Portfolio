import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";
import { CgGitFork} from "react-icons/cg";
import {
  AiFillGithub,
} from "react-icons/ai";

const ProjectCards = ({ imgPath, title, description, ghLink, demoLink }) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={title} className="card-img-top" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      {/* Button Container - This ensures button stays at the bottom */}
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
