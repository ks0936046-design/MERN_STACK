import React from "react";

function Project() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Modern portfolio built using React + Vite.</p>
        </div>

        <div className="project-card">
          <h3>MERN Blog App</h3>
          <p>Full-stack blog platform with authentication.</p>
        </div>

        <div className="project-card">
          <h3>E-commerce App</h3>
          <p>Shopping app with cart, payment integration.</p>
        </div>
      </div>
    </section>
  );
}

export default Project;