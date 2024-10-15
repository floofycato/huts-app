import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formState;
    const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;
    
    emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, email, message }, USER_ID)
      .then((response) => {
        setSubmitted(true);
        setError(null);
      })
      .catch((error) => {
        setError('Failed to send message. Please try again.');
        setSubmitted(false);
      });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {submitted ? (
        <p className="text-green-600 text-center">Thank you! Your message has been sent.</p>
      ) : (
        <>
          <div>
            <label className="block text-left">Your Name</label>
            <input
              type="text"
              value={formState.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border rounded-md py-2 px-4 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-left">Your Email</label>
            <input
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border rounded-md py-2 px-4 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-left">Your Message</label>
            <textarea
              value={formState.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="border rounded-md py-2 px-4 w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded w-full">
            Send Message
          </button>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </>
      )}
    </form>
  );
};

export default ContactForm;
