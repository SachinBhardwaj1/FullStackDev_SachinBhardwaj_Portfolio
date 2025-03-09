import React from "react";
import Typewriter from "typewriter-effect";

function Home_Type_Lang() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hi! Glad you stopped by.",
          "नमस्ते! खुशी है कि आप यहाँ आए।",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Home_Type_Lang;