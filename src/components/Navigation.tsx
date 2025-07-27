import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-links nav-links-centered">
        {navItems.map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-link"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, color: '#64ffda' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavClick}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;