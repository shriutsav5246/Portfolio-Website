function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Your Name" />

      <input type="email" placeholder="Email Address" />

      <input type="text" placeholder="Subject" />

      <textarea rows="7" placeholder="Write your message..." />

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
