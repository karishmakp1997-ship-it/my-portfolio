import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Glowify – Cosmetic Store",
    tech: ["Python", "Django", "HTML", "CSS"],
    category: "Backend",
    description: "Full stack cosmetic e-commerce site with product listing, banner management, and dynamic pages built with Django templates.",
    live: "https://cosmetic-fekk.onrender.com/",
    github: "https://github.com/karishmakp1997-ship-it/cosmetic",
    color: "#fd79a8",
    icon: "💄",
  },
  {
    title: "Vetrimart – E-Commerce Store",
    tech: ["Python", "Django", "HTML", "CSS"],
    category: "Backend",
    description: "Full stack e-commerce platform with product management, cart, orders, blog and newsletter built with Django.",
    live: "https://vetrimart-r4zx.onrender.com/",
    github: "https://github.com/karishmakp1997-ship-it/vetrimart",
    color: "#00b894",
    icon: "🛒",
  },
  {
    title: "Petloosa – Pet Shop",
    tech: ["React.js", "HTML", "CSS"],
    category: "React",
    description: "Responsive pet shop website with product showcase, pet categories, and modern UI built with React.js.",
    live: "https://pet-shop-one-gamma.vercel.app/",
    github: "https://github.com/karishmakp1997-ship-it/pet-shop",
    color: "#a29bfe",
    icon: "🐾",
  },
  {
    title: "Baby Zone – Baby Products",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    description: "Responsive baby products website with product showcase, clean UI and smooth navigation.",
    live: "https://karishmakp1997-ship-it.github.io/baby-website/index.html",
    github: "https://github.com/karishmakp1997-ship-it/baby-website",
    color: "#74b9ff",
    icon: "👶",
  },
  {
    title: "HandBag Store",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    description: "Stylish handbag e-commerce website with product showcase and elegant UI design.",
    live: "https://handbag-website.vercel.app/",
    github: "https://github.com/karishmakp1997-ship-it",
    color: "#fd79a8",
    icon: "👜",
  },
  {
    title: "ThemeMarket",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    description: "Theme marketplace website with clean layout and smooth browsing experience.",
    live: "https://karishmakp1997-ship-it.github.io/Market-themee/",
    github: "https://github.com/karishmakp1997-ship-it/Market-themee",
    color: "#fdcb6e",
    icon: "🎨",
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

        <p className="projects-label">What I've Built</p>
        <h2 className="projects-title">Selected <span>Projects</span></h2>
        <p className="projects-sub">
          Showcasing top 5 projects from <span>30+ completed works</span>
        </p>

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

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <div key={index} className="project-card">
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

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
              </div>

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

              <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${project.color}22, transparent 70%)` }} />
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see all 30+ projects?</p>
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