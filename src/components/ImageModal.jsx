import React from 'react';

const ImageModal = ({ isOpen, onClose, imageSrc, description, catchyText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
        <img src={imageSrc} alt="Enlarged view" className="w-full rounded-lg mb-4" />
        <p className="text-lg mb-4">{description}</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-300 text-black rounded-full px-3 py-1 text-lg font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
