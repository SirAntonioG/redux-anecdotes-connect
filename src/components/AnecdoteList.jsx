import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';

export const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes }) => anecdotes);
  const anecdotesSorted = [...anecdotes].sort((a, b) => a.votes - b.votes);
  
  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotesSorted.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}
