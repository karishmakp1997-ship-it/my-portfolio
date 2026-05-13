import { useState } from "react";
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

  const handleCopy = () => {
    navigator.clipboard.writeText("karishmakp1997@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Header */}
        <p className="contact-label">Let's Talk</p>
        <h2 className="contact-title">Get In <span>Touch</span></h2>
        <p className="contact-sub">
          Open to full-time roles, internships, and freelance projects.
          <br />Feel free to reach out — I'd love to connect! 😊
        </p>

        {/* Availability badge */}
        <div className="availability-badge">
          <span className="avail-dot" />
          Available for opportunities — Looking for Full Stack Developer roles
        </div>

        {/* Email card */}
        <div className="email-card" onClick={handleCopy}>
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
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="social-card"
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
        <p className="contact-footer">
          Built with ⚛️ React.js &nbsp;•&nbsp; Deployed on 🚀 Vercel
        </p>

      </div>
    </section>
  );
}