import React, { useEffect } from "react";
import "../src/index.css";

function Appc() {
  useEffect(() => {
    const titleText = "MernStack Developer / UI/UX Designer";
    const paragraphText =
      "I create responsive, user-friendly web experiences with modern technology. With over 1.3 years of experience, I specialize in turning complex problems into simple, beautiful code and websites.";

    let i = 0;
    let j = 0;
    let timeoutTitle;
    let timeoutPara;

    const typingTitleElement = document.getElementById("typing");
    const typingParaElement = document.getElementById("typing-para");

    if (typingTitleElement) typingTitleElement.innerHTML = "";
    if (typingParaElement) typingParaElement.innerHTML = "";

    function typeWriterTitle() {
      if (i < titleText.length) {
        if (typingTitleElement) typingTitleElement.innerHTML += titleText.charAt(i);
        i++;
        timeoutTitle = setTimeout(typeWriterTitle, 20);
      } else {
        typeWriterPara();
      }
    }

    function typeWriterPara() {
      if (j < paragraphText.length) {
        if (typingParaElement) typingParaElement.innerHTML += paragraphText.charAt(j);
        j++;
        timeoutPara = setTimeout(typeWriterPara, 10);
      }
    }

    typeWriterTitle();

    return () => {
      clearTimeout(timeoutTitle);
      clearTimeout(timeoutPara);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <h2 className="logo">RAHUL BENIWAL</h2>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="content">
          <h1>Hi, I’m <span>RAHUL</span></h1>
          <h3 id="typing">
            <span style={{ visibility: "hidden" }}>Typing animation placeholder</span>
          </h3>
          <p id="typing-para"></p>
          <div className="buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="profile-pic">
          <img src="/me.png" alt="Your Profile" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="about-container">
          <h2>About Me</h2>
          <p>
            Hello! It’s <strong>Rahul Beniwal</strong>, a <strong>MERN Stack Developer</strong> and
            <strong> UI/UX Designer</strong> with 1.3+ years of experience building responsive and
            user-friendly web applications. I can handle both Frontend and Backend perfectly. My core JavaScript and React skills are strong. I specialize in turning complex problems into simple, elegant solutions.
          </p>

          <div className="about-lists">
            <div className="about-list">
              <h3>Core Competencies</h3>
              <ol>
                <li><strong>HTML:</strong> creating responsive and interactive web pages.</li>
                <li><strong>CSS:</strong> Styling responsive and interactive web pages.</li>
                <li><strong>React:</strong> Creating dynamic and reusable UI components.</li>
                <li><strong>JavaScript:</strong> Build logics and working infrastructure.</li>
                <li><strong>MongoDB:</strong> Efficient database design and CRUD operations.</li>
                <li><strong>Express.js:</strong> Building robust backend services and APIs.</li>
                <li><strong>Node.js:</strong> Full-stack JavaScript environment for seamless development.</li>
              </ol>
            </div>

            <div className="about-list">
              <h3>Key Responsibilities</h3>
              <ol>
                <li>Full-stack development: Client-side and server-side integration.</li>
                <li>API development: Designing RESTful APIs.</li>
                <li>Database management: Optimizing data storage and retrieval.</li>
                <li>Debugging & Maintenance: Improving performance and fixing issues.</li>
                <li>Collaboration: Working with cross-functional teams effectively.</li>
                <li>Continuous learning: Staying up-to-date with latest web technologies.</li>
              </ol>
            </div>
          </div>

          <p className="about-summary">
            In short, I’m a FullStack developer delivering modern, scalable web applications efficiently in a unified JavaScript ecosystem.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3>MERN Stack Developer</h3>
            <span>Onetick Technologies | Jul 2024 - Present (1.3 years)</span>
            <p>Developed full-stack web applications using MongoDB, Express, React, and Node. Improved performance and optimized UI/UX.</p>
          </div>
          <div className="experience-card">
            <h3>UI/UX Designer</h3>
            <span>Onetick Technologies | Jul 2024 - Present (1.3 years)</span>
            <p>Created user-friendly, responsive interfaces. Collaborated with developers to implement designs efficiently.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <a href="https://onetickcdc.com" target="_blank" rel="noopener noreferrer">
              <h3 className="linkss">Www.OnetickCdc.Com</h3>
            </a>
            <p>A web app to manage student records with login/authentication, filtering, and top student display.</p>
          </div>

          <div className="project-card">
            <h3>E-commerce Shopping Website</h3>
            <p>A full-featured, professional e-commerce platform with complete frontend and backend functionality.</p>
          </div>

          <div className="project-card">
            <a href="https://my-personal-website-rosy-one.vercel.app/" target="_blank" rel="noopener noreferrer">
              <h3 className="linkss">My Profile</h3>
            </a>
            <p>A fully responsive personal portfolio website to showcase skills, projects, and experience.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES5+ / ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Postman</li>
          <li>JWT</li>
          <li>AWS</li>
          <li>Authentication</li>
          <li>Authorization</li>
          <li>UI/UX Design</li>
          <li>React Router</li>
          <li>Problem Solving</li>
          <li>Code Maintainability</li>
          <li>Debugging</li>
        </ul>
      </section>

      {/* Resume */}
      <section id="resume" className="resume">
        <h2>Resume</h2>
        <a
          href="https://drive.google.com/file/d/1GKHXib0vFVJB_fc87LOKeZ_Hljfnkxjh/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Download Resume
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p><strong>Name:</strong> Rahul Beniwal</p>
          <p><strong>Mobile:</strong> <a href="tel:+919306078823">+91 9306078823</a></p>
          <p><strong>Email:</strong> <a href="mailto:rahulbeniwal988@gmail.com">rahulbeniwal988@gmail.com</a></p>
        </div>
      </section>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

      <footer>
        <p>© 2025 Rahul Beniwal | All Rights Reserved</p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/chaudhary_rahul_beniwal_/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/rahul-beniwal-7396a2331" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:rahulbeniwal988@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
      </footer>
    </>
  );
}

export default Appc;
