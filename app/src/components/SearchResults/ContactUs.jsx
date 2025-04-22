import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below or reach out to us using the contact information provided.</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Our Contact Information</h3>
        <p><strong>Address:</strong> 123 Food Street, Mumbai, MH 400001, India</p>
        <p><strong>Email:</strong> info@foodyzone.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Business Hours:</strong> Monday - Sunday, 10:00 AM - 10:00 PM</p>
      </div>

      <style jsx>{`
        .contact-us-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
          font-family: sans-serif;
        }

        h2 {
          color: #333;
          margin-bottom: 20px;
          text-align: center;
        }

        p {
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .contact-form {
          margin-bottom: 30px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        input[type='text'],
        input[type='email'],
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
        }

        textarea {
          resize: vertical;
        }

        button[type='submit'] {
          background-color: #ff6b6b; /* Example vibrant color */
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        button[type='submit']:hover {
          background-color: #e05252;
        }

        .contact-info {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        .contact-info h3 {
          color: #333;
          margin-top: 0;
          margin-bottom: 15px;
        }

        .contact-info p {
          margin-bottom: 10px;
        }

        .contact-info strong {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;