function Contact() {
  return (
    <section className="contact-section">

      <div className="contact-left">

        <h2>Let's Connect</h2>

        <p>
          📧{" "}
          <a href="mailto:dsouzablanola@gmail.com">
            dsouzablanola@gmail.com
          </a>
        </p>

        <p>
          💻{" "}
          <a
            href="https://github.com/blanola-codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <p>
          💼{" "}
          <a
            href="https://www.linkedin.com/in/blanola-joylin-dsouza-92278531a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>

      </div>

      <div className="contact-right">
        {/* Your form */}
      </div>

    </section>
  );
}

export default Contact;