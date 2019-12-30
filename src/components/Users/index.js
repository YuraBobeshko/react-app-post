import { connect } from 'react-redux';
import { Users } from './Users';
import { loadData, setCurrentUser, setLogin } from '../../store/actions';

function mapState2Props(state) {
  return {
    listUser: state.listUser,
    listPost: state.listPost,
    listMessage: state.listMessage,
    currentUser: state.currentUser,
    login: state.login,
    error: state.error,
  };
}

const mapDispatch2Props = {
  loadData,
  setCurrentUser,
  setLogin,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(Users);

export { Enhanced as Users };