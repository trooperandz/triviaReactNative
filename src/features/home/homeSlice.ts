import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

const home = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userName = action.payload.userName;
    },
  },
});

export const { setUser } = home.actions;

export default home.reducer;
