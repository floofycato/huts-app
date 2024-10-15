import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div>
      <div className="h-screen bg-cover bg-sky-100 bg-center flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
