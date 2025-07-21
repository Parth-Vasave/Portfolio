import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import javascriptLogo from '../assets/images/javascriptlogo.png';
import typescriptLogo from '../assets/logos/typescriptlogo.svg';
import reactLogo from '../assets/images/React-icon.svg.png';
import pythonLogo from '../assets/images/python-logo-only.png';
import nodejsLogo from '../assets/images/nodejs .png';
import githubLogo from '../assets/images/GitHub.png';
import mysqlLogo from '../assets/images/MySQL.png';
import cppLogo from '../assets/images/C++ (CPlusPlus).png';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    { name: 'JavaScript', level: 90, icon: 'JS', logo: javascriptLogo },
    { name: 'TypeScript', level: 85, icon: 'TS', logo: typescriptLogo },
    { name: 'React', level: 88, icon: 'R', logo: reactLogo },
    { name: 'Python', level: 85, icon: 'PY', logo: pythonLogo },
    { name: 'C++', level: 80, icon: 'C++', logo: cppLogo },
    { name: 'Node.js', level: 82, icon: 'N', logo: nodejsLogo },
    { name: 'MySQL', level: 75, icon: 'SQL', logo: mysqlLogo },
    { name: 'Git', level: 85, icon: 'G', logo: githubLogo }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="section-title glow-text"
          variants={itemVariants}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 10px 30px rgba(100, 255, 218, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="skill-icon"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {skill.logo ? (
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="skill-logo"
                  />
                ) : (
                  skill.icon
                )}
              </motion.div>

              <h3 className="skill-name">{skill.name}</h3>

              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>


            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-summary"
          variants={itemVariants}
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Continuously learning and adapting to new technologies.
            Always excited to take on new challenges and expand my skill set.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;