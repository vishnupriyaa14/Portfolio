/* import React, { useState } from 'react';
import './Skill.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaDatabase,
  FaGithub,
  FaCloud
} from 'react-icons/fa';

const skills = [
  { icon: <FaHtml5 />, title: 'HTML5', level: 90, desc: 'Responsive, semantic webpages', category: 'Frontend' },
  { icon: <FaCss3Alt />, title: 'CSS3', level: 85, desc: 'Modern, responsive layouts', category: 'Frontend' },
  { icon: <FaJs />, title: 'JavaScript', level: 80, desc: 'Interactive web features', category: 'Frontend' },
  { icon: <FaReact />, title: 'React.js', level: 85, desc: 'SPA development with components', category: 'Frontend' },
  { icon: <FaNodeJs />, title: 'Node.js', level: 75, desc: 'Backend services with Express', category: 'Backend' },
  { icon: <FaDatabase />, title: 'MongoDB', level: 75, desc: 'NoSQL data storage', category: 'Backend' },
  { icon: <FaDocker />, title: 'Docker', level: 70, desc: 'Containerized deployments', category: 'Tools' },
  { icon: <FaGithub />, title: 'Git / GitHub', level: 90, desc: 'Version control & collaboration', category: 'Tools' },
  { icon: <FaCloud />, title: 'AWS', level: 65, desc: 'Cloud infrastructure services', category: 'Tools' }
];

function Skill() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Tools'];
  const filtered = filter === 'All' ? skills : skills.filter(s => s.category === filter);

  return (
    <section className="skills-section" id="skills">
      <div className="container text-center">
        <h2 className="section-title">🚀 My Skills</h2>

        <div className="skill-filters mb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className="icon-wrap">{skill.icon}</div>
              <h5 className="skill-title">{skill.title}</h5>
              <p className="skill-desc">{skill.desc}</p>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  style={{ '--progress': `${skill.level}%` }}
                >
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
*/

import React, { useState } from 'react';
import './Skill.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaDatabase,
  FaGithub,
  FaCloud
} from 'react-icons/fa';

const skills = [
  { icon: <FaHtml5 />, title: 'HTML5', level: 90, desc: 'Responsive, semantic webpages', category: 'Frontend' },
  { icon: <FaCss3Alt />, title: 'CSS3', level: 85, desc: 'Modern, responsive layouts', category: 'Frontend' },
  { icon: <FaJs />, title: 'JavaScript', level: 80, desc: 'Interactive web features', category: 'Frontend' },
  { icon: <FaReact />, title: 'React.js', level: 85, desc: 'SPA development with components', category: 'Frontend' },
  { icon: <FaNodeJs />, title: 'Node.js', level: 75, desc: 'Backend services with Express', category: 'Backend' },
  { icon: <FaDatabase />, title: 'MongoDB', level: 75, desc: 'NoSQL data storage', category: 'Backend' },
  { icon: <FaDocker />, title: 'Docker', level: 70, desc: 'Containerized deployments', category: 'Tools' },
  { icon: <FaGithub />, title: 'Git / GitHub', level: 90, desc: 'Version control & collaboration', category: 'Tools' },
  { icon: <FaCloud />, title: 'AWS', level: 65, desc: 'Cloud infrastructure services', category: 'Tools' }
];

function Skill() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Tools'];
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
                <div
                  className="progress-bar"
                  style={{ width: `${skill.level}%` }}
                >
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
