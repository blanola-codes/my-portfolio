function Stats() {
  const stats = [
    {
      number: "3+",
      label: "Projects"
    },
    {
      number: "4",
      label: "Technologies"
    },
    {
      number: "100+",
      label: "Hours Learning"
    },
    {
      number: "2026",
      label: "Graduate"
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