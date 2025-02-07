import Link from "next/link";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Bisma</h1>
      <nav className="navbar">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
        <Link href="/skills" className="nav-link">
          Skills
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
      <Link href="https://github.com" className="github-link">
        Visit GitHub
      </Link>
    </header>
  );
};

export default Header;


