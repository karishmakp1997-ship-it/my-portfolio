import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Karishma<span>.</span></h2>

      <ul className="nav-links">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={700}
            spy={true}
            offset={-100} // adjust for navbar height
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={700}
            spy={true}
            offset={-100}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={700}
            spy={true}
            offset={-100}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            spy={true}
            offset={-100}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
