export default function Header() {
  return (
    
    <nav>
        <div className="nav-inner">
            <a href="#" className="nav-logo">Shikhar<span>Bhatnaggar</span></a>
            <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact" className="nav-cta">Hire me</a></li>
            </ul>
        </div>
    </nav>

  );
}