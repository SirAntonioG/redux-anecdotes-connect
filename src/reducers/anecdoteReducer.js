import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

// initialState
const initialState = [];

// slice reducers
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const vote = (id) => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    const anecdoteToVoteIndex = anecdotes.findIndex((item) => item.id === id);
    const anecdoteToVote = anecdotes[anecdoteToVoteIndex];
    const votedAnecdote = await anecdoteService.updateAnecdoteVote(id, {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1,
    });
    anecdotes[anecdoteToVoteIndex] = votedAnecdote;
    dispatch(setAnecdotes(anecdotes));
  };
};

export default anecdoteSlice.reducer;
