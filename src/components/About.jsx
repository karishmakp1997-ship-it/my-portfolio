import "./About.css";

const highlights = [
  { icon: "💻", count: "50+", label: "Projects Built" },
  { icon: "⚛️", count: "5+",  label: "Tech Stacks" },
  { icon: "🏢", count: "2",   label: "Internships" },
  { icon: "📅", count: "9+",  label: "Months Experience" },
];

const techTags = [
  "React.js", "Node.js", "JavaScript", "Python",
  "Flask", "Django", "MongoDB", "MySQL",
  "REST APIs", "Git & GitHub",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Label */}
        <p className="about-label">Get To Know Me</p>
        <h2 className="about-title">About <span>Me</span></h2>

        <div className="about-grid">

          {/* ── Left: Text ── */}
          <div className="about-text">
            <p>
              Hey! I'm <strong>Karishma Priya</strong>, an aspiring Full Stack Developer
              based in <strong>Chennai, India</strong>. I'm passionate about turning ideas
              into real, working web applications — from pixel-perfect frontends to
              robust backend APIs.
            </p>
            <p>
              I'm currently completing my <span>Full Stack Developer Course (Expected May 2026)</span>,
              where I've built <span>50+ real-world projects</span> covering frontend, backend,
              databases, and API integrations. I've also completed internships in Full Stack
              Development and Digital Marketing.
            </p>
            <p>
              My focus is on writing <strong>clean, scalable code</strong> and building
              applications that actually solve problems. I love learning new technologies
              and I'm always working on something new.
            </p>

            {/* Tech tags */}
            <div className="tech-tags">
              {techTags.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* ── Right: Stats ── */}
          <div className="about-right">
            <div className="about-stats">
              {highlights.map((item) => (
                <div key={item.label} className="stat-card">
                  <span className="stat-icon">{item.icon}</span>
                  <h3>{item.count}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            {/* Currently learning badge */}
            <div className="learning-badge">
              <span className="pulse-dot" />
              <span>Currently mastering: <strong>DSA & System Design</strong></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}