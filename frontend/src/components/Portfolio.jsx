import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Download, ExternalLink, Code, Sparkles, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xnnzwkpq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
              {mockData.personalInfo.name}
            </div>
            <div className="hidden md:flex space-x-8">
              {['about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-300 hover:text-emerald-400 relative group ${
                    activeSection === section ? 'text-emerald-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                  <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-amber-400 transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
              {mockData.personalInfo.name.split(' ')[0]}
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
              {mockData.personalInfo.name.split(' ')[1]}
            </span>
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-32"></div>
            <Code className="w-6 h-6 text-emerald-400 mx-4" />
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {mockData.personalInfo.title} • Crafting digital experiences with code and creativity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50"
              onClick={() => window.open(mockData.personalInfo.resumeUrl, '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            {[
              { icon: Github, href: mockData.personalInfo.github, color: 'hover:text-white' },
              { icon: Linkedin, href: mockData.personalInfo.linkedin, color: 'hover:text-emerald-400' }
            ].map(({ icon: Icon, href, color }, index) => (
              <a 
                key={index}
                href={href} 
                className={`text-gray-400 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
              >
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>


      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                {mockData.about.bio}
              </p>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 text-emerald-400 mr-3" />
                  My Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  {mockData.about.interests.map((interest, index) => (
                    <Badge 
                      key={index} 
                      className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400/50 px-4 py-2 text-sm font-medium rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 pb-8">
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {mockData.about.education.map((edu, index) => (
                    <div key={index}>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                        <p className="text-emerald-300 text-lg mb-1">{edu.university}</p>
                        <p className="text-gray-400">{edu.graduation}</p>
                      </div>
                      
                      <div className="mt-4">
                        <h5 className="text-sm font-semibold text-white mb-3">Key Coursework</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {edu.relevantCourses.map((course, courseIndex) => (
                            <Badge 
                              key={courseIndex} 
                              variant="outline" 
                              className="text-xs text-gray-300 border-gray-600 hover:border-emerald-400/50 justify-start p-2 rounded-lg transition-all duration-300"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {index < mockData.about.education.length - 1 && (
                        <Separator className="bg-white/10 mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-slate-900/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my technical skills and creativity
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {mockData.projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 rounded-3xl overflow-hidden hover:scale-[1.02]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://placehold.co/800x450/png?text=Image+Not+Found';
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      index % 4 === 0 ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                      index % 4 === 1 ? 'bg-teal-500/20 text-teal-300 border-teal-500/30' :
                      index % 4 === 2 ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                      'bg-orange-500/20 text-orange-300 border-orange-500/30'
                    } backdrop-blur-sm border px-3 py-1 font-medium rounded-full`}
                  >
                    {project.category}
                  </Badge>
                </div>
                
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs text-gray-300 border-gray-600 hover:border-emerald-400/50 px-3 py-1 rounded-full transition-all duration-300 hover:text-emerald-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`border-white/30 text-gray-300 hover:bg-white/10 hover:border-emerald-400/50 rounded-xl transition-all duration-300 ${project.demo ? 'flex-1' : 'w-full'}`}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    {project.demo && (
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl flex-1 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(mockData.skills).map(([category, skills], index) => (
              <Card 
                key={category} 
                className={`bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 rounded-3xl group hover:scale-105 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <CardTitle className="capitalize text-white text-xl font-bold flex items-center justify-center group-hover:text-emerald-300 transition-colors duration-300">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      index % 5 === 0 ? 'bg-emerald-400' :
                      index % 5 === 1 ? 'bg-teal-400' :
                      index % 5 === 2 ? 'bg-amber-400' :
                      index % 5 === 3 ? 'bg-orange-400' : 'bg-yellow-400'
                    }`}></div>
                    {category.replace('_', ' ')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className={`bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border-0 px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                          index % 5 === 0 ? 'hover:bg-emerald-500/20 hover:text-emerald-300' :
                          index % 5 === 1 ? 'hover:bg-teal-500/20 hover:text-teal-300' :
                          index % 5 === 2 ? 'hover:bg-amber-500/20 hover:text-amber-300' :
                          index % 5 === 3 ? 'hover:bg-orange-500/20 hover:text-orange-300' :
                          'hover:bg-yellow-500/20 hover:text-yellow-300'
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-slate-900/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My journey in the tech industry and academic contributions
            </p>
          </div>
          
          <div className="space-y-8">
            {mockData.experience.map((exp, index) => (
              <Card 
                key={exp.id} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-teal-500/30 shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 rounded-3xl group hover:scale-[1.01]"
              >
                <CardHeader className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                      <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-teal-400 mb-1">
                        {exp.company}
                      </CardDescription>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                    <Badge 
                      className="bg-teal-500/20 text-teal-300 border border-teal-500/30 px-4 py-2 font-medium rounded-xl w-fit backdrop-blur-sm"
                    >
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{exp.description}</p>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start group/item">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Mail, title: 'Email', info: mockData.personalInfo.email, color: 'from-emerald-500 to-teal-500' },
              { icon: MapPin, title: 'Location', info: mockData.personalInfo.location, color: 'from-amber-500 to-orange-500' }
            ].map(({ icon: Icon, title, info, color }, index) => (
              <div key={index} className="group">
                <div className={`w-20 h-20 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">{title}</h3>
                <p className="text-gray-300 text-lg">{info}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-300 mb-2">Message Sent Successfully!</h3>
                  <p className="text-emerald-200">
                    Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-red-300 mb-2">Oops! Something went wrong</h3>
                  <p className="text-red-200 mb-4">
                    There was an issue sending your message. Please try again or email me directly at{' '}
                    <a href={`mailto:${mockData.personalInfo.email}`} className="text-red-300 underline hover:text-red-200">
                      {mockData.personalInfo.email}
                    </a>
                  </p>
                </div>
              )}
              
              <Button 
                type="submit"
                size="lg" 
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 hover:from-emerald-600 hover:via-teal-600 hover:to-amber-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Mail className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-6 text-lg">
            © 2025 {mockData.personalInfo.name}. Crafted with passion and lots of ☕
          </p>
          <div className="flex justify-center space-x-8 mb-6">
            {[
              { icon: Github, href: mockData.personalInfo.github, color: 'hover:text-white' },
              { icon: Linkedin, href: mockData.personalInfo.linkedin, color: 'hover:text-emerald-400' }
            ].map(({ icon: Icon, href, color }, index) => (
              <a 
                key={index}
                href={href} 
                className={`text-gray-500 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 mx-auto rounded-full"></div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;