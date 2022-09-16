import { createSlice } from '@reduxjs/toolkit';

// initialState
// const initialState = new RegExp();
const initialState = '';

// slice reducers
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterAnecdote(state, action) {
      // const regexpFilter = new RegExp(action.payload, 'i');
      return action.payload;
    },
  },
});

export const { filterAnecdote } = filterSlice.actions;
export default filterSlice.reducer;

// const handleFilterChange = (event) => {
//   setFilterValue(event.target.value);
//   const regexp = new RegExp(event.target.value, 'i');
//   setFilteredByName(persons.filter((person) => regexp.test(person.name)));
//   event.target.value === '' ? setFilterStatus(false) : setFilterStatus(true);
// };
