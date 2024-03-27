// parksSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const parksSlice = createSlice({
  name: 'parks',
  initialState: {
    parkData: [], 
  },
  reducers: {
    setParkData: (state, action) => {
      state.parkData = action.payload;
    },
  },
});

export const { setParkData } = parksSlice.actions;

export const selectParkData = state => state.parks.parkData;

export default parksSlice.reducer;



