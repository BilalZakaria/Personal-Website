import TypeIt from "typeit-react";

export default function MainBody() {
  return (
    <div className="mainbody">
      <div id="Home" className="maincontainer">
        <div className="hero-main">
          <div className="hero-text">
            <h1>
              <TypeIt
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .type("Full Stack Engineer")
                    .pause(2000)
                    .delete(30)
                    .pause(800)
                    .type("Software Engineer")
                    .pause(2000)
                    .delete(17)
                    .pause(800)
                    .type("Backend Engineer")
                    .pause(2000)
                    .delete(16)
                    .pause(800);
                  return instance;
                }}
              />
            </h1>
            <p>
              Hi, I'm Bilal Zakaria. A passionate Software Engineer from
              Nashville, Tennessee building innovative solutions that make a difference.📍
            </p>
            <div className="hero-cta">
              <a href="#Projects" className="cta-button">View My Work</a>
              <a href="/resume/BilalZakariaResume.pdf" download className="cta-button secondary">Download Resume</a>
            </div>
            <div className="social-links">
              <span className="social-text">Connect with me:</span>
              <span className="icons">
                <a href="https://github.com/Bilalzakaria" target="_blank" aria-label="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/bilalfzakaria" target="_blank" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="hero-img"></div>
        </div>
      <div className="tech-stack">
          <div className="tech-text">
            <p>
              <span>Tech Stack</span>
            </p>
          </div>
          <div className="icon-box">
            <ul>
                <li><img src="https://skillicons.dev/icons?i=html,css"/></li>
                <li><img src="https://skillicons.dev/icons?i=js,react"/></li>
                <li><img src="https://skillicons.dev/icons?i=python,fastapi"/></li>
                <li><img src="https://skillicons.dev/icons?i=mysql,postgres"/></li>
                <li><img src="https://skillicons.dev/icons?i=java"/></li>
            </ul>
          </div>
        </div>
      <div className="tech-stack">
        <div className="tech-text">
          <p>
            <span>Platforms</span>
          </p>
        </div>
        <div className="icon-box">
          <ul>
              <li><img src="https://skillicons.dev/icons?i=aws"/></li>
              <li><img src="https://skillicons.dev/icons?i=linux"/></li>
              <li><img src="https://skillicons.dev/icons?i=github,vercel"/></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

