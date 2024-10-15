import React, { useState } from 'react';
import ImageModal from './ImageModal';

const GalleryModalManager = ({ children }) => {
  const [modalState, setModalState] = useState({
    isModalOpen: false,
    selectedImage: '',
    description: '',
    catchyText: '',
  });

  const openModal = (imageSrc, description, catchyText) => {
    setModalState({
      isModalOpen: true,
      selectedImage: imageSrc,
      description,
      catchyText,
    });
  };

  const closeModal = () => {
    setModalState({
      isModalOpen: false,
      selectedImage: '',
      description: '',
      catchyText: '',
    });
  };

  return (
    <>
      {children(openModal)}
      <ImageModal 
        isOpen={modalState.isModalOpen} 
        onClose={closeModal} 
        imageSrc={modalState.selectedImage} 
        description={modalState.description} 
        catchyText={modalState.catchyText} 
      />
    </>
  );
};

export default GalleryModalManager;
