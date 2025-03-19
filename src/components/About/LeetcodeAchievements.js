import React from "react";
import { Row } from "react-bootstrap";

function LeetcodeCalendar({ username }) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <h1 className="project-heading" style={{ paddingTop: "20px" }}>
        Days I <strong className="text-highlight">Code - LeetCode</strong>
      </h1>
      <div
        style={{
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        <iframe
          src={`https://leetcard.jacoblin.cool/${username}?theme=light&font=Inter`}
          style={{
            width: "100%",
            height: "300px",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "transparent",
          }}
          title="Days I Code - LeetCode"
          frameBorder="0"
        ></iframe>
      </div>
    </Row>

  );
}

export default LeetcodeCalendar;
