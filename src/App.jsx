
import { useEffect } from 'react'

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Code2,
  Server,
  Database,
  Wrench,
  ExternalLink
} from 'lucide-react'

import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

// SKILLS AND TECHNOLOGIES

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['Java', 'Python', 'JavaScript', 'SQL']
  },
  {
    title: 'Core Java',
    icon: Code2,
    items: [
      'OOP',
      'Collections Framework',
      'Exception Handling',
      'Multithreading',
      'Java 8 Streams',
      'DSA'
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    items: [
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'Spring Security',
      'REST APIs'
    ]
  },
  {
    title: 'Microservices & Messaging',
    icon: Server,
    items: [
      'Microservices Architecture',
      'Apache Kafka'
    ]
  },
  {
    title: 'Database Management',
    icon: Database,
    items: [
      'MySQL',
      'PostgreSQL',
      'MongoDB'
    ]
  },
  {
    title: 'Frontend Development',
    icon: Code2,
    items: [
      'HTML5',
      'CSS3',
      'React.js',
      'Angular'
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: Wrench,
    items: [
      'Docker',
      'Kubernetes',
      'AWS'
    ]
  },
  {
    title: 'Software Development',
    icon: Wrench,
    items: [
      'SDLC',
      'Object-Oriented Design',
      'Data Structures & Algorithms',
      'Design Patterns',
      'Debugging',
      'Unit Testing',
      'Git Version Control'
    ]
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    items: [
      'Git',
      'GitHub',
      'Maven',
      'Postman',
      'Eclipse',
      'VS Code'
    ]
  }
]


function App() {

  // SCROLL ANIMATION

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])


  return (
    <>
      <Navbar />

      <main>

        {/* HERO SECTION */}

        <section className="hero container" id="home">

          <div className="hero-copy">

            <div className="availability">
              <span className="availability-dot" />
              OPEN TO ENTRY-LEVEL OPPORTUNITIES
            </div>

            <p className="hero-kicker">Hello, I'm</p>

            <h1>
              Prafull <span>Sutar.</span>
            </h1>

            <h2>
              Software Developer
              <span> | Full Stack Java Developer</span>
            </h2>

            <p className="hero-description">
              I am a passionate Software Developer specializing in Full Stack
              Java Development. I build scalable web applications using Java,
              Spring Boot, Hibernate, React, and MySQL, with an interest in
              microservices, Apache Kafka, Docker, and Kubernetes. I enjoy
              problem-solving, writing clean code, and developing reliable
              software solutions.
            </p>

            <div className="hero-buttons">

              <a className="button button-primary" href="#projects">
                Explore my work
                <ArrowUpRight size={17} />
              </a>

              <a
                className="button button-secondary"
                href="/resume.pdf"
                download
              >
                <Download size={17} />
                Download resume
              </a>

            </div>

            <div className="hero-socials">

              <a
                href="https://github.com/prafullsCode"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>

              <a
                href="mailto:your.email@example.com"
                aria-label="Email"
              >
                <Mail />
              </a>

              <span className="social-line" />

              <span className="location">
                <MapPin size={14} />
                Pune, Maharashtra,India
              </span>

            </div>

          </div>


          {/* PROFILE IMAGE SECTION */}

          <div className="hero-visual">

            <div className="visual-glow" />

            <div className="photo-frame">

              <img
                src="/profile.jpg"
                alt="Prafull Sutar profile portrait"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'grid'
                }}
              />

              <div className="photo-fallback">
                PS
              </div>

              <div className="photo-caption">
                <span className="caption-dot" />
                Building. Learning. Improving.
              </div>

            </div>

            <div className="float-card float-card-top">
              <span className="float-icon">☕</span>

              <span>
                <b>Always learning</b>
                <small>One step at a time</small>
              </span>
            </div>

            <div className="float-card float-card-bottom">

              <Code2 size={19} />

              <span>
                <b>Full Stack</b>
                <small>Java Developer</small>
              </span>

            </div>

            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

          </div>

          <a href="#about" className="scroll-cue">
            <ArrowDown size={15} />
            SCROLL TO EXPLORE
          </a>

        </section>


        {/* ABOUT SECTION */}

        <section className="about-section section-pad" id="about">

          <div className="container about-grid reveal">

            <div>

              <SectionHeading
                eyebrow="A LITTLE ABOUT ME"
                title={
                  <>
                    Building useful things,
                    <span> one line at a time.</span>
                  </>
                }
              />

            </div>

            <div className="about-copy">

              <p>
                I'm an aspiring Software Developer specializing in Full Stack
                Java Development. I focus on building reliable applications
                using Java, Spring Boot, Hibernate, Spring Data JPA, REST APIs,
                and modern frontend technologies.
              </p>

              <p>
                I enjoy developing end-to-end software solutions, working
                with databases, designing REST APIs, and exploring modern
                technologies like Microservices, Apache Kafka, Docker,
                and Kubernetes.
              </p>

              <a href="#contact" className="text-link">
                Let's connect
                <ArrowRight size={16} />
              </a>

            </div>

          </div>


          <div className="container stats-row reveal">

            <div>
              <strong>Java</strong>
              <span>Core development focus</span>
            </div>

            <div>
              <strong>Full Stack</strong>
              <span>Frontend + backend</span>
            </div>

            <div>
              <strong>MySQL</strong>
              <span>Relational database</span>
            </div>

          </div>

        </section>


        {/* SKILLS SECTION */}

        <section className="skills-section section-pad" id="skills">

          <div className="container">

            <SectionHeading
              eyebrow="MY TOOLKIT"
              title={
                <>
                  Skills &
                  <span> technologies.</span>
                </>
              }
              text="The technologies and software development practices I use and continue to strengthen through hands-on projects and practice."
            />

            <div className="skills-grid">

              {skillGroups.map(({ title, icon: Icon, items }) => (

                <article
                  className="skill-card reveal"
                  key={title}
                >

                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{title}</h3>

                  <div className="tag-list">

                    {items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* PROJECTS SECTION */}

        <section className="projects-section section-pad" id="projects">

          <div className="container">

            <div className="projects-heading">

              <SectionHeading
                eyebrow="SELECTED WORK"
                title={
                  <>
                    Projects I've
                    <span> worked on.</span>
                  </>
                }
                text="A selection of academic, practice, and full-stack projects demonstrating my development interests."
              />

              <a
                className="text-link github-all"
                href="https://github.com/prafullsCode"
                target="_blank"
                rel="noreferrer"
              >
                More on GitHub
                <ArrowUpRight size={16} />
              </a>

            </div>


            <div className="projects-grid">

              {projects.map((project) => (

                <div className="reveal" key={project.number}>
                  <ProjectCard project={project} />
                </div>

              ))}

            </div>

            <p className="project-note">
              Project descriptions summarize the work discussed. Update each
              card with the exact implemented features, repository URL,
              and live demo before publishing.
            </p>

          </div>

        </section>


        {/* DEVELOPMENT APPROACH SECTION */}

        <section className="approach-section section-pad">

          <div className="container approach-box reveal">

            <div>

              <span className="eyebrow">
                HOW I APPROACH DEVELOPMENT
              </span>

              <h2>
                Curious mindset.
                <br />
                <span>Practical solutions.</span>
              </h2>

            </div>


            <div className="approach-points">

              <div>
                <span>01</span>

                <p>
                  <b>Understand the problem</b>
                  <small>
                    Break requirements into clear, manageable tasks.
                  </small>
                </p>
              </div>

              <div>
                <span>02</span>

                <p>
                  <b>Build with purpose</b>
                  <small>
                    Write maintainable code and connect the application layers.
                  </small>
                </p>
              </div>

              <div>
                <span>03</span>

                <p>
                  <b>Test and improve</b>
                  <small>
                    Debug, learn from feedback, and keep improving.
                  </small>
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* CONTACT SECTION */}

        <section className="contact-section section-pad" id="contact">

          <div className="container contact-grid reveal">

            <div>

              <SectionHeading
                eyebrow="GET IN TOUCH"
                title={
                  <>
                    Have an opportunity or
                    <span> an idea?</span>
                  </>
                }
                text="I'm interested in entry-level Software Developer and Full Stack Java Developer opportunities. Feel free to connect."
              />

            </div>


            <div className="contact-card">

              <a href="mailto:your.email@example.com">

                <span className="contact-icon">
                  <Mail />
                </span>

                <span>
                  <small>Email me</small>
                  <b>prafullsutar2003@gmail.com</b>
                </span>

                <ArrowUpRight />

              </a>


              <a
                href="https://github.com/prafullsCode"
                target="_blank"
                rel="noreferrer"
              >

                <span className="contact-icon">
                  <Github />
                </span>

                <span>
                  <small>GitHub</small>
                  <b>github.com/prafullsCode</b>
                </span>

                <ExternalLink />

              </a>


              <a
                href="https://www.linkedin.com/in/prafullsutar/"
                target="_blank"
                rel="noreferrer"
              >

                <span className="contact-icon">
                  <Linkedin />
                </span>

                <span>
                  <small>LinkedIn</small>
                  <b>linkedin.com/in/prafullsutar</b>
                </span>

                <ExternalLink />

              </a>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="footer">

        <div className="container footer-inner">

          <a className="brand" href="#home">
            PRAFULL<span className="brand-dot">.</span>
          </a>

          <span>
            Designed & built by Prafull Sutar · {new Date().getFullYear()}
          </span>

          <a href="#home" className="back-top">
            Back to top ↑
          </a>

        </div>

      </footer>

    </>
  )
}

export default App
