import React from "react";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>AAKASH C</span>
        </h1>
        <h3>Full Stack MERN Developer</h3>
        <p>
          I build responsive, scalable and modern web applications using
          React, Node.js, Express and MongoDB.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">View Projects</button>
          <button className="btn-outline">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Home;