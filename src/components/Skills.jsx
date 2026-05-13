import { useState } from "react";
import "./Skills.css";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",      level: 95 },
      { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",        level: 90 },
      { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
      { name: "React.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",      level: 85 },
      { name: "Bootstrap",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 100 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",    level: 75 },
      { name: "Express.js",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",  level: 75 },
      { name: "Python",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",    level: 95 },
      { name: "Flask",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",      level: 90 },
      { name: "Django",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",       level: 95 },
    ],
  },
  {
    category: "Database & Tools",
    icon: "🗄️",
    skills: [
      { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",  level: 80 },
      { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",      level: 90 },
      { name: "GitHub",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",    level: 100 },
      { name: "VS Code",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",    level: 95 },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const current = skillCategories.find((c) => c.category === activeTab);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Header */}
        <p className="skills-label">What I Work With</p>
        <h2 className="skills-title">My <span>Skills</span></h2>

        {/* Tab switcher */}
        <div className="skills-tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              className={`skills-tab ${activeTab === cat.category ? "active" : ""}`}
              onClick={() => setActiveTab(cat.category)}
            >
              <span>{cat.icon}</span> {cat.category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {current.skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <span className="skill-name">{skill.name}</span>

              {/* Proficiency bar */}
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--fill": `${skill.level}%` }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>

        {/* Bottom: extra tools row */}
        <div className="extra-tools">
          <p className="extra-label">Also familiar with</p>
          <div className="extra-pills">
            {["REST APIs", "JWT Auth", "Postman", "Vercel", "npm", "Responsive Design", "MVC Pattern"].map((t) => (
              <span key={t} className="extra-pill">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}