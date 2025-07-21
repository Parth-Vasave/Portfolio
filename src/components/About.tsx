import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="section-title glow-text"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            variants={itemVariants}
          >
            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              I'm a final year Computer Science student with a passion for creating 
              privacy centric projects. My academic journey in tech has equipped me with 
              strong problem-solving skills and a deep understanding of modern 
              development practices.
            </motion.p>
            
            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              I love working on challenging projects that push the boundaries of 
              what's possible with code. Whether it's building responsive web 
              applications, optimizing algorithms, or exploring new technologies, 
              I'm always eager to learn and grow! 
            </motion.p>

            <motion.div 
              className="about-stats"
              variants={itemVariants}
            >
              {[
                { number: '8', label: 'Projects Completed' },
                { number: '5', label: 'Technologies Learned' },
                { number: '100%', label: 'Passion for Code' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="stat-number glow-text"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5 
                    }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="image-placeholder">
              <motion.div
                className="code-animation"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {'< Developer />'}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;