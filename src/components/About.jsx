import { useEffect, useRef } from "react";
import "./About.css";

const highlights = [
  { icon: "💻", count: "10+", label: "Projects Built" },
  { icon: "⚛️", count: "5+",  label: "Tech Stacks" },
  { icon: "🏢", count: "6+",   label: "Months Internships" },
  { icon: "📅", count: "10",  label: "Months Experience" },
];

const techTags = [
  "React.js", "Node.js", "Nest.js", "JavaScript", "Python",
  "Flask", "Django", "MongoDB", "MySQL", "PostgreSQL",
  "REST APIs", "Git & GitHub", "Render",
];

export default function About() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target); // once only
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Helper to assign refs with delay index
  const addRef = (el, index) => {
    revealRefs.current[index] = el;
  };

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Label */}
        <p className="about-label reveal-item" ref={(el) => addRef(el, 0)} style={{ "--delay": "0s" }}>
          Get To Know Me
        </p>

        {/* Title */}
        <h2 className="about-title reveal-item" ref={(el) => addRef(el, 1)} style={{ "--delay": "0.1s" }}>
          About <span>Me</span>
        </h2>

        <div className="about-grid">

          {/* ── Left: Text ── */}
          <div className="about-text">
            <p className="reveal-item" ref={(el) => addRef(el, 2)} style={{ "--delay": "0.2s" }}>
              Hey! I'm <strong>Karishma Priya</strong>, a Full Stack Developer
              based in <strong>Chennai, India</strong>. I completed my Python
              Full Stack Developer training and internship, and I currently work
              as a <span>Junior Software Developer (Traineeship)</span>, building
              and shipping full-stack features on live client projects with
              React.js, Django REST Framework, and PostgreSQL.
            </p>
            <p className="reveal-item" ref={(el) => addRef(el, 3)} style={{ "--delay": "0.3s" }}>
              Along the way I've built <span>10+ real-world projects</span> across
              frontend, backend, databases, and API integrations — including
              features powered by Generative AI. I'm learning something new about
              AI almost every day, going beyond just using AI tools to actually
              understanding how they work: <strong>LLMs, RAG pipelines, LangChain</strong>,
              and how to build AI-powered features into production applications.
            </p>
            <p className="reveal-item" ref={(el) => addRef(el, 4)} style={{ "--delay": "0.4s" }}>
              What drives me is genuine curiosity — I love taking an idea and
              turning it into something people can actually use. Whether it's a
              clean React interface, a well-structured Django API, or an
              AI-assisted feature, I care about writing{" "}
              <strong>code that works and scales</strong>, and I'm always pushing
              myself to pick up the next tool, framework, or technique.
            </p>

            {/* Tech tags */}
            <div className="tech-tags reveal-item" ref={(el) => addRef(el, 5)} style={{ "--delay": "0.5s" }}>
              {techTags.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* ── Right: Stats ── */}
          <div className="about-right">
            <div className="about-stats">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className="stat-card reveal-item"
                  ref={(el) => addRef(el, 6 + i)}
                  style={{ "--delay": `${0.2 + i * 0.1}s` }}
                >
                  <span className="stat-icon">{item.icon}</span>
                  <h3>{item.count}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            {/* Currently learning badge */}
            <div
              className="learning-badge reveal-item"
              ref={(el) => addRef(el, 10)}
              style={{ "--delay": "0.6s" }}
            >
              <span className="pulse-dot" />
              <span>Currently Exploring: <strong>LLMs, RAG & LangChain</strong></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}