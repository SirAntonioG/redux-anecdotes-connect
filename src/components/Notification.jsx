import { useSelector } from "react-redux";


const Notification = () => {
  const notification = useSelector(({ notification }) => notification);
  const display = notification !== '' ? 'block' : 'none'
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: `${display}`
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification