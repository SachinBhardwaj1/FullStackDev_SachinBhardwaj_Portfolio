import React from "react";
import { Row } from "react-bootstrap";

function LeetcodeCalendar({ username }) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px", paddingTop: "20px" }}>
        Days I <strong className="purple">Code - LeetCode</strong>
        </h1>
        <div
        style={{
            overflow: "hidden",
            padding: "20px",
            borderRadius: "12px",
        }}
        >
        <iframe
            src={`https://leetcard.jacoblin.cool/${username}?theme=light&font=Inter`}
            style={{
            width: "50%",
            height: "330px",
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
