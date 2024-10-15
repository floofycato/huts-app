import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/pool.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Affordable Relaxation Awaits</h1>
        <p className="text-xl mb-8">Visit our resort stress-free by reserving your hut in a couple of clicks!</p>
        <Link to="/booking" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;