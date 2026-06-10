import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import profileImg from "../assets/pro2.jpeg";
import "./Hero.css";

const roles = [
  "Full Stack Developer",
  "React.js Developer",
  "Fronrend Developer",
  "Web Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef(null);
  const hasHovered = useRef(false);
  const autoAnimDone = useRef(false);

  // Typing effect
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

  // Mouse tilt effect on image
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const handleMove = (e) => {
      if (hasHovered.current) return; // already hovered — no tilt
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 15;
      const rotateY = (x / rect.width) * 15;
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };
    const handleLeave = () => {
      if (hasHovered.current) return; // already hovered — stay straight
      el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Touch drag tilt effect (mobile)
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const handleTouchMove = (e) => {
      if (hasHovered.current) return;
      const touch = e.touches[0];
      const rect = el.getBoundingClientRect();
      const x = touch.clientX - rect.left - rect.width / 2;
      const y = touch.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 15;
      const rotateY = (x / rect.width) * 15;
      el.style.transition = "transform 0.1s ease";
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };
    const handleTouchEnd = () => {
      if (hasHovered.current) return;
      el.style.transition = "transform 0.4s ease";
      el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };
    el.addEventListener("touchmove", handleTouchMove, { passive: true });
    el.addEventListener("touchend", handleTouchEnd);
    return () => {
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Auto animate once on mobile (page load)
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile || autoAnimDone.current) return;
    const el = imgRef.current;
    if (!el) return;
    autoAnimDone.current = true;
    // Wait 800ms, tilt once, then come back straight
    const t1 = setTimeout(() => {
      el.style.transition = "transform 0.6s ease";
      el.style.transform = `perspective(800px) rotateX(-8deg) rotateY(12deg) scale(1.04)`;
    }, 800);
    const t2 = setTimeout(() => {
      el.style.transition = "transform 0.6s ease";
      el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
    }, 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Purple glow bg */}
      <div className="hero-glow-bg" />

      <div className="hero-inner">
        {/* ── Left Content ── */}
        <div className="hero-content">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1>
            <span className="hero-name">KARISHMA</span>
          </h1>
          <div className="hero-role-wrapper">
            <div className="hero-bg-text">HI</div>
            <span className="hero-role">{displayed}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-desc">
            I build scalable, performance-driven web applications
            using modern frontend and backend technologies.
          </p>

          {/* Stats */}
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

          {/* Buttons */}
          <div className="hero-buttons">
            <a
              href="/Karishmacv.pdf"
              download="Karishmacv.pdf"
              className="btn-hire"
            >
              Download CV ↓
            </a>
            <Link to="projects" smooth duration={700} offset={-100} className="btn-work">
              View Work
            </Link>
            <Link to="contact" smooth duration={700} offset={-100} className="btn-contact">
              Contact Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/karishma-priya-k-p-0b86b2171" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/karishmakp1997-ship-it" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://my-portfolio-a62c.vercel.app/" target="_blank" rel="noreferrer" className="social-icon" title="Portfolio">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Right Profile Image ── */}
        <div className="hero-image-wrapper" ref={imgRef}>

          {/* Sparkle */}
          <div className="sparkle sparkle-1">✦</div>
          <div className="sparkle sparkle-2">✦</div>

          <img
            src={profileImg}
            alt="Karishma Priya"
            className={`profile-img ${hovered ? "hovered" : ""}`}
            onMouseEnter={() => {
              hasHovered.current = true;
              setHovered(true);
              // Force straight immediately
              if (imgRef.current) {
                imgRef.current.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
              }
            }}
            onMouseLeave={() => {}} // intentionally empty — no reset!
          />

          {/* Floating badges */}
          <div className="hero-badge badge-top"><span>⚛️</span> React.js</div>
          <div className="hero-badge badge-bottom"><span>🐍</span> Django</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot" />
      </div>
    </section>
  );
}