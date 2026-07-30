function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 60 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skills-items"
            data-level={skill.level}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;