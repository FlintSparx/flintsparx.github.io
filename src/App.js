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
      <a href='Contact'>Contact</a>
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

  </div>
  );
}

export default App;
