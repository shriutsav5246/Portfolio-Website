import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="logo">US</div>

        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button className="theme-btn">🌙</button>
      </div>
    </header>
  );
}

export default Navbar;
