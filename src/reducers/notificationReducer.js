import { createSlice } from '@reduxjs/toolkit';

// initialState
const initialState = {
  message: '',
  timeoutId: null,
};

// slice reducers
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      return action.payload;
    },
    clearNotification(state, action) {
      return {
        message: '',
        timeoutId: null,
      };
    },
    hideNotification(state, action) {
      clearTimeout(state.timeoutId);
    },
  },
});

export const { showNotification, clearNotification, hideNotification } =
  notificationSlice.actions;

export const setNotification = (message, timeout) => {
  return (dispatch) => {
    const timeoutId = setTimeout(() => {
      dispatch(clearNotification());
    }, timeout * 1000);
    dispatch(hideNotification());
    dispatch(showNotification({ message, timeoutId }));
  };
};

export default notificationSlice.reducer;
