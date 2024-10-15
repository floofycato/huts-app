import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { BookingContext } from '../context/BookingContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import ContactSection from '../components/ContactSection';
import emailjs from 'emailjs-com';

const BookingSummaryPage = () => {
  const { state, dispatch } = useContext(BookingContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const saveBooking = async () => {
    return await addDoc(collection(db, 'bookings'), {
      customerName: state.confirmedBooking?.customerName,
      email: state.confirmedBooking?.email,
      date: state.confirmedBooking?.date,
      hutsBooked: state.confirmedBooking?.hutsBooked,
      timestamp: new Date(),
    });
  };
  
  const sendEmailNotification = async () => {
    return await emailjs.send(SERVICE_ID, TEMPLATEBOOKING_ID, {
      customer_name: state.confirmedBooking?.customerName,
      customer_email: state.confirmedBooking?.email,
      booking_date: state.confirmedBooking?.date,
      huts_booked: state.confirmedBooking?.hutsBooked,
    }, USER_ID);
  };
  
  const handleSubmit = async () => {
    setLoading(true);
    try {
      await saveBooking();
      await sendEmailNotification();
      setMessage('Booking has been successfully submitted!');
      setShowModal(true);
      setError(null);
    } catch (err) {
      setError('Failed to submit booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    dispatch({
      type: 'EDIT_BOOKING',
      payload: {
        date: state.confirmedBooking?.date,
        hutsBooked: state.confirmedBooking?.hutsBooked,
      },
    });
    navigate('/booking'); // Navigate back to the booking page
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8">Booking Summary</h1>
          <p className="text-lg mb-4">Name: 
            <span className="font-bold"> {state.confirmedBooking?.customerName}</span>
          </p>
          <p className="text-lg mb-4">Email:
            <span className="font-bold"> {state.confirmedBooking?.email}</span>
          </p>
          <p className="text-lg mb-4">Selected Date:
            <span className="font-bold"> {state.confirmedBooking?.date}</span>
          </p>
          <p className="text-lg mb-8">Number of huts booked:
            <span className="font-bold"> {state.confirmedBooking?.hutsBooked}</span>
          </p>
          
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded mb-4"
          >
            Confirm Booking
          </button>

          <button
            onClick={handleEdit}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded mx-2"
          >
            Edit Booking
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-8 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-2xl font-bold mb-4">Booking Successful!</h2>
            <p className="text-lg mb-4">{message}</p>
            <button
              onClick={() => {
                setShowModal(false);
                navigate('/'); // Redirect to homepage
              }}
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <ContactSection />
    </div>
  );
};

export default BookingSummaryPage;
