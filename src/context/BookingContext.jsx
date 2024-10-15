import React, { createContext, useReducer } from 'react';
import bookingReducer, { initialState } from './bookingReducer';

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;