import "./Contact.css";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header">
          <span className="contact-tag">CONTACT</span>

          <h2>Let's Work Together</h2>

          <p>
            Have a project, internship opportunity, or collaboration in mind?
            Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-container">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
