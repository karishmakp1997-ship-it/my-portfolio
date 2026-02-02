import "./Skills.css";

const skills = [
  "React", "JavaScript", "HTML5", "CSS3",
  "Node.js", "Express.js", "MongoDB",
  "REST APIs", "JWT Auth", "Git & GitHub"
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
