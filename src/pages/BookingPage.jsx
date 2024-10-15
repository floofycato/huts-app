import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { BookingContext } from '../context/BookingContext';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const BookingPage = () => {
  const [customerName, setCustomerName] = useState(''); // State for customer's name
  const [email, setEmail] = useState(''); // State for customer's email
  const [hutsBooked, setHutsBooked] = useState(1); // Default to 1 hut
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(BookingContext);
  const navigate = useNavigate();

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handleDateChange = (e) => {
    dispatch({ type: 'SELECT_DATE', payload: { date: e.target.value } });
  };

  const handleBooking = async () => {
    if (!state.selectedDate) {
      alert('Please select a date.');
      return;
    }

    if (!customerName.trim()) {
      alert('Please enter your name.');
      return;
    }

    if (!email.trim() || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      // Query Firebase to get the total number of huts already booked on the selected date
      const q = query(
        collection(db, 'bookings'),
        where('date', '==', state.selectedDate)
      );

      const querySnapshot = await getDocs(q);

      let totalHutsBooked = 0;
      querySnapshot.forEach((doc) => {
        totalHutsBooked += doc.data().hutsBooked;
      });

      const hutsAvailable = 5 - totalHutsBooked;

      // Check if adding the current booking exceeds the limit
      if (hutsBooked > hutsAvailable) {
        alert(`Sorry, we're fully booked on this date for the number of huts you selected.`);
        setLoading(false);
        return;
      }

      // If there are huts available, proceed with the booking
      dispatch({
        type: 'CONFIRM_BOOKING',
        payload: { customerName, email, hutsBooked },
      });

      navigate('/booking-summary');
    } catch (error) {
      console.error("Error checking availability: ", error);
      alert('An error occurred while checking availability. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="pt-24 h-screen bg-cover bg-center flex items-center justify-center"
      >
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-center">Book Your Hut</h1>

          <label className="block mb-4 text-left">Your Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter your name"
            className="border rounded-md py-2 px-4 mb-4 w-full"
            required
          />

          <label className="block mb-4 text-left">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border rounded-md py-2 px-4 mb-4 w-full"
            required
          />

          <label className="block mb-4 text-left">Select a date</label>
          <input
            type="date"
            value={state.selectedDate}
            onChange={handleDateChange}
            min={today}  // Set the minimum date to today
            className="border rounded-md py-2 px-4 mb-4 w-full"
            required
          />

          <label className="block mb-4 text-left">Number of huts to book</label>
          <input
            type="number"
            value={hutsBooked}
            onChange={(e) => setHutsBooked(e.target.value)}
            min="1"
            max="5"
            className="border rounded-md py-2 px-4 mb-4 w-full"
            required
          />

          <button
            onClick={handleBooking}
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded w-full"
            disabled={loading}
          >
            {loading ? 'Checking Availability...' : 'Confirm Booking'}
          </button>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default BookingPage;
