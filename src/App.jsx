import './App.css'

const projects = [
  {
    number: '01',
    name: 'Shopperzz',
    type: 'Commerce · POS · Reporting',
    stack: ['Laravel', 'Vue.js'],
    description:
      'A commerce and business management platform focused on flexible inventory and actionable reporting.',
    highlights: [
      'Built multi-attribute product variations and multi-option selection for inventory and POS search.',
      'Added email verification, Google authentication, and daily, weekly, monthly, financial, and recurring reports.',
      'Integrated an AI chat model into the admin experience.',
    ],
  },
  {
    number: '02',
    name: 'Linkintro',
    type: 'SaaS · Digital identity',
    stack: ['Laravel', 'React'],
    description:
      'A SaaS bio-link and digital business card platform with a modern React dashboard.',
    highlights: [
      'Developed dynamic subdomain and custom-domain mapping.',
      'Implemented subscription plans with recurring billing.',
      'Built the React-based dashboard for managing a digital presence.',
    ],
  },
  {
    number: '03',
    name: 'Taskify',
    type: 'Workforce · Activity tracking',
    stack: ['Laravel', 'React', 'Socket.IO'],
    description:
      'An employee task and activity tracking application with reporting for administrators.',
    highlights: [
      'Implemented real-time features with WebSockets and Socket.IO, including system screenshot support.',
      'Built employee activity tracking and API-driven login and registration pages.',
      'Added employee time and attendance reports for the admin dashboard.',
    ],
  },
]

const experience = [
  {
    company: 'Codiant Software Pvt. Ltd.',
    role: 'Software Engineer',
    dates: 'Sep 2025 — Aug 2026',
    highlights: [
      'Built and maintained Laravel and Vue.js applications with clean, reusable, optimized code.',
      'Integrated Stripe, Razorpay, PayPal, Firebase, Twilio, Google Maps, and Google Calendar.',
      'Delivered real-time features with Laravel Pusher, Socket.IO, WebSockets, and webhooks.',
      'Developed subscription payments, recurring billing, and RESTful APIs for web and mobile.',
    ],
  },
  {
    company: 'Technorizen Software Pvt. Ltd.',
    role: 'Laravel / CodeIgniter Developer',
    dates: 'Mar 2024 — Aug 2025',
    highlights: [
      'Worked on multiple role-based login systems.',
      'Independently handled more than 10 projects.',
      'Built REST APIs across more than 10 projects.',
      'Implemented Firebase notifications for web and mobile apps.',
    ],
  },
  {
    company: 'SunShine IT Solution Pvt. Ltd.',
    role: 'Laravel / CodeIgniter Developer',
    dates: 'Jul 2023 — Mar 2024',
    highlights: [
      'Implemented email verification and other activity email workflows.',
      'Integrated payment gateways across multiple projects.',
      'Set up themes and worked on frontend design.',
      'Implemented new functionality for SaaS-based projects.',
    ],
  },
]

const skills = [
  {
    label: 'Frontend',
    items: ['Vue.js', 'Angular.js', 'React.js', 'Next.js', 'Livewire', 'JavaScript', 'HTML', 'CSS', 'OOP'],
  },
  {
    label: 'Backend',
    items: ['PHP', 'Laravel', 'Node.js', 'Python', 'CodeIgniter', 'Symfony', 'Django', 'FastAPI', 'Drupal'],
  },
  {
    label: 'Data & APIs',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'OpenDB', 'Redis', 'SQLite', 'SQL', 'REST APIs'],
  },
  {
    label: 'Tools & platforms',
    items: [
      'Git',
      'GitLab',
      'CI/CD',
      'Docker',
      'cPanel',
      'AWS',
      'Jira',
      'FileZilla',
      'Postman',
      'Twilio',
      'Android (Java)',
      'Payment gateways',
      'Firebase APIs',
      'Google APIs',
    ],
  },
  {
    label: 'AI tools',
    items: ['Cursor', 'Antigravity', 'OpenCode', 'Codex', 'Copilot', 'MCP', 'Agent Skills'],
  },
]

const education = [
  { qualification: 'Master of Computer Applications', school: 'SAGE University, Indore', dates: '2023 — 2025' },
  { qualification: 'Bachelor of Computer Applications', school: 'Govt. Holkar Science College, Indore', dates: '2019 — 2022' },
  { qualification: 'Higher Secondary', school: 'New Pink Flower, Indore', dates: '2018 — 2019' },
  { qualification: 'High School', school: 'New Pink Flower, Indore', dates: '2016 — 2017' },
]

