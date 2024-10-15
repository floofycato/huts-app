import React from 'react';
import GalleryModalManager from './GalleryModalManager';

const FeatureGallery = () => {
  return (
    <GalleryModalManager>
      {(openModal) => (
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Resort Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <img
                src="./images/mic.jpg"
                alt="mic"
                className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() =>
                  openModal(
                    './images/mic.jpg',
                    'Enjoy a fun karaoke session or an acoustic live show in the evening. Sing your heart out or relax to the sounds of live music!',
                    'Sing, laugh, and enjoy!'
                  )
                }
              />
              <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md">Sing, laugh, and enjoy!</p>
            </div>
            <div className="relative">
              <img
                src="./images/grill.jpg"
                alt="grill"
                className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() =>
                  openModal(
                    './images/grill.jpg',
                    'Our grill is ready for you! Whether it’s a barbecue party with friends or a family cookout, we’ve got you covered.',
                    'Grill and chill!'
                  )
                }
              />
              <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md">Grill and chill!</p>
            </div>
            <div className="relative">
              <img
                src="./images/ball.jpg"
                alt="ball"
                className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() =>
                  openModal(
                    './images/ball.jpg',
                    'A fun and safe space for kids with a pool ball and kiddie slide in the background. Perfect for family fun!',
                    'Family-friendly fun!'
                  )
                }
              />
              <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md">Family-friendly fun!</p>
            </div>
          </div>
        </div>
      )}
    </GalleryModalManager>
  );
};

export default FeatureGallery;
