export const initialState = {
  selectedDate: '',
  confirmedBooking: null,
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_DATE':
      return {
        ...state,
        selectedDate: action.payload.date,
      };
    case 'CONFIRM_BOOKING':
      return {
        ...state,
        confirmedBooking: {
          customerName: action.payload.customerName,
          email: action.payload.email,
          date: state.selectedDate,
          hutsBooked: action.payload.hutsBooked,
        },
      };
    case 'EDIT_BOOKING':
      return {
        ...state,
        selectedDate: action.payload.date,
        confirmedBooking: null, // Clear the confirmed booking for editing
      };
    default:
      return state;
  }
};

export default bookingReducer;
