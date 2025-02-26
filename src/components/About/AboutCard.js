import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, People call me <span className="purple">Sachin</span>
            , currently I&apos;m based in
            <span className="purple"> USA </span>
            <br />
            Actively seeking new opportunities. <span className="purple">Immediate Joiner.</span>
            <br />
            Currently pursuing <span className="purple">Masters </span> from <span className="purple">Arizona State University.</span> Graduating in <span className="purple">May 2025</span>.
            <br />
            <br />
            Technology excites me, but so do the moments beyond coding that fuel my creativity!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying out different cuisine
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching documentaries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            <i>"Engineering solutions that matter, one line of code at a time."{" "}</i>
          </p>
          <footer className="blockquote-footer"><i>Sachin Bhardwaj</i></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
