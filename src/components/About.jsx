import { useEffect, useRef } from "react";
import "./About.css";

const highlights = [
  { icon: "💻", count: "50+", label: "Projects Built" },
  { icon: "⚛️", count: "5+",  label: "Tech Stacks" },
  { icon: "🏢", count: "3+",   label: "Months Internships" },
  { icon: "📅", count: "10",  label: "Months Experience" },
];

const techTags = [
  "React.js", "Node.js", "JavaScript", "Python",
  "Flask", "Django", "MongoDB", "MySQL",
  "REST APIs", "Git & GitHub",
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
              Hey! I'm <strong>Karishma Priya</strong>, an aspiring Full Stack Developer
              based in <strong>Chennai, India</strong>. I'm passionate about turning ideas
              into real, working web applications — from pixel-perfect frontends to
              robust backend APIs.
            </p>
            <p className="reveal-item" ref={(el) => addRef(el, 3)} style={{ "--delay": "0.3s" }}>
              I'm currently completing my <span>Full Stack Developer Course (Expected May 2026)</span>,
              where I've built <span>50+ real-world projects</span> covering frontend, backend,
              databases, and API integrations. I've also completed internships in Full Stack
              Development and Digital Marketing.
            </p>
            <p className="reveal-item" ref={(el) => addRef(el, 4)} style={{ "--delay": "0.4s" }}>
              My focus is on writing <strong>clean, scalable code</strong> and building
              applications that actually solve problems. I love learning new technologies
              and I'm always working on something new.
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
              <span>Currently Exploring: <strong>DSA & REST API Best Practices</strong></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}