import React from "react";
import "./ContactForm.css"; // Importando o CSS

const ContactForm: React.FC = () => {
  return (
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
