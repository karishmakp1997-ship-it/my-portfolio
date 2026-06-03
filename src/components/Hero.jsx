import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import profileImg from "../assets/pro2.jpeg";
import "./Hero.css";

const roles = [
  "Full Stack Developer",
  "React.js Developer",
  "Node.js Developer",
  "Python Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">

        {/* ── Left Content ── */}
        <div className="hero-content">
          <p className="hero-greeting">👋 Hello, I'm</p>

          <h1>
            <span className="hero-name">KARISHMA</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="hero-role">{displayed}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-desc">
            I build scalable, performance-driven web applications
            using modern frontend and backend technologies.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <h2>50+</h2>
              <span>Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <h2>9+</h2>
              <span>Months Hands-On</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <h2>5+</h2>
              <span>Tech Stacks</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Link
              to="projects"
              smooth={true}
              duration={700}
              offset={-100}
              className="btn-primary"
            >
              View Work
            </Link>

            <a
              href="/Karishmacv.pdf"
              download="Karishmacv.pdf"
              className="btn-resume"
            >
              ⬇ Download Resume
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={700}
              offset={-100}
              className="btn-secondary"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* ── Right Profile Image ── */}
        <div className="hero-image-wrapper">
          <div className="hero-ring ring-3" />
          <div className="hero-ring ring-2" />
          <div className="hero-ring ring-1" />
          <div className="hero-image">
            <img src={profileImg} alt="Karishma Priya - Full Stack Developer" />
          </div>
          <div className="hero-badge badge-top"><span>⚛️</span> React.js</div>
          <div className="hero-badge badge-bottom"><span>🟢</span> Node.js</div>
        </div>

      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot" />
      </div>
    </section>
  );
}