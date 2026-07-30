function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>

      <form noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
          ></textarea>
        </div>

        <div>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;