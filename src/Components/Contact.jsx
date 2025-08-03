import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hxe6dns', 'template_fny9j64', form.current, 'XelWRtI4MXw063mWl')
      .then((result) => {
          alert('Message sent successfully!');
          form.current.reset();
      }, (error) => {
          alert('Something went wrong: ' + error.text);
      });
  };

  return (
    <div id="contact" className="Contact">
      <div className="Contact-Main">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Get in touch with us!</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="ContactUs">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
