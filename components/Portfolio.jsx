import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ChevronDown, Menu, X, Briefcase, Code2, Database, Layers, Award, Calendar, MapPin, Phone, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = {
    'Programming Languages': ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
    'Frontend Technologies': ['React.js', 'Next.js', 'Redux', 'Redux Toolkit', 'Material-UI', 'Tailwind CSS', 'Responsive Web Design'],
    'Backend Technologies': ['Node.js', 'Express.js', 'RESTful API', 'Microservices', 'JWT Authentication', 'OAuth', 'WebSockets'],
    'Database': ['MongoDB', 'MySQL', 'PostgreSQL', 'Database Design', 'Data Modeling']
  };

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Digisquares Technologies Pvt. Ltd.',
      location: 'India',
      period: 'Aug 2022 – Present',
      highlights: [
        'Architected and developed comprehensive low-code platform using React.js, Next.js, Node.js, and MongoDB, reducing development time by 40% and improving deployment efficiency by 35%',
        'Built Advanced Garments Management System managing inventory, production workflows, and order tracking for 200+ daily operations, cutting manual errors by 60% and accelerating order fulfillment by 45%',
        'Integrated LLM capabilities and Generative AI features using OpenAI API and Langchain, enabling intelligent automation and natural language processing for enhanced user interactions',
        'Designed and deployed RESTful APIs with microservices architecture using Express.js and Node.js, boosting application performance by 50% and enabling seamless third-party integrations',
        'Led cross-functional teams including product managers, designers, and QA engineers to deliver robust, scalable solutions, increasing user satisfaction by 30% and reducing support tickets by 25%',
        'Conducted comprehensive code reviews and mentored junior developers, elevating code quality metrics by 45% and decreasing production bugs by 40%'
      ]
    },
    {
      title: 'Junior Software Developer',
      company: 'OneWhistle Technology India Pvt. Ltd.',
      location: 'India',
      period: 'Aug 2021 – Jun 2022',
      highlights: [
        'Developed and maintained full-stack web applications using MERN stack, building Whistle Freights logistics platform processing 500+ daily transactions with real-time tracking capabilities',
        'Created responsive UI components using React.js and modern CSS frameworks, driving 35% increase in mobile user engagement and achieving 20% faster page load times',
        'Built RESTful APIs with JWT authentication and Redux state management, strengthening application security and optimizing data flow efficiency',
        'Actively participated in agile development cycles including sprint planning, daily standups, and retrospectives, fostering continuous improvement and team collaboration',
        'Executed thorough testing, debugging, and code reviews to maintain high-quality standards, successfully reducing production defects by 30%'
      ]
    }
  ];

  const projects = [
    {
      title: 'Low-Code Platform',
      description: 'Comprehensive platform for rapid application development using React.js, Next.js, Node.js, and MongoDB',
      technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB'],
      achievements: ['40% reduction in development time', '35% improvement in deployment efficiency']
    },
    {
      title: 'Garments Management System',
      description: 'Advanced inventory and production workflow management system handling 200+ daily operations',
      technologies: ['MERN Stack', 'RESTful API', 'Real-time Tracking'],
      achievements: ['60% reduction in manual errors', '45% faster order fulfillment']
    },
    {
      title: 'AI-Powered Features Integration',
      description: 'LLM capabilities and Generative AI implementation for intelligent automation',
      technologies: ['OpenAI API', 'Langchain', 'Natural Language Processing'],
      achievements: ['Enhanced user interactions', 'Intelligent automation enabled']
    },
    {
      title: 'Whistle Freights Logistics Platform',
      description: 'Full-stack logistics platform with real-time tracking capabilities',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      achievements: ['500+ daily transactions', '35% increase in mobile engagement', '20% faster page loads']
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'RVS College of Arts and Science',
      location: 'Tamil Nadu',
      period: '2020 - 2022'
    },
    {
      degree: 'Bachelor of Science in Mathematics',
      institution: 'Arul Anandar College',
      location: 'Madurai',
      period: '2017 - 2020'
    }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '40%', label: 'Time Efficiency' },
    { number: '60%', label: 'Error Reduction' },
    { number: '50%', label: 'Performance Boost' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              aria-label="Home"
            >
              Vignesh M
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
            Software Developer
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Vignesh M
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Results-driven Full Stack Software Developer with 3+ years of experience in designing and developing scalable web applications using MERN stack, JavaScript, TypeScript, React.js, Next.js, Node.js, and Express.js.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:mvignesh191299@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/vignesh-vicky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/vignesh191299"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About Me
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Results-driven <strong>Full Stack Software Developer</strong> with 3+ years of experience in designing and developing scalable web applications using MERN stack, JavaScript, TypeScript, React.js, Next.js, Node.js, and Express.js.
            </p>
            
            <p className="text-lg">
              Expertise in <strong>AI/ML integration</strong>, <strong>LLM implementation</strong>, RESTful API development, database management (MongoDB, MySQL), and delivering high-performance solutions that optimize efficiency and reduce operational costs.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">Theni, Tamil Nadu</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a href="mailto:mvignesh191299@gmail.com" className="text-blue-600 hover:underline text-sm">
                    mvignesh191299@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <a href="tel:+918300773347" className="text-gray-600 hover:text-blue-600">
                    +91 8300773347
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Professional Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-blue-600 font-semibold mb-1">{exp.company}</div>
                    <div className="text-gray-600 text-sm">{exp.location}</div>
                  </div>
                  <div className="mt-3 md:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-900">{category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    {project.achievements.map((achievement, aIndex) => (
                      <div key={aIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-green-600" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <div className="text-blue-600 font-semibold mb-1">{edu.institution}</div>
                    <div className="text-gray-600 text-sm">{edu.location}</div>
                  </div>
                  <div className="mt-3 md:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium">
                    <Calendar size={16} />
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let&apos;s Connect
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:mvignesh191299@gmail.com"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <Mail size={32} className="mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-gray-600 mb-2">Email</div>
              <div className="text-gray-900 font-medium text-sm break-all">
                mvignesh191299@gmail.com
              </div>
            </a>

            <a
              href="https://linkedin.com/in/vignesh-vicky"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <Linkedin size={32} className="mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-gray-600 mb-2">LinkedIn</div>
              <div className="text-gray-900 font-medium">vignesh-vicky</div>
            </a>

            <a
              href="https://github.com/vignesh191299"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <Github size={32} className="mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-gray-600 mb-2">GitHub</div>
              <div className="text-gray-900 font-medium">vignesh191299</div>
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a
              href="tel:+918300773347"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone size={20} />
              <span className="font-medium">+91 8300773347</span>
            </a>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={16} />
              <span>Theni, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © 2026 Vignesh M. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="mailto:mvignesh191299@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vignesh-vicky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/vignesh191299"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
