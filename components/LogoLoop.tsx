import React from "react";
import { motion } from "framer-motion";

interface LogoLoopProps {
  logos: { src: string; alt?: string; title?: string }[];
  speed?: number;
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 50,
  direction = "left",
  logoHeight = 60,
  gap = 40,
  pauseOnHover = true,
  fadeOut = true,
}) => {
  const scrollSpeed = direction === "left" ? `-${speed}%` : `${speed}%`;

  return (
    <div
      className={`relative overflow-hidden w-full ${
        fadeOut ? "mask-gradient" : ""
      }`}
    >
      <motion.div
        className="flex"
        style={{ gap: `${gap}px` }}
        animate={{ x: [0, scrollSpeed] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0">
            <img
              src={logo.src}
              alt={logo.alt || ""}
              title={logo.title || ""}
              style={{ height: logoHeight }}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
