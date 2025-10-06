import './App.css';

function App() {
  return (
  <div className="App">
    {/* Header/Navigation */}
<header className='header'>
  <div className='container'>
    <h1 className='logo'>FlintSparx</h1>
    <nav className='nav'>
      <a href='#About'>About</a>
      <a href='#Projects'>Projects</a>
      <a href='#Contact'>Contact</a>
    </nav>
  </div>
</header>

{/* Hero Section */}
<section className='Hero'>
  <div className='hero-content'>
    <h2 className='hero-title'>Full Stack Developer</h2>
    <p className='hero-subtitle'>
      Building modern web applications witht the MERN stack
    </p>
    <p className='hero-description'>
      Recent soiftware development bootcamp graduate passionate about creating 
      efficient, user-friendly applications.  Experienced with MongoDB, Express.js,
      React, and Node.js. 
    </p>
    <div className='hero-buttons'>
      <a href='#projects' className='btn btn-primary'>View My Work</a>
    <a href='#contact' className='btn btn-secondary'>Get In Touch</a>
    </div>
  </div>
</section>

{/* About Section */}
<section id='about' className='about'>
  <div className='container'>
    <h2 className='section-title'>About Me</h2>
    <div className='about-content'>
      <p>
        Hello!
        My name is Robert Flint and I am a passionate full stack developer who recently completed an intensive 
        6-month software development bootcamp focused on the MERN stack.  During my program, I gained hands-on 
        experience building modern web applications and working collaboiratively on team projects.
      </p>
    </div>

    <div className='skills'>
      <h3>Technical Skills</h3>
      <div className='skills-grid'>
        <div className='skill-cateory'>
          <h4>Frontend</h4>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML 5 & CSS3</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div className='skill-cateogory'>
          <h4>Backend</h4>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>Authentication</li>
          </ul>
        </div>
        <div className='skill-category'>
          <h4>Database</h4>
          <ul>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Database Design</li>
            <li>CRUD Operations</li>
          </ul>
        </div>
        <div className='skill-category'>
        <h4>Tools & Other</h4>
        <ul>
          <li>Git & Github</li>
          <li>npm</li>
          <li>Postman</li>
          <li>VS Code</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Projects Preview Section */}
<section id='projects' className='projects'>
  <div className='container'>
    <h2 className='section-title'>Featured Projects</h2>
    <p className='section-subtitle'>
      Here are some projects I've worked on that showcase my development skills 
    </p>

    <div className='projects-grid'>
      <div className='projects-card'>
      <div className='projects-header'>
        <h3>Pokedex</h3>
        <span className='project-status'>Coming Soon</span>
      </div>
      <p className='project-description'>
        A responsive Pokemon database application built with React, featuring search 
        functionality and detailed Pokemon information using the Pokemon API
      </p>
      <div className='tech-stack'>
        <span className='tech-tag'>React</span>
        <span className='tech-tag'>JavaScript</span>
        <span className='tech-tag'>Pokemon API</span>
        <span className='tech-tag'>CSS3</span>
      </div>
      </div>

      <div className='project-card'>
        <div className='project-header'>
          <h3>Real-time Chat Application</h3>
          <span className='project-status'>Coming Soon</span>
        </div>
        <p className='project-description'>
          A full-stack messaging application built with the MERN stack, featuring
          user authentication, real-time messaging, and multiple chat rooms.
        </p>
        <div className='tech-stack'>
          <span className='tech-tag'>MongoDB</span>
          <span className='tech-tag'>Express.js</span>
          <span className='tech-tag'>React</span>
          <span className='tech-tag'>Node.js</span>
        </div>
      </div>

      <div className='project-card'>
        <div className='project-header'>
          <h3>Connections Game</h3>
          <span className='project-status'>Coming Soon</span>
        </div>
        <p className='project-description'>
          This project was my group's Capstone project for the Software development Bootcamp from Upright Education.
          We were assigned to create a game similar to the New York Times Connections game, witht the added twist of
          user-created game boards.
        </p>
        <div className="tech-stack">
                <span className="tech-tag">MERN Stack</span>
                <span className="tech-tag">Team Project</span>
                <span className="tech-tag">User Auth</span>
                <span className="tech-tag">Collaboration</span>
              </div>
      </div>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id='contact' className='contact'>
  <div className='container'>
    <h2 className='section-title'>Let's Connect</h2>
    <p className='section-subtitle'>
      I'm actively seeking opportunities to contribute to innovative projects
    </p>

    <div className='contact-content'>
      <div className='contact-info'>
        <h3>Get In Touch</h3>
        <p>
          I'm always interested in discussing new opportunities, collaboarting on new projects, or just talking about technology.   Feel free to reach out!
        </p>

        <div className='contact-links'>
          <a href='mailto:robbie.flint.wsd@gmail.com' className='contact-link'>
            <span className='contact-icon'></span>
            LinkedIn Profile
          </a>
          <a href='https://www.linkedin.com/in/robert-flint-5b9555113/' className='contact-link' target="_blank" rel="noopener noreferrer">
        <span className='contact-icon'></span>
        Github Profile
        </a>
        </div>
      </div>

<div className='availability'>
  <h3>Availability</h3>
  <p>Currently seeking full-time opportunities in:</p>
  <ul>
    <li>Full Stack Development</li>
    <li>Frontend Development</li>
    <li>Backend Development</li>
    <li>Junior Developer Positions</li>
  </ul>
  <p classname='location'>Located in Vermont, open to remote and on-site work</p>
</div>

    </div>
  </div>
</section>

{/* Footer */}
<footer className="footer">
        <div className="container">
          <p>&copy; 2024 FlintSparx. Built with React and hosted on GitHub Pages.</p>
        </div>
      </footer>

  </div>
  );
}

export default App;
