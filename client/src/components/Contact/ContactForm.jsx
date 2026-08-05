import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  /* =========================================
                  FORM STATE
  ========================================= */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  /* =========================================
                INPUT CHANGE
  ========================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  /* =========================================
                  FORM SUBMIT
  ========================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Backend integration will be added here later.

      Example future request:

      POST /api/contact

      {
        name,
        email,
        phone,
        subject,
        message
      }
    */

    console.log("Contact Form Data:", formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* =========================================
                      FORM HEADER
      ========================================= */}

      <div className="contact-form-header">
        <h3>Send Me a Message</h3>

        <p>
          Fill in the details below and I'll get back to you as soon as
          possible.
        </p>
      </div>

      {/* =========================================
                      NAME
      ========================================= */}

      <div className="form-group">
        <label htmlFor="contact-name">
          Your Name <span>*</span>
        </label>

        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          autoComplete="name"
          required
        />
      </div>

      {/* =========================================
                      EMAIL
      ========================================= */}

      <div className="form-group">
        <label htmlFor="contact-email">
          Email Address <span>*</span>
        </label>

        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          autoComplete="email"
          required
        />
      </div>

      {/* =========================================
                      PHONE
      ========================================= */}

      <div className="form-group">
        <label htmlFor="contact-phone">Phone Number</label>

        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          autoComplete="tel"
        />
      </div>

      {/* =========================================
                      SUBJECT
      ========================================= */}

      <div className="form-group">
        <label htmlFor="contact-subject">
          Subject <span>*</span>
        </label>

        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What would you like to discuss?"
          required
        />
      </div>

      {/* =========================================
                      MESSAGE
      ========================================= */}

      <div className="form-group">
        <label htmlFor="contact-message">
          Message <span>*</span>
        </label>

        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="7"
          placeholder="Write your message..."
          required
        />
      </div>

      {/* =========================================
                    SUBMIT BUTTON
      ========================================= */}

      <button type="submit" className="contact-submit-btn">
        <span>Send Message</span>

        <FaPaperPlane />
      </button>
    </form>
  );
}

export default ContactForm;
