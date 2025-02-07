import Image from "next/image";
import "../styles/skills.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <p className="skills-intro">
        I have strong skills in core technologies and frameworks for creating
        dynamic, user-friendly applications.
      </p>

      <div className="skills-container">
        <div className="skill-box">
          <Image src="/html-logo.webp" alt="HTML logo" height={40} width={40} />
          <span className="skill-name">HTML</span>
        </div>
        <div className="skill-box">
          <Image src="/css-logo.webp" alt="CSS logo" height={40} width={40} />
          <span className="skill-name">CSS</span>
        </div>
        <div className="skill-box">
          <Image src="/javascript-logo.webp" alt="JavaScript logo" height={40} width={40} />
          <span className="skill-name">JavaScript</span>
        </div>
        <div className="skill-box">
          <Image src="/typescript-logo.png" alt="TypeScript logo" height={40} width={40} />
          <span className="skill-name">TypeScript</span>
        </div>
        <div className="skill-box">
          <Image src="/nextjs-icon.svg" alt="Nextjs logo" height={40} width={40} />
          <span className="skill-name">Nextjs</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;