import { createSlice } from '@reduxjs/toolkit';

// initialState
const initialState = '';

// slice reducers
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationStatus(state, action) {
      return action.payload;
    },
    deleteNotification(state, action) {
      return '';
    },
  },
});

export const { setNotificationStatus, deleteNotification } =
  notificationSlice.actions;

export const setNotification = (message, timeout) => {
  return (dispatch) => {
    dispatch(setNotificationStatus(message));
    setTimeout(() => {
      dispatch(deleteNotification());
    }, timeout * 1000);
  };
};

export default notificationSlice.reducer;
