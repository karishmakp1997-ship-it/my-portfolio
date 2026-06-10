import { useState, useEffect, useRef } from "react";
import "./Contact.css";

const socials = [
  {
    label: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    href: "https://www.linkedin.com/in/karishma-priya-k-p-0b86b2171",
    color: "#0A66C2",
    desc: "Let's connect professionally",
  },
  {
    label: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    href: "https://github.com/karishmakp1997-ship-it",
    color: "#ffffff",
    desc: "Check out my projects",
  },
  {
    label: "Portfolio",
    icon: null,
    emoji: "🌐",
    href: "https://my-portfolio-silk-six-23.vercel.app/",
    color: "#b983ff",
    desc: "You're already here!",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const revealRefs = useRef([]);

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
      { threshold: 0.15 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el, i) => { revealRefs.current[i] = el; };

  const handleCopy = () => {
    navigator.clipboard.writeText("karishmakp1997@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Header */}
        <p className="contact-label reveal-item" ref={(el) => addRef(el, 0)} style={{ "--delay": "0s" }}>
          Let's Talk
        </p>
        <h2 className="contact-title reveal-item" ref={(el) => addRef(el, 1)} style={{ "--delay": "0.1s" }}>
          Get In <span>Touch</span>
        </h2>
        <p className="contact-sub reveal-item" ref={(el) => addRef(el, 2)} style={{ "--delay": "0.2s" }}>
          Open to full-time roles, internships, and freelance projects.
          <br />Feel free to reach out — I'd love to connect! 😊
        </p>

        {/* Availability badge */}
        <div className="availability-badge reveal-item" ref={(el) => addRef(el, 3)} style={{ "--delay": "0.3s" }}>
          <span className="avail-dot" />
          Available for opportunities — Looking for Full Stack Developer roles
        </div>

        {/* Email card */}
        <div className="email-card reveal-item" ref={(el) => addRef(el, 4)} style={{ "--delay": "0.4s" }} onClick={handleCopy}>
          <div className="email-icon">✉️</div>
          <div className="email-info">
            <span className="email-label">Email me at</span>
            <h4>karishmakp1997@gmail.com</h4>
          </div>
          <button className="copy-btn">
            {copied ? "✅ Copied!" : "📋 Copy"}
          </button>
        </div>

        {/* Social links */}
        <div className="socials-grid">
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="social-card reveal-item"
              ref={(el) => addRef(el, 5 + i)}
              style={{ "--delay": `${0.4 + i * 0.1}s` }}
            >
              <div className="social-icon-wrap">
                {s.icon ? (
                  <img src={s.icon} alt={s.label} className="social-icon" />
                ) : (
                  <span className="social-emoji">{s.emoji}</span>
                )}
              </div>
              <div className="social-info">
                <span className="social-name">{s.label}</span>
                <span className="social-desc">{s.desc}</span>
              </div>
              <span className="social-arrow">→</span>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="contact-footer reveal-item" ref={(el) => addRef(el, 8)} style={{ "--delay": "0.5s" }}>
          Built with ⚛️ React.js &nbsp;•&nbsp; Deployed on 🚀 Vercel
        </p>

      </div>
    </section>
  );
}