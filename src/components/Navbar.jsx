import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const navLinks = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* Logo */}
      <h2 className="logo">Karishma <span> Priya</span></h2>

      {/* Desktop Nav */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link}>
            <Link
              to={link}
              smooth={true}
              duration={700}
              spy={true}
              offset={-100}
              activeClass="active"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="/Karishma_Resume.pdf"
        download
        className="nav-resume-btn"
      >
        Resume ⬇
      </a>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={700}
                offset={-80}
                onClick={() => setMenuOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/Karishma_Resume.pdf"
              download
              className="mobile-resume-btn"
              onClick={() => setMenuOpen(false)}
            >
              ⬇ Download Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
      )}

    </nav>
  );
}