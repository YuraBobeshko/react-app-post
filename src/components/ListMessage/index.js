import { connect } from 'react-redux';
import { ListMessage } from './ListMessage';
import { loadMessages } from '../../store/actions';

function mapState2Props(state) {
  return {
    listUser: state.listUser,
    listPost: state.listPost,
    listMessage: state.listMessage,
    isLoading: state.isLoading,
    error: state.error,
  };
}

const mapDispatch2Props = {
  loadMessages,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(ListMessage);

export { Enhanced as ListMessage };