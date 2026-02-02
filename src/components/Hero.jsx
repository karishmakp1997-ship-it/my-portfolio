import { Link } from "react-scroll";
import profileImg from "../assets/profile.avif";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        {/* Left Text */}
        <div className="hero-content">
          <h1>
            Hello, I’m <br />
            <span>KARISHMA</span>
          </h1>

          <h3>Full Stack Developer</h3>

          <p>
            I build scalable, performance-driven web applications
            using modern frontend and backend technologies.
          </p>

          <div className="hero-stats">
            <div>
              <h2>50+</h2>
              <span>Projects Built</span>
            </div>
            <div>
              <h2>6+</h2>
              <span>Months Hands-On</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Link
              to="projects"
              smooth={true}
              duration={700}
              offset={-100}
              className="primary"
            >
              View Work
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={700}
              offset={-100}
              className="secondary"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="hero-image">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
