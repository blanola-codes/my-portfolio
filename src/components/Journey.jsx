function Journey() {

  const journey = [

    {
      year: "2025",
      title: "Started B.Tech",
      desc: "B.Tech in Artificial Intelligence & Machine Learning.",
    },

    {
      year: "2026",
      title: "Started Web Development",
      desc: "Learned HTML, CSS and JavaScript.",
    },

    {
      year: "2026",
      title: "React Development",
      desc: "Built responsive projects using React.",
    },

    {
      year: "Now",
      title: "Looking for Internship",
      desc: "Building projects and improving my frontend skills.",
    },

  ];

  return (

    <section
id="journey"
className="journey-section"
>

      <h2>My Journey</h2>

      <div className="timeline">

        {journey.map((item) => (

          <div className="timeline-item" key={item.year}>

            <div className="timeline-year">

              {item.year}

            </div>

            <div className="timeline-content">

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Journey;