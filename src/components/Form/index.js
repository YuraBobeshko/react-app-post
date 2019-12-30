import { connect } from 'react-redux';
import { Form } from './Form';
import { loadData, loginCurrentUser, setCurrentUser } from '../../store/actions';

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
  loginCurrentUser,
  setCurrentUser,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(Form);

export { Enhanced as Form };