import React from 'react';
import GalleryModalManager from './GalleryModalManager';

const HutGallery = () => {
  return (
    <GalleryModalManager>
      {(openModal) => (
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Huts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <img
                src="./images/huts.jpg"
                alt="huts"
                className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() =>
                  openModal(
                    './images/huts.jpg',
                    'A wide-angle view of our cozy huts, surrounded by palm trees and a huge pool, offering the perfect tropical escape.',
                    'Your perfect tropical retreat!'
                  )
                }
              />
              <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md">Your perfect tropical retreat!</p>
            </div>
            <div className="relative">
              <img
                src="./images/model.jpg"
                alt="model"
                className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() =>
                  openModal(
                    './images/model.jpg',
                    'A close-up view of the hut’s cozy interior ambiance, showing off the warm wooden roof and inviting atmosphere.',
                    'Cozy and serene interiors!'
                  )
                }
              />
              <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md">Cozy and serene interiors!</p>
            </div>
            <div className="relative">
              <img
                src="./images/hut.jpg"
                alt="hut"
                className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() =>
                  openModal(
                    './images/hut.jpg',
                    'A solo hut nestled in the greenery, providing a tranquil and private space for a peaceful getaway.',
                    'Your private hideaway!'
                  )
                }
              />
              <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md">Your private hideaway!</p>
            </div>
          </div>
        </div>
      )}
    </GalleryModalManager>
  );
};

export default HutGallery;
