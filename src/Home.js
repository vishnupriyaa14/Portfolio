import React from 'react';
import './Home.css';
import profile from './pc2.jpg'; // 👉 Adjust path if needed

function Home() {
  return (
    <div className="home-section">
      <div className="home-content">
        <div className="profile-image-wrapper">
          <img src={profile} alt="Vishnupriya" className="profile-image" />
        </div>

        <div className="intro-text">
          <h1 className="animated-text">Hi, I'm <span className="name">Vishnupriya</span></h1>
          <p className="subtitle">Full-Stack Developer 👩‍💻 | M.Sc. in Computer Science 🎓</p>
          <p className="tagline">
            I build real-world web applications with a passion for clean code and smooth UX.
            Building modern, scalable web applications with React on the frontend and Node.js on the backend.
          </p>
          <p className="welcome">✨ Explore My Work ✨</p>
        </div>
      </div>

      <div className="footer-line">
        <h2>🚀 Welcome to My Portfolio!</h2>
      </div>
    </div>
  );
}

export default Home;
