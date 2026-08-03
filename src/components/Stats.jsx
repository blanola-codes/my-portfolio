function Stats() {
  const stats = [
    {
      number: "5+",
      label: "Projects Completed",
      icon: "🚀",
    },
    {
      number: "100+",
      label: "Hours of Coding",
      icon: "💻",
    },
    {
      number: "4+",
      label: "Technologies",
      icon: "⚡",
    },
    {
      number: "2029",
      label: "Expected Graduation",
      icon: "🎓",
    },
  ];

  return (
    <section className="stats-section">

      <div className="stats-grid">

        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>

            <div className="stat-icon">
              {stat.icon}
            </div>

            <h2>{stat.number}</h2>

            <p>{stat.label}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;