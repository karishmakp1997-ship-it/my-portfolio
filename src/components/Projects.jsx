// src/components/Projects.jsx
import "./Projects.css";

const projects = [
  {
    title: "Coffee Shop",
    tech: "React",
    img: "https://media.gettyimages.com/id/588575320/pt/foto/coffeeshop-in-amsterdam-netherlands.jpg?s=612x612&w=gi&k=20&c=_rnMAQ5ZDNm8OtF4vvmmKMBMlvv-k6zyxP3QAVEklGQ=",
    live: "https://coffeeshop-ivory.vercel.app/",
    github: "https://github.com/karishmakp1997-ship-it/coffeeshop",
  },
  {
    title: "Blink-It Application",
    tech: "HTML, CSS, JavaScript",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbVUl7HKZ7FA5Y1ji0j_0zLJeHJQYuW5VSw&s",
    live: "https://blinks-two.vercel.app/",
    github: "https://github.com/example",
  },
  {
    title: "Tourist Page Booking",
    tech: "JavaScript",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    live: "https://tourist-red.vercel.app/",
    github: "https://github.com/example",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Selected Projects</h2>
      <p className="projects-sub">
        Showcasing top projects from <span>50+ completed works</span>
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} className="project-img" />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
