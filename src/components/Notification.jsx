import { connect } from 'react-redux';

const Notification = (props) => {
  const display = props.notification !== '' ? 'block' : 'none';

  console.log('notification', props.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: `${display}`,
  };
  return <div style={style}>{props.notification}</div>;
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification.message,
  };
};

const ConnectedNotification = connect(mapStateToProps)(Notification);
export default ConnectedNotification;
