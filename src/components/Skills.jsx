import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 /> },
    { name: "CSS", level: 80, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 75, icon: <FaJs /> },
    { name: "React", level: 60, icon: <FaReact /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skills-items" key={skill.name}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;