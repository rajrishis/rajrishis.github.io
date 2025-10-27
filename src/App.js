import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Moon, Sun, Code2 } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, WebSocket connections, and user authentication.",
      tech: ["React", "Node.js", "OpenAI", "Socket.io"],
      github: "https://github.com/rajrishis/ai-chat",
      demo: "https://demo.example.com",
      color: darkMode ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-50 border-blue-200"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Automated deployment pipeline with Docker containerization, Kubernetes orchestration, and comprehensive testing workflow.",
      tech: ["Jenkins", "Docker", "Kubernetes", "GitHub Actions"],
      github: "https://github.com/rajrishis/cicd-pipeline",
      demo: "https://demo.example.com",
      color: darkMode ? "bg-cyan-500/10 border-cyan-500/20" : "bg-cyan-50 border-cyan-200"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment processing, inventory management, and analytics dashboard.",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
      github: "https://github.com/rajrishis/ecommerce",
      demo: "https://demo.example.com",
      color: darkMode ? "bg-purple-500/10 border-purple-500/20" : "bg-purple-50 border-purple-200"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with drag-and-drop interface and real-time team collaboration.",
      tech: ["React", "Firebase", "TypeScript"],
      github: "https://github.com/rajrishis/task-manager",
      demo: "https://demo.example.com",
      color: darkMode ? "bg-green-500/10 border-green-500/20" : "bg-green-50 border-green-200"
    },
    {
      title: "Microservices Infrastructure",
      description: "Scalable microservices architecture with automated deployment, monitoring, and zero-downtime releases using GitOps principles.",
      tech: ["Terraform", "ArgoCD", "Prometheus", "AWS"],
      github: "https://github.com/rajrishis/microservices",
      demo: "https://demo.example.com",
      color: darkMode ? "bg-orange-500/10 border-orange-500/20" : "bg-orange-50 border-orange-200"
    },
    {
      title: "DevOps Dashboard",
      description: "Real-time monitoring dashboard for CI/CD pipelines with build status, deployment metrics, and automated rollback capabilities.",
      tech: ["React", "Grafana", "CircleCI", "Node.js"],
      github: "https://github.com/rajrishis/devops-dashboard",
      demo: "https://demo.example.com",
      color: darkMode ? "bg-pink-500/10 border-pink-500/20" : "bg-pink-50 border-pink-200"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js",
    "Python", "PostgreSQL", "MongoDB", "AWS",
    "Docker", "Git", "REST APIs", "GraphQL"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>

      {/* Cursor follower */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${darkMode ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.05)'}, transparent 80%)`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-950/80 backdrop-blur-xl border-b border-gray-800' : 'bg-white/80 backdrop-blur-xl border-b border-gray-200') : ''}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-sm font-medium tracking-wider flex items-center group">
              <Code2 className="w-4 h-4 mr-2 transition-transform group-hover:rotate-180 duration-500" />
              <span className="relative">
                @rajrishis
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full`}></span>
              </span>
            </a>

            <div className="flex items-center space-x-8">
              {["About", "Work", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm transition-all duration-300 relative group ${darkMode ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl">
            <div className={`inline-block px-4 py-2 mb-8 border rounded-full text-sm ${darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for new projects
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight">
              Rajrishi Sharma
            </h1>

            <p className={`text-xl md:text-2xl mb-8 font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Full-Stack Developer & Digital Craftsman
            </p>

            <p className={`text-lg mb-12 max-w-2xl leading-relaxed ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              I build thoughtful digital experiences at the intersection of design and engineering.
              Currently crafting scalable web applications and exploring innovative solutions to complex problems.
            </p>

            <div className="flex items-center space-x-6">
              <a href="https://github.com/rajrishis" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full border transition-all duration-300 hover:scale-110 ${darkMode ? 'border-gray-800 text-gray-400 hover:text-gray-100' : 'border-gray-200 text-gray-600 hover:text-gray-900'}`}>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/srajrishi3" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full border transition-all duration-300 hover:scale-110 ${darkMode ? 'border-gray-800 text-gray-400 hover:text-gray-100' : 'border-gray-200 text-gray-600 hover:text-gray-900'}`}>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center mb-20">
            <div className="w-12 h-px bg-blue-500 mr-4"></div>
            <h2 className={`text-sm uppercase tracking-widest ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              Selected Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`group p-8 border rounded-2xl transition-all duration-500 hover:scale-[1.02] ${project.color}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-light">{project.title}</h3>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-white'}`}>
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-white'}`}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 text-xs border rounded-full ${darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-300 text-gray-700'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-px bg-blue-500 mr-4"></div>
            <h2 className={`text-sm uppercase tracking-widest ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>Let's Connect</h2>
            <div className="w-12 h-px bg-blue-500 ml-4"></div>
          </div>

          <p className={`text-base leading-relaxed mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            I'm currently open to new opportunities and interesting projects. Whether you have a question or want to collaborate, feel free to reach out.
          </p>

          <a
            href="mailto:srajrishi3@gmail.com"
            className={`inline-flex items-center text-2xl font-light group transition-colors ${
              darkMode ? 'text-gray-100 hover:text-blue-500' : 'text-gray-900 hover:text-blue-600'
            }`}
          >
            srajrishi3@gmail.com
            <ArrowUpRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              © 2025 Rajrishi Sharma · Crafted with care
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="https://github.com/rajrishis" target="_blank" rel="noopener noreferrer" className={`text-sm ${darkMode ? 'text-gray-500 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                GitHub
              </a>
              <a href="https://linkedin.com/in/rajrishis" target="_blank" rel="noopener noreferrer" className={`text-sm ${darkMode ? 'text-gray-500 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                LinkedIn
              </a>
              <a href="mailto:srajrishi3@gmail.com" className={`text-sm ${darkMode ? 'text-gray-500 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
