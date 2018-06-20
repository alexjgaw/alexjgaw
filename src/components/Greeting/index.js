import React from 'react';
import './index.css';

const Greeting = (props) => {
  return (
    <div id="greeting">
      <h1>Hi,</h1>
      <h2>I'm Alex</h2>
      <h3>A Web Developer from Austin, TX</h3>
      <a href="https://www.linkedin.com/in/alexjgaw/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin icons" title="Connect with me"></i>
      </a>
      <a href="https://github.com/alexjgaw" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github-square icons" title="Fork me"></i>
      </a>
      <a href="mailto:alexanderjgaw@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope icons" title="Email me"></i>
      </a>
      <a href="/AlexGawResume.pdf" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-file-alt icons" title="Hire me"></i>
      </a>
    </div>
  );
};

export default Greeting;
