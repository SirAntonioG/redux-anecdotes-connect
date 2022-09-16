import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import Notification from './Notification';
import { deleteNotification, setNotification } from '../reducers/notificationReducer';

export const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes }) => anecdotes);
  const anecdotesSorted = [...anecdotes].sort((a, b) => a.votes - b.votes);
  
  const onClickVote = (anecdoteId, anecdoteContent) => {
    dispatch(vote(anecdoteId));
    dispatch(setNotification(`you voted '${anecdoteContent}'`));
    setTimeout(() => {
      dispatch(deleteNotification());
    }, 5000);
  }

  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      {anecdotesSorted.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => {onClickVote(anecdote.id,anecdote.content)}}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}
