import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Project } from '../types';
import fileForgeImage from '../assets/images/FileForge.png';
import steganoImage from '../assets/images/stegano.png';
import algoviewImage from '../assets/images/algoview.png';
import brewUpdateImage from '../assets/images/BrewUpdate.png';
import cliPortfolioImage from '../assets/images/CLI portolio.png';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const projects: Project[] = [
    {
      title: 'FileForge',
      description: 'FileForge is an all-in-one web toolkit for managing PDFs and images with features like compression, cropping, editing, and format conversion.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Canvas API'],
      github: 'https://github.com/Parth-Vasave/FileForge',
      demo: 'https://file-forge-rho.vercel.app',
      image: fileForgeImage
    },
    {
      title: 'Stegano',
      description: 'Steganography tool for hiding messages in images using advanced algorithms. Features secure encryption and decryption capabilities.',
      technologies: ['React', 'Next', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/parth-vasave/stegano',
      demo: 'https://stegano-dusky.vercel.app',
      image: steganoImage
    },
    {
      title: 'AlgoView',
      description: 'Interactive algorithm visualizer application with Gemini Powered Algorithm recommendation',
      technologies: ['NextJS', 'Tailwind CSS', 'TypeScript', 'Gemini AI'],
      github: 'https://github.com/Parth-Vasave/AlgoView',
      demo: 'https://algo-view-omega.vercel.app/',
      image: algoviewImage
    },
    {
      title: 'BrewUpdate',
      description: 'A GUI based HomeBrew App enabling user to change permissions or delete/update homebrew packages, (one of my first project, pls dont judge)',
      technologies: ['Python'],
      github: 'https://github.com/Parth-Vasave/BrewUpdate',
      image: brewUpdateImage
    },
    {
      title: 'Terminal Based Portfolio!',
      description: 'Created a terminal based portfolio using Python and heavily inspired by terminal.shop',
      technologies: ['Python'],
      github: 'https://github.com/CLIPortfolio',
      image: cliPortfolioImage
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="section-title glow-text"
          variants={itemVariants}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                y: -10,
                boxShadow: '0 20px 40px rgba(100, 255, 218, 0.2)'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="project-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-actual-image"
                  />
                ) : (
                  <div className="project-placeholder">
                    <motion.div
                      className="project-icon"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      📱
                    </motion.div>
                  </div>
                )}
              </motion.div>

              <div className="project-content">
                <motion.h3
                  className="project-title"
                  whileHover={{ color: '#64ffda' }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="project-description"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="project-technologies"
                  variants={containerVariants}
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(100, 255, 218, 0.2)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="project-links"
                  variants={itemVariants}
                >
                  <motion.a
                    href={project.github}
                    className="project-link"
                    whileHover={{ scale: 1.1, color: '#64ffda' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      className="project-link"
                      whileHover={{ scale: 1.1, color: '#64ffda' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;