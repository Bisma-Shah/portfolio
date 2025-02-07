import "../styles/hero.css";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">
      <Image
        src="/profile.avif"
        alt="Profile"
        height={400}
        width={400}
        className="profile-image"
      />
      <h2 className="hero-name">Bisma Shah</h2>
      <p className="hero-title">Software Engineer</p>
      <div className="button-group">
        <button className="contact-button">Contact Me</button>
      </div>
      <div className="social-links">
        <Link href="https://github.com" className="icons">
          <FaGithub />
        </Link>
        <Link href="https://linkedin.com" className="icons">
          <FaLinkedin />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
