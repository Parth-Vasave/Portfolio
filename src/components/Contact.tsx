import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree with your actual form ID
      const response = await fetch('https://formspree.io/f/mblkdewg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Parth-Vasave', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/parth-vasave', icon: '💼' },
    { name: 'Resume', url: '/ParthResumeJuly205.pdf', icon: '📄' }
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="section-title glow-text"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <motion.p 
          className="contact-subtitle"
          variants={itemVariants}
        >
          Ready to bring your ideas to life? Let's talk!
        </motion.p>

        <div className="contact-content">
          <motion.div 
            className="contact-form"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit}>
              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={5}
                  required
                />
              </motion.div>

              {submitStatus === 'success' && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="error-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="animated-button submit-btn"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            <h3>Connect with me</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className="social-link"
                  target={link.name === 'Resume' ? '_blank' : '_self'}
                  rel={link.name === 'Resume' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: '0 0 20px rgba(100, 255, 218, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;