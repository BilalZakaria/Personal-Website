export default function Projects(){
  return(
  <div id="Projects" className="Projects-container">
  <div className="header">
    <h2>MY PROJECTS</h2>
    <h3>A curated collection of projects highlighting my technical range and problem-solving approach.</h3>
  </div>

    {/* Project 1: BlockAugur */}
    <div className="project">
      <div className="grid-container">
        <div className="img-container-project zero">
          <img src="../img/1754954876458.jpg" alt="" />
        </div>
        <div className="info-right">
          <div className="title">BlockAugur</div>
          <div className="project-info">
            <p>A full-stack cryptocurrency analysis platform designed to help users identify market trends through statistical analysis and data visualization.</p>
          </div>
          <div className="project-languages">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>FastAPI</li>
              <li>Postgres SQL</li>
              <li>ETL</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="links project-links">
            <a href="https://blockaugur.com/" target="_blank" rel="noopener noreferrer" className="cta-button project-button">Live Demo</a>
            <a href="https://github.com/Bilalzakaria/BlockAugur" target="_blank" rel="noopener noreferrer" className="cta-button project-button secondary">Code</a>
          </div>
        </div>
      </div>
    </div>

    {/* Project 2: Project 4-Sight */}
    <div className="project">
      <div className="grid-container">
        <div className="img-container-project one">
          <img src="../img/project-4-sight.png" alt="" />
        </div>
        <div className="info-right">
          <div className="title">Project 4-Sight 🥼</div>
          <div className="project-info">
            <p>An advanced wearable device for the visually impaired, featuring a web interface for navigation. This was my senior capstone project, showcasing hardware integration and full-stack development.</p>
          </div>
          <div className="project-languages">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>Arduino</li>
            </ul>
          </div>
          <div className="links project-links">
            <a href="https://github.com/Bilalzakaria/4-Sight" target="_blank" rel="noopener noreferrer" className="cta-button project-button secondary">Code</a>
          </div>
        </div>
      </div>
    </div>

    {/* Project 3: EnergiSuite */}
    <div className="project">
      <div className="grid-container">
        <div className="img-container-project two"></div>
        <div className="info-right">
          <div className="title">EnergiSuite ⚡</div>
          <div className="project-info">
            <p>A Python-based UI bot that automates cryptocurrency arbitrage analysis by comparing prices across exchanges and identifying stablecoin differentials.</p>
          </div>
          <div className="project-languages">
            <ul>
              <li>Python</li>
              <li>CustomTkinter</li>
              <li>Botasaurus</li>
            </ul>
          </div>
          <div className="links project-links">
            <a href="https://github.com/Bilalzakaria/EnergiSuite" target="_blank" rel="noopener noreferrer" className="cta-button project-button secondary">Code</a>
          </div>
        </div>
      </div>
    </div>

    {/* Project 4: NRG Reaper */}
    <div className="project">
      <div className="grid-container">
        <div className="img-container-project three"></div>
        <div className="info-right">
          <div className="title">NRG Reaper 🚀</div>
          <div className="project-info">
            <p>A high-speed, command-line arbitrage bot that completes a full analysis and scrape of hundreds of cryptocurrencies in approximately 0.25 seconds.</p>
          </div>
          <div className="project-languages">
            <ul>
              <li>Python</li>
              <li>Selenium</li>
            </ul>
          </div>
          <div className="links project-links">
            <a href="https://github.com/Bilalzakaria/EnergiReaperReborn" target="_blank" rel="noopener noreferrer" className="cta-button project-button secondary">Code</a>
          </div>
        </div>
      </div>
    </div>

    {/* Project 5: Nemo The Duck Bot */}
    <div className="project">
      <div className="grid-container">
        <div className="img-container-project four"></div>
        <div className="info-right">
          <div className="title">Nemo The Duck Bot</div>
          <div className="project-info">
            <p>A 6-axis robotic arm system with a custom 10-button controller and GoPro mount, designed for precise and repeatable camera movements.</p>
          </div>
          <div className="project-languages">
            <ul>
              <li>Arduino</li>
            </ul>
          </div>
          <div className="links project-links">
            <a href="https://www.youtube.com/watch?v=4eQF6W8l1V0" target="_blank" rel="noopener noreferrer" className="cta-button project-button">Demo Video</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}