import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

// get all anecdotes
const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

// create new anecdotes
const createNew = async (content) => {
  const object = {
    content,
    votes: 0,
  };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const anecdoteService = { getAll, createNew };

export default anecdoteService;
