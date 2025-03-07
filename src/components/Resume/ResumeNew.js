import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import React from "react";

const GOOGLE_DRIVE_FILE_ID = "1wdCXn1f09A7sgqEiVV8lpBUaf062arFd";

const pdfPreviewUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;
const pdfDownloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

function ResumeNew() {
  return (
    <section id="resume">
      <Container fluid className="resume-section">
        <Particle />
        
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Button
              href={pdfPreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                maxWidth: "250px",
                width: "100%",
                fontSize: "18px",
                padding: "10px 20px",
                marginBottom: "20px",
              }}
            >
              <AiOutlineDownload />
              &nbsp; View Resume
            </Button>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdfDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; Download CV
          </Button>
        </Row>
      </Container>
    </section>
  );
}

export default ResumeNew;