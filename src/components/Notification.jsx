import { connect } from 'react-redux';

const Notification = (props) => {
  const display = props.notification !== '' ? 'block' : 'none';

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
    notification: state.notification,
  };
};

const ConnectedNotification = connect(mapStateToProps)(Notification);
export default ConnectedNotification;
