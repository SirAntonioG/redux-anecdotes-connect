import { createSlice } from '@reduxjs/toolkit';

// initialState
const initialState = '';

// slice reducers
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    deleteNotification(state, action) {
      return '';
    },
  },
});

export const { setNotification, deleteNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
