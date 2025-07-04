import React, { useState } from 'react';
import './Skill.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaGithub,
  FaCloud
} from 'react-icons/fa';

const skills = [
  // Frontend
  { icon: <FaHtml5 />, title: 'HTML5', level: 90, desc: 'Semantic markup and structure', category: 'Frontend' },
  { icon: <FaCss3Alt />, title: 'CSS3', level: 85, desc: 'Modern, responsive designs', category: 'Frontend' },
  { icon: <FaJs />, title: 'JavaScript (ES6)', level: 85, desc: 'Dynamic scripting with ES6 features', category: 'Frontend' },
  { icon: <FaReact />, title: 'React.js', level: 85, desc: 'Component-based frontend development', category: 'Frontend' },
  { icon: <FaReact />, title: 'React Native', level: 80, desc: 'Mobile app development with React', category: 'Frontend' },
  { icon: <FaCss3Alt />, title: 'Bootstrap / React-Bootstrap', level: 80, desc: 'Responsive UI framework', category: 'Frontend' },
  { icon: <FaCss3Alt />, title: 'SASS / SCSS', level: 80, desc: 'CSS with nesting and variables', category: 'Frontend' },
  { icon: <FaCss3Alt />, title: 'Tailwind CSS', level: 75, desc: 'Utility-first modern CSS', category: 'Frontend' },
  { icon: <FaJs />, title: 'JSX', level: 85, desc: 'HTML-like syntax in React', category: 'Frontend' },
  { icon: <FaJs />, title: 'jQuery', level: 60, desc: 'DOM manipulation (legacy)', category: 'Frontend' },
  { icon: <FaJs />, title: 'DOM Manipulation', level: 80, desc: 'Client-side dynamic interactions', category: 'Frontend' },
  { icon: <FaCss3Alt />, title: 'Flexbox', level: 85, desc: 'Layout styling and responsiveness', category: 'Frontend' },

  // Backend
  { icon: <FaNodeJs />, title: 'Node.js', level: 80, desc: 'Server-side JavaScript runtime', category: 'Backend' },
  { icon: <FaNodeJs />, title: 'Express.js', level: 80, desc: 'Minimal backend framework', category: 'Backend' },
  { icon: <FaJs />, title: 'RESTful APIs', level: 85, desc: 'Designing web API endpoints', category: 'Backend' },
  { icon: <FaJs />, title: 'CRUD Operations', level: 85, desc: 'Database create-read-update-delete', category: 'Backend' },
  { icon: <FaJs />, title: 'JWT Authentication', level: 70, desc: 'Token-based user auth', category: 'Backend' },

  // Databases
  { icon: <FaDatabase />, title: 'MongoDB', level: 75, desc: 'NoSQL document database', category: 'Databases' },
  { icon: <FaDatabase />, title: 'Mongoose', level: 75, desc: 'MongoDB ODM for Node.js', category: 'Databases' },
  { icon: <FaDatabase />, title: 'MySQL', level: 70, desc: 'Structured relational data storage', category: 'Databases' },

  // Tools
  { icon: <FaGithub />, title: 'Git & GitHub', level: 90, desc: 'Version control and team collaboration', category: 'Tools' },
  { icon: <FaJs />, title: 'Postman', level: 80, desc: 'API testing and debugging tool', category: 'Tools' },
  { icon: <FaJs />, title: 'VS Code', level: 90, desc: 'Powerful code editor for development', category: 'Tools' },
  { icon: <FaCloud />, title: 'Docker', level: 70, desc: 'Containerized development and deployment', category: 'Tools' },
  { icon: <FaJs />, title: 'AJAX / JSON', level: 80, desc: 'Dynamic content exchange with APIs', category: 'Tools' },
  { icon: <FaJs />, title: 'Redux / Flux', level: 75, desc: 'State management in React apps', category: 'Tools' },
  { icon: <FaJs />, title: 'Webpack', level: 70, desc: 'JavaScript bundler for optimization', category: 'Tools' },
  { icon: <FaJs />, title: 'Netlify / Vercel', level: 80, desc: 'Modern hosting for frontend apps', category: 'Tools' },
  { icon: <FaJs />, title: 'Android Studio', level: 70, desc: 'React Native mobile dev environment', category: 'Tools' },
  { icon: <FaJs />, title: 'Figma', level: 80, desc: 'Design prototyping for UI/UX', category: 'Tools' },
  { icon: <FaJs />, title: 'Chrome DevTools', level: 80, desc: 'Browser debugging tools', category: 'Tools' },

  // Others
  { icon: <FaCloud />, title: 'UI/UX Design Principles', level: 75, desc: 'User-centered design techniques', category: 'Others' },
  { icon: <FaJs />, title: 'XML', level: 60, desc: 'Structured data (legacy)', category: 'Others' },
  { icon: <FaCloud />, title: 'Cloud Basics (AWS)', level: 65, desc: 'Foundational AWS knowledge', category: 'Others' }
];

function Skill() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Databases', 'Tools', 'Others'];
  const filtered = filter === 'All' ? skills : skills.filter(skill => skill.category === filter);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">🚀 My Skills</h2>

        <div className="skill-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className="icon-wrap">{skill.icon}</div>
              <h4 className="skill-title">{skill.title}</h4>
              <p className="skill-desc">{skill.desc}</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${skill.level}%` }}>
                  <span>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
