import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  home: '',
};

const home = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setUser(state, action) {
      state.home = action.payload.home;
    },
  },
});

export const { setUser } = home.actions;

export default home.reducer;
