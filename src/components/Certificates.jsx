import { FaCertificate } from "react-icons/fa";

function Certificates() {

  const certificates = [

    "Responsive Web Design",

    "JavaScript Fundamentals",

    "React Basics",

    "Python Programming",

  ];

  return (

    <section
id="certificates"
className="certificate-section"
>

      <h2>Certificates</h2>

      <div className="certificate-grid">

        {certificates.map((item) => (

          <div className="certificate-card" key={item}>

            <FaCertificate />

            <p>{item}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Certificates;