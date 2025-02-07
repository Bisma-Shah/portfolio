import "../styles/contact.css";
const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-description">
        Feel free to reach out below or on social media—I’d love to connect!
      </p>

      {/* Contact Form */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input-field"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input-field"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            className="textarea-field"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
