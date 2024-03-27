import { createSlice } from "@reduxjs/toolkit";

export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
      Bookingdata: [], 
    },
    reducers: {
      setbookings: (state, action) => {
        state.Bookingdata = action.payload;
      },
    },
  });

  export const { setbookings } = bookingsSlice.actions;

export const selectBookings = state => state.bookings.Bookingdata;

export default bookingsSlice.reducer;