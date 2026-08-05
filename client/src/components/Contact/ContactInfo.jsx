import { useState } from "react";
import {
  FaRegCopy,
  FaCheck,
  FaGithub,
  FaLinkedinIn,
  FaExternalLinkAlt,
} from "react-icons/fa";

function ContactInfo() {
  const [copiedField, setCopiedField] = useState("");

  const email = "utsav.vinod5246@gmail.com";
  const phone = "+91 7698457248";

  const copyToClipboard = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopiedField(field);

      setTimeout(() => {
        setCopiedField("");
      }, 2000);
    } catch (error) {
      console.error("Unable to copy:", error);
    }
  };

  return (
    <div className="contact-info">
      <h3>Get In Touch</h3>

      <p>
        I'm open to discussing internships, full-time opportunities,
        collaborative projects, and software development opportunities.
      </p>

      {/* EMAIL */}

      <div className="info-item">
        <h4>Email</h4>

        <div className="info-value-row">
          <a href={`mailto:${email}`} className="info-value">
            {email}
          </a>

          <button
            type="button"
            className="copy-button"
            onClick={() => copyToClipboard(email, "email")}
            aria-label="Copy email address"
          >
            {copiedField === "email" ? (
              <>
                <FaCheck />
                <span>Copied</span>
              </>
            ) : (
              <>
                <FaRegCopy />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* PHONE */}

      <div className="info-item">
        <h4>Phone</h4>

        <div className="info-value-row">
          <a href="tel:+917698457248" className="info-value">
            {phone}
          </a>

          <button
            type="button"
            className="copy-button"
            onClick={() => copyToClipboard(phone, "phone")}
            aria-label="Copy phone number"
          >
            {copiedField === "phone" ? (
              <>
                <FaCheck />
                <span>Copied</span>
              </>
            ) : (
              <>
                <FaRegCopy />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* LOCATION */}

      <div className="info-item">
        <h4>Location</h4>

        <span className="info-value">
          NIMS University, Jaipur, Rajasthan, India
        </span>
      </div>

      {/* AVAILABILITY */}

      <div className="info-item">
        <h4>Availability</h4>

        <div className="availability-status">
          <span className="availability-dot"></span>

          <span>Open to Opportunities</span>
        </div>
      </div>

      {/* PROFESSIONAL PROFILES */}

      <div className="info-item">
        <h4>Professional Profiles</h4>

        <div className="contact-social-links">
          <a
            href="https://github.com/shriutsav5246"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <FaGithub />

            <span>GitHub</span>

            <FaExternalLinkAlt className="external-icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/shriutsav5246/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <FaLinkedinIn />

            <span>LinkedIn</span>

            <FaExternalLinkAlt className="external-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;