const certificates = [
  '6-month internship certificate',
  'JavaScript Algorithms and Data Structures — freeCodeCamp',
  'Front End Development Libraries — freeCodeCamp',
  'PHP Certificate — SoloLearn',
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 20 20" fill="none">
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function Eyebrow({ children, muted = false }) {
  return <p className={`eyebrow${muted ? ' eyebrow-muted' : ''}`}>{children}</p>
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home">
          Portfolio
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-home" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <h1>Hi, I&apos;m <span>Anurag Bagdi</span></h1>
            <h2 className="hero-role">Full Stack Developer</h2>
            <p className="hero-description">
              I build reliable web applications and thoughtful digital
              experiences. With 3.5+ years of experience, I work across Laravel, Node.js, Python, and
              modern frontend frameworks like React and Vue, APIs, and real-time features.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:anuragbagdi6635@gmail.com">
                Hire Me
              </a>
              <a className="button button-secondary" href="#projects">
                View Work
              </a>
            </div>
            <div className="hero-socials" aria-label="Contact and social links">
              <a href="https://www.linkedin.com/in/anurag-bagdi-40693627b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href="mailto:anuragbagdi6635@gmail.com" aria-label="Email">
                @
              </a>
              <a href="tel:+917987560718" aria-label="Call Anurag">
                ☎
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <img src="/anurag-profile.jpe" alt="Portrait of Anurag Bagdi" />
          </div>
        </section>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-content">
            <Eyebrow muted>A LITTLE ABOUT ME</Eyebrow>
            <div className="intro-copy">
              <h2>Solution-oriented, collaborative, and focused on the details.</h2>
              <div className="intro-aside">
                <p>
                  With 3.5+ years in software development, I’ve contributed to
                  SaaS platforms, web and mobile APIs, payment integrations,
                  reporting, and real-time features. I value clear communication
                  and technical documentation as much as clean, maintainable code.
                </p>
                <a className="intro-link" href="#experience">
                  See my experience <ArrowIcon diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <Eyebrow>SELECTED WORK</Eyebrow>
              <h2>Projects I’ve worked on.</h2>
            </div>
            <p className="section-heading-note">A few examples across commerce, SaaS, and workforce tools.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-title-row">
                    <div>
                      <p className="project-type">{project.type}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <div className="project-stack">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-band" id="experience">
          <div className="section-wrap experience-content">
            <div className="section-heading experience-heading">
              <div>
                <Eyebrow muted>PROFESSIONAL EXPERIENCE</Eyebrow>
                <h2>Where I’ve contributed.</h2>
              </div>
              <p className="section-heading-note">3.5+ years building and maintaining software.</p>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-entry" key={job.company}>
                  <div className="timeline-date">{job.dates}</div>
                  <div className="timeline-detail">
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                    <ul>
                      {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-heading">
            <div>
              <Eyebrow>TOOLS OF THE TRADE</Eyebrow>
              <h2>My technical toolkit.</h2>
            </div>
            <p className="section-heading-note">Technologies and platforms from my experience.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="education-band" id="education">
          <div className="section-wrap education-content">
            <div className="education-column">
              <Eyebrow>EDUCATION</Eyebrow>
              <h2>Learning, year by year.</h2>
              <div className="education-list">
                {education.map((item) => (
                  <article className="education-item" key={item.qualification}>
                    <div>
                      <h3>{item.qualification}</h3>
                      <p>{item.school}</p>
                    </div>
                    <span>{item.dates}</span>
                  </article>
                ))}
              </div>
            </div>
            <div className="certificates-column">
              <Eyebrow>CERTIFICATES & COURSES</Eyebrow>
              <h2>Additional learning.</h2>
              <ul className="certificate-list">
                {certificates.map((certificate) => (
                  <li key={certificate}>
                    <span className="certificate-check" aria-hidden="true">↗</span>
                    {certificate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-content">
            <div>
              <Eyebrow muted>LET’S CONNECT</Eyebrow>
              <h2>Have a project in mind?</h2>
              <p className="contact-copy">Get in touch and let’s talk about what you’re building.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:anuragbagdi6635@gmail.com">
                <span className="contact-label">EMAIL</span>
                <span>anuragbagdi6635@gmail.com</span>
                <ArrowIcon diagonal />
              </a>
              <a href="tel:+917987560718">
                <span className="contact-label">PHONE</span>
                <span>+91 79875 60718</span>
                <ArrowIcon diagonal />
              </a>
              <a href="tel:+917566352552">
                <span className="contact-label">PHONE</span>
                <span>+91 75663 52552</span>
                <ArrowIcon diagonal />
              </a>
              <div className="contact-location">
                <span className="contact-label">LOCATION</span>
                <span>SEC 63, Noida</span>
                <span aria-hidden="true" />
              </div>
              <a href="https://www.linkedin.com/in/anurag-bagdi-40693627b/" target="_blank" rel="noreferrer">
                <span className="contact-label">LINKEDIN</span>
                <span>Anurag Bagdi</span>
                <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">A</span>
          <span>ANURAG BAGDI</span>
        </a>
        <p>Full Stack Developer <span>·</span> SEC 63, Noida</p>
        <a className="back-to-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
