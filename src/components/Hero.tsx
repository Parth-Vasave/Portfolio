import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="hero">
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h1
            className="hero-title glow-text"
            animate={{
              textShadow: [
                '0 0 10px rgba(100, 255, 218, 0.5)',
                '0 0 20px rgba(100, 255, 218, 0.8)',
                '0 0 10px rgba(100, 255, 218, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Hi, I'm <span className="highlight">Parth Vasave</span>
          </motion.h1>
          

        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Computer Science Graduate
          </motion.h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Passionate about Python and building fun little scripts
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hero-buttons"
        >
          <motion.button
            className="animated-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView()}
          >
            View My Work
          </motion.button>

          <motion.button
            className="animated-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  );
};

export default Hero;