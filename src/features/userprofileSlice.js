// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: null,
  isLoading: false,
  error: null,
};

const userProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserProfileStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchUserProfileSuccess(state, action) {
      state.isLoading = false;
      state.userProfile = action.payload;
    },
    fetchUserProfileFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserProfileStart,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
} = userProfileSlice.actions;

export const selectUserProfile = (state) => state.user.userProfile;

export default userProfileSlice.reducer;
