import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HutGallery from '../components/HutGallery';
import FeatureGallery from '../components/FeatureGallery';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HutGallery />
      <FeatureGallery />
      <ContactSection />
    </div>
  );
};

export default HomePage;
