import React, { useState, useEffect } from "react";

export function WelcomeText() {
  const fullText = "Welcome! I'm excited to share my journey with you.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [index]);

  return (
    <h2 className="text-reveal">
      {displayedText}
      {showCursor && <span className="cursor">|</span>}
    </h2>
  );
}

export function RoleTypes() {
  const roles = [
    "Full Stack Developer",
    "Grad Student",
    "Software Engineer",
    "Open Source Contributor",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <h2 className="flip-text">
      <span className="flipping-word">{roles[currentIndex]}</span>
    </h2>
  );
}