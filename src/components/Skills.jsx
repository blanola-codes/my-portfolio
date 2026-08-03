import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

function Skills() {

  const skills = [

    {
      name: "HTML",
      level: 90,
      icon: <FaHtml5 />,
      color: "#E34F26",
    },

    {
      name: "CSS",
      level: 85,
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },

    {
      name: "JavaScript",
      level: 80,
      icon: <FaJs />,
      color: "#F7DF1E",
    },

    {
      name: "React",
      level: 70,
      icon: <FaReact />,
      color: "#61DAFB",
    },

  ];

  return (

    <section id="skills" className="skills-section">

      <h2>Technical Skills</h2>

      <div className="skills-grid">

        {skills.map((skill) => (

          <div className="skills-items" key={skill.name}>

            <div className="skill-top">

              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <div>

                <h3>{skill.name}</h3>

                <p>{skill.level}%</p>

              </div>

            </div>

            <div className="progress-bar">

              <div
                className="progress"
                style={{
                  width: `${skill.level}%`,
                  background: skill.color,
                }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Skills;