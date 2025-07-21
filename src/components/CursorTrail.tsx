import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

const CursorTrail: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Position[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      setTrail(prevTrail => {
        const newTrail = [newPosition, ...prevTrail.slice(0, 10)];
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="cursor-trail">
      {trail.map((position, index) => (
        <motion.div
          key={index}
          className="trail-dot"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ 
            scale: 0,
            opacity: 0,
          }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.05,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;