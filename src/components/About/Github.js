import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="text-highlight">Commit - Github</strong>
      </h1>
      <GitHubCalendar
        username="sachinbhardwaj1"
        blockSize={15}
        blockMargin={5}
        color="#62d05a"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
