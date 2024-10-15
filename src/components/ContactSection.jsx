import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <div className="bg-sky-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8">Have questions? We'd love to hear from you!</p>
        <Link to="/contact" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
