import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Coffee Shop Website",
    tech: ["React.js", "HTML", "CSS"],
    category: "React",
    description: "Responsive coffee shop app with reusable React components, product listing, and modern UI design.",
    live: "https://coffeeshop-ivory.vercel.app/",
    github: "https://github.com/karishmakp1997-ship-it/coffeeshop",
    color: "#7f7cff",
    icon: "☕",
  },
  {
    title: "Blink-It Clone",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    description: "Functional Blinkit UI clone with dynamic text effects, smooth transitions, and interactive DOM manipulation.",
    live: "https://blinks-two.vercel.app/",
    github: "https://github.com/karishmakp1997-ship-it",
    color: "#f7c948",
    icon: "⚡",
  },
  {
    title: "Tourist Page Booking",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    description: "Tourism destination booking page with interactive UI elements, destination cards, and booking flow.",
    live: "https://tourist-red.vercel.app/",
    github: "https://github.com/karishmakp1997-ship-it",
    color: "#4ecdc4",
    icon: "✈️",
  },
  {
    title: "Fit Oasis – Gym Website",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    description: "Interactive gym services site with membership plans, trainer profiles, and responsive Flexbox/Grid layout.",
    live: "#",
    github: "https://github.com/karishmakp1997-ship-it",
    color: "#ff6b6b",
    icon: "💪",
  },
  {
    title: "REST API – Task Manager",
    tech: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
    description: "Full CRUD REST API for task management with JWT authentication, route protection, and MongoDB integration.",
    live: "#",
    github: "https://github.com/karishmakp1997-ship-it",
    color: "#68a063",
    icon: "🗂️",
  },
  {
    title: "Portfolio Website",
    tech: ["React.js", "CSS", "Vercel"],
    category: "React",
    description: "Personal developer portfolio with smooth scroll, typing animation, project showcase, and contact section.",
    live: "https://my-portfolio-silk-six-23.vercel.app/",
    github: "https://github.com/karishmakp1997-ship-it",
    color: "#b983ff",
    icon: "🚀",
  },
];

const filters = ["All", "React", "JavaScript", "Backend"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* Header */}
        <p className="projects-label">What I've Built</p>
        <h2 className="projects-title">Selected <span>Projects</span></h2>
        <p className="projects-sub">
          Showcasing top projects from <span>50+ completed works</span>
        </p>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, index) => (
            <div key={index} className="project-card">

              {/* Top color bar + icon */}
              <div className="card-header" style={{ background: `${project.color}18`, borderBottom: `1px solid ${project.color}33` }}>
                <span className="card-icon">{project.icon}</span>
                <div className="card-tech-pills">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill" style={{ borderColor: `${project.color}55`, color: project.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
              </div>

              {/* Links */}
              <div className="card-footer">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link primary-link"
                  style={{ background: `linear-gradient(135deg, ${project.color}cc, ${project.color})` }}
                >
                  🔗 Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link secondary-link"
                >
                  GitHub →
                </a>
              </div>

              {/* Hover glow */}
              <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${project.color}22, transparent 70%)` }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="projects-cta">
          <p>Want to see more?</p>
          <a
            href="https://github.com/karishmakp1997-ship-it"
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            View All on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}