import { createSlice } from '@reduxjs/toolkit';

// initialState
const initialState = '';

// slice reducers
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    votedNotification(state, action) {
      return action.payload;
    },
  },
});

export const { votedNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
