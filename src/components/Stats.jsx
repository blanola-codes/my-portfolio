function Stats() {
  const stats = [
    {
      number: "5+",
      label: "Projects"
    },
    {
      number: "4",
      label: "Technologies"
    },
    {
      number: "10+",
      label: "GitHub Repositories"
    },
    {
      number: "2029",
      label: "Expected Graduation Year"
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;