import { createSlice } from '@reduxjs/toolkit';

//
const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

// initialState
const initialState = [];

// slice reducers
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
    },
    vote(state, action) {
      const id = action.payload;
      const anecdoteToVoteIndex = state.findIndex((item) => item.id === id);
      const anecdoteToVote = state[anecdoteToVoteIndex];
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      };
      state[anecdoteToVoteIndex] = votedAnecdote;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, vote, appendAnecdote, setAnnecdotes } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
