/* import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h1 className="section-title">About Me</h1>

        <p className="lead">
          Hi! I'm <strong>Vishnupriya</strong>, an MSc Computer Science graduate and passionate full-stack developer.
          I specialize in creating modern web applications using both front-end and back-end technologies.
          With a keen interest in software engineering, I strive to solve complex problems and deliver scalable solutions.
        </p>
        <p className="lead">
          Currently, I am expanding my knowledge in cutting-edge technologies and seeking opportunities to build impactful projects.
          My goal is to continue learning, grow as a developer, and contribute to the tech community.
        </p>

        <div className="about-details">
          <div className="education">
            <h3>🎓 Education</h3>
            <p><strong>MSc Computer Science</strong> - Bharathiar University (Passed out: 2025)</p>
          </div>

          <div className="skills">
            <h3>🛠️ Technical Skills</h3>
            <ul>
              <li><strong>Languages:</strong> JavaScript, MySQL</li>
              <li><strong>Front-End:</strong> HTML, CSS, React.js, Bootstrap</li>
              <li><strong>Back-End:</strong> Node.js, Express.js, Django</li>
              <li><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL</li>
              <li><strong>Tools:</strong> Git, GitHub, Docker, AWS</li>
            </ul>
          </div>

          <div className="social">
            <h3>🌐 Social Links</h3>
            <div className="social-links">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"></a>
              <a href="mailto:vishnupriya14kp@gmail.com"> vishnupriya14kp@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;
*/

import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h1 className="section-title">About Me</h1>

        <p className="about-text">
          Hi! I'm <strong>Vishnupriya</strong>, a passionate full-stack developer and Computer Science graduate. 
          I specialize in building modern, responsive web applications using front-end and back-end technologies.
        </p>

        <p className="about-text">
          With a strong interest in software engineering, I strive to solve real-world problems through efficient and scalable solutions.
          I'm currently deepening my expertise in full-stack development and always eager to learn and grow.
        </p>

        <div className="about-details">
          <div>
            <h3>🎓 Education</h3>
            <p className="about-text">
              <strong>B.Sc. Computer Science</strong> — Bharathiar University (2020–2025)
            </p>
            <p className="about-text">
              <strong>M.Sc. Computer Science</strong> — Bharathiar University (2023-2025)
            </p>
            <p className="about-text">
              <strong>Certificate:</strong> Diploma in React & Node Full-Stack Development (2025)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
