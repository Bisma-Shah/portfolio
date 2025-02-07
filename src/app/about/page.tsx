// import Image from "next/image";
import Image from "next/image";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-image-container">
        <Image
          src="/profile.avif"
          alt="Profile"
          height={500}
          width={500}
          className="about-image"
        />
      </div>

      <div className="about-text-container">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Hello! I’m Bisma from Karachi, Pakistan. I’m currently studying cloud
          computing and generative AI at GIAIC, working towards becoming a
          Certified Cloud Applied Generative AI Engineer.
        </p>
        <p className="about-description">
          I have a strong foundation in web development technologies like HTML,
          CSS, TypeScript, JavaScript, and frameworks such as React and Tailwind
          CSS. I am currently learning Next.js and working on improving my
          skills in web development. My goal is to create high-quality and
          responsive web applications. I’m passionate about leveraging my skills
          in cloud and AI technologies to develop innovative and scalable
          solutions that meet clients' needs and exceed their expectations.
        </p>
        <button className="about-button">View Resume</button>
      </div>
    </section>
  );
};

export default About;
