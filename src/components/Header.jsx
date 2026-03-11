import '../css/Header.css'

function Header() {
  return (
    <header className="header">
      <a href="#hero" className="logo">Jamy's Portfolio</a>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#curriculum">Curriculum</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Team Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;