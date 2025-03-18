import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0d1117]">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 rounded-full bg-cyan-400 opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 1.5,
            opacity: 0,
          }}
          animate={{
            y: ["100vh", "-10vh"],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
