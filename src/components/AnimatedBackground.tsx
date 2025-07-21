import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="animated-background">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="floating-shape"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;