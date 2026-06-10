import { useState, useEffect, useRef } from "react";
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
    image: "/skin.webp",
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
    image: "/grocery.jpg",
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
    image: "/pet.jpg",
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
    image: "/baby.jpg",
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
    image: "/bagg.jpg",
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
    image: "/theme.jpg",
  },
];

const filters = ["All", "React", "JavaScript", "Backend"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const revealRefs = useRef([]);

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [filtered]);

  const addRef = (el, i) => { revealRefs.current[i] = el; };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <p className="projects-label reveal-item" ref={(el) => addRef(el, 0)} style={{ "--delay": "0s" }}>
          What I've Built
        </p>
        <h2 className="projects-title reveal-item" ref={(el) => addRef(el, 1)} style={{ "--delay": "0.1s" }}>
          Selected <span>Projects</span>
        </h2>
        <p className="projects-sub reveal-item" ref={(el) => addRef(el, 2)} style={{ "--delay": "0.2s" }}>
          Showcasing top projects from <span>30+ completed works</span>
        </p>

        <div className="filter-tabs reveal-item" ref={(el) => addRef(el, 3)} style={{ "--delay": "0.3s" }}>
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
            <div
              key={index}
              className="flip-card reveal-item"
              ref={(el) => addRef(el, 4 + index)}
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className="flip-card-inner">

                {/* ── FRONT ── */}
                <div className="flip-card-front project-card">

                  {/* Top accent bar */}
                  <div className="card-accent-bar" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}66)` }} />

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

                  {/* Glowing hover me text */}
                  <div className="card-hover-me">
                    <span className="hover-me-text" style={{ color: project.color, textShadow: `0 0 18px ${project.color}99, 0 0 40px ${project.color}55` }}>
                      ✦ HOVER ME ✦
                    </span>
                  </div>

                  {/* Hint bar */}
                  <div className="card-hint" style={{ background: `linear-gradient(90deg, ${project.color}33, ${project.color}11)`, borderTop: `1px solid ${project.color}44` }}>
                    <span>⟳</span> Hover to preview
                  </div>

                  <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${project.color}22, transparent 70%)` }} />
                </div>

                {/* ── BACK ── */}
                <div className="flip-card-back" style={{ borderColor: `${project.color}44` }}>
                  <div className="back-img-wrapper">
                    {/* Blurred bg */}
                    <img
                      src={project.image}
                      alt=""
                      className="back-img-blur"
                    />
                    {/* Sharp main image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="back-img"
                      onError={(e) => {
                        e.target.closest(".back-img-wrapper").style.display = "none";
                        e.target.closest(".back-img-wrapper").nextSibling.style.display = "flex";
                      }}
                    />
                  </div>
                  {/* Fallback if image missing */}
                  <div className="back-fallback" style={{ display: "none" }}>
                    <span style={{ fontSize: "48px" }}>{project.icon}</span>
                  </div>

                  {/* Buttons only — no title, no text */}
                  <div className="back-overlay">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="back-btn"
                      style={{ background: project.color }}
                    >
                      🔗 Click Me — Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="back-btn-ghost"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta reveal-item" ref={(el) => addRef(el, 12)} style={{ "--delay": "0.2s" }}>
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