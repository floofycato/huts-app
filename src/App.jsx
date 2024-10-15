import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import BookingSummaryPage from './pages/BookingSummaryPage';
import ContactPage from './pages/ContactPage';
import BookingProvider from './context/BookingContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <BookingProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking-summary" element={<BookingSummaryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;