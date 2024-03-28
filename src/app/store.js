import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import searchReducer from '../features/searchSlice';
import parksReducer from '../features/parkSlice'
import bookingsReducer from '../features/bookingSlice'
import userProfileReducer from '../features/userprofileSlice';



export const store = configureStore({
  reducer: {
    user : userReducer,
    search: searchReducer,
    parks: parksReducer,
    bookings: bookingsReducer,
    userProfile: userProfileReducer,
  },
});
