import React from 'react';
import './Projects.css';

const projects = [
  {
    title: '🛒 E-Commerce Web App',
    description: 'MERN stack-based online store with user authentication, cart, and payment integration.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/yourusername/ecommerce-app',
    demo: 'https://ecommerce-app.netlify.app'
  },
  {
    title: '🧠 AI Healthcare Chatbot',
    description: 'NLP-enabled chatbot offering basic medical support responses.',
    tech: ['React', 'Node.js', 'Dialogflow'],
    github: 'https://github.com/yourusername/ai-healthcare-chatbot',
    demo: '#'
  },
  {
    title: '📚 Library Management System',
    description: 'Web application for managing book inventory, member accounts, and lending system.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/yourusername/library-management-system',
    demo: '#'
  },
  {
    title: '📶 5G and Beyond',
    description: 'Research project on emerging mobile network technologies beyond 5G.',
    tech: ['Research', 'Presentation', 'Networking'],
    github: '#',
    demo: '#'
  },
  {
    title: '🌐 Portfolio Website',
    description: 'Personal responsive portfolio built with React.js and hosted on Netlify.',
    tech: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourname.netlify.app'
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">💼 Projects</h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {project.demo !== '#' && (
                  <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                )}
              </div>

              {/* Sparkling Flowers */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="flower"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${5 + Math.random() * 5}s`
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
