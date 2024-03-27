import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
      searchResult: null,
    },
    reducers: {
        
      setSearchResult: (state, action) => {
        state.searchResult = action.payload;
      },
    },
  });
  
  export const { setSearchResult } = searchSlice.actions;
  export const selectSearchResult = state => state.search.searchResult;
  
  export default searchSlice.reducer;