import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';
import CursorTrail from './components/CursorTrail';
import './App.css';

function App() {
  return (
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedBackground />
      <CursorTrail />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </motion.div>
  );
}

export default App;
