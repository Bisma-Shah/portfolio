import "../styles/footer.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Back to Top heading  */}
        <h2 className="footer-heading">BACK TO TOP</h2>

        {/* Social media links  */}
        <div className="social-links">
          <Link href="https://github.com">
            <FaGithub className="icon" />
          </Link>
          <Link href="https://linkedin.com">
            <FaLinkedin className="icon" />
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="footer-copyright">
          <i className="footer-icon">&copy;</i>
          <span className="footer-text">
            2024 Bisma Shah All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
