import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import React from "react";

const GOOGLE_DRIVE_FILE_ID = "1GWwKcAV_U8-K4TPdDJVedtww_N1mdvAD";

const pdfPreviewUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;
const pdfDownloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

function ResumeNew() {
  return (
    <section id="resume">
      <Container fluid className="resume-section">
        <Container>
          <h1 className="resume-heading">
            <strong className="text-highlight"> 💾 Resume</strong>
          </h1>
          <Row className="d-flex justify-content-center align-items-center">
            {/* Resume Preview on the Left */}
            <Col xs={12} md={6} className="resume-preview d-flex justify-content-center">
              <iframe
                src={pdfPreviewUrl}
                width="100%"
                height="600px"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.1)"
                }}
                title="Resume Preview"
              />
            </Col>

            {/* Text and Download Button on the Right */}
            <Col xs={12} md={6} className="resume-text text-center text-md-left">
              <p className="text-white lead">
                <strong className="text-highlight">You can download my resume.</strong>
              </p>
              <Button
                variant="outline-light"
                href={pdfDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-2"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  borderRadius: "100px",
                  alignItems: "center",
                  backgroundColor: "#2196F3",
                }}
              >
                <AiOutlineDownload />
                Download Resume
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default ResumeNew;
