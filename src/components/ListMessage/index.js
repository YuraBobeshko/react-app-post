import { connect } from 'react-redux';
import { ListMessage } from './ListMessage';
import { loadData } from '../../store/actions';

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
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(ListMessage);

export { Enhanced as ListMessage